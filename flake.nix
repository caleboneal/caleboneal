{
  description = "Development environment for caleboneal.com";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { nixpkgs, ... }:
    let
      supportedSystems = [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-darwin"
        "x86_64-linux"
      ];
      forAllSystems = nixpkgs.lib.genAttrs supportedSystems;
    in
    {
      devShells = forAllSystems (
        system:
        let
          pkgs = import nixpkgs { inherit system; };
        in
        {
          default = pkgs.mkShell (
            {
              packages = with pkgs; [
                carlito
                nodejs_22
                typst
              ];
              TYPST_FONT_PATHS = "${pkgs.carlito}/share/fonts";
            }
            // pkgs.lib.optionalAttrs pkgs.stdenv.hostPlatform.isLinux {
              NIX_LD = pkgs.stdenv.cc.bintools.dynamicLinker;
              NIX_LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [ pkgs.stdenv.cc.cc ];
              shellHook = ''
                # Cloudflare's npm package downloads an ELF binary with a
                # non-Nix interpreter. Patch it after npm installs it.
                for workerd in node_modules/@cloudflare/workerd-linux-*/bin/workerd; do
                  if [ -f "$workerd" ] \
                    && [ "$( ${pkgs.patchelf}/bin/patchelf --print-interpreter "$workerd" )" \
                      != "${pkgs.stdenv.cc.bintools.dynamicLinker}" ]; then
                    ${pkgs.patchelf}/bin/patchelf \
                      --set-interpreter ${pkgs.stdenv.cc.bintools.dynamicLinker} "$workerd"
                  fi
                done
              '';
            }
          );
        }
      );
    };
}
