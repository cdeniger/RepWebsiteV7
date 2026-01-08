{ pkgs, ... }: {
  channel = "unstable"; # Use the unstable channel for more up-to-date packages.

  packages = [ # A list of software packages to be available in the development environment.
    pkgs.nodejs_20 # Provides the Node.js 20 runtime.
    pkgs.firebase-tools # Provides the Firebase CLI for project management.
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
        # We will manage the dev server manually for now.
        # dev-server = "cd rep && npm run dev";
      };
    };
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["sh" "-c" "cd rep && npm run dev -- --port $PORT"];
          manager = "web";
        };
      };
    };
  };
}
