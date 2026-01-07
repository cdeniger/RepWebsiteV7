{ pkgs, ... }: {
  channel = "stable-24.05"; # Specifies the Nix package channel for reproducibility.

  packages = [ # A list of software packages to be available in the development environment.
    pkgs.nodejs_20 # Provides the Node.js 20 runtime.
  ];

  idx = {
    extensions = [ # A list of VS Code extensions to install.
      "dbaeumer.vscode-eslint" # Integrates ESLint for code linting.
    ];

    workspace = {
      onCreate = { # Commands that run once when the workspace is created.
        npm-install = "cd rep && npm install"; # Installs npm dependencies.
      };
      onStart = { # Commands that run every time the workspace starts.
        dev-server = "cd rep && npm run dev"; # Starts the development server.
      };
    };

    previews = { # Configures web previews for the application.
      enable = true;
      previews = {
        web = {
          command = ["sh" "-c" "cd rep && npm run dev -- --port $PORT"]; # Command to start the web preview.
          manager = "web"; # Specifies that this is a web preview.
        };
      };
    };
  };
}
