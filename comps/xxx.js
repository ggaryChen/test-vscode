const vscode = require('vscode');

class Xxx {
  constructor({ title = '' } = {}) {
    this.panel = vscode.window.createWebviewPanel(
      'testWebview', // viewType
      title, // 视图标题
      vscode.ViewColumn.One, // 显示在编辑器的哪个部位
      {
        enableScripts: true, // 启用JS，默认禁用
        retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
      }
    );
    this.panel.webview.html = `<html><body>你好，我是Webview</body></html>`;
  }
  show() {
    this.panel.reveal();
  }
}

module.exports = Xxx;
