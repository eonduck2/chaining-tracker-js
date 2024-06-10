const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "chaining-tracker" is now active!'
  );

  const disposable = vscode.commands.registerCommand(
    "chaining-tracker.helloWorld",
    function () {
      vscode.window.showInformationMessage(
        "Hello World from chaining-tracker!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
