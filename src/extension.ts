'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "ionic-switch" is now active!');

    // open .html file.
    let disposable = vscode.commands.registerCommand('extension.ionSwitchHTML', () => {
        vscode.window.showInformationMessage('Hello World!');
        let textEditor = vscode.window.activeTextEditor;
        if (textEditor) {
            const fullPath: string = textEditor.document.fileName;
            // open
            const htmlFile: string = fullPath.replace(/^(\.tsc)/g, ".html");
            vscode.workspace.openTextDocument(htmlFile).then(function(TextDocument){
                vscode.window.showTextDocument(TextDocument, vscode.ViewColumn.One, false);
            });
        }
    });

    context.subscriptions.push(disposable);

    // open .tsc file.
    disposable = vscode.commands.registerCommand('extension.ionSwitchTS', () => {
        let textEditor = vscode.window.activeTextEditor;
        if (textEditor) {
            const fullPath: string = textEditor.document.fileName;
            // open
            const tscFile: string = fullPath.replace(/^(\.html)/g, ".ts");
            vscode.workspace.openTextDocument(tscFile).then(function(TextDocument){
                vscode.window.showTextDocument(TextDocument, vscode.ViewColumn.One, false);
            });
        }
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}