YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "chess.controller.AnalysisController",
        "chess.controller.Controller",
        "chess.controller.TacticController",
        "chess.dataSource.FolderTree",
        "chess.dataSource.GameList",
        "chess.model.Game",
        "chess.model.Move",
        "chess.parser.FenParser0x88",
        "chess.parser.Move0x88",
        "chess.parser.PositionValidator",
        "chess.pgn.Parser",
        "chess.remote.GameReader",
        "chess.view.SaveGame.NewGame",
        "chess.view.board.Board",
        "chess.view.board.GUI",
        "chess.view.board.Piece",
        "chess.view.button.NextGame",
        "chess.view.button.PreviousGame",
        "chess.view.button.SaveGame",
        "chess.view.button.TacticHint",
        "chess.view.button.TacticSolution",
        "chess.view.buttonbar.Game",
        "chess.view.command.Controller",
        "chess.view.command.Line",
        "chess.view.command.Panel",
        "chess.view.dialog.Comment",
        "chess.view.dialog.GameImport",
        "chess.view.dialog.NewGame",
        "chess.view.dialog.OverwriteMove",
        "chess.view.dialog.Promote",
        "chess.view.eco.VariationTree",
        "chess.view.folder.Tree",
        "chess.view.gamelist.Grid",
        "chess.view.highlight.Arrow",
        "chess.view.highlight.Square",
        "chess.view.installer.Installer",
        "chess.view.menuItems.GameImport",
        "chess.view.menuItems.NewGame",
        "chess.view.message.TacticMessage",
        "chess.view.metadata.FenField",
        "chess.view.metadata.Game",
        "chess.view.metadata.Move",
        "chess.view.notation.Panel",
        "chess.view.position.Board",
        "chess.view.position.Castling",
        "chess.view.position.Dialog",
        "chess.view.position.Pieces",
        "chess.view.position.SideToMove",
        "chess.view.user.Controller",
        "chess.view.user.Country",
        "chess.view.user.LoginButton",
        "chess.view.user.LoginWindow",
        "chess.view.user.LogoutButton",
        "chess.view.user.Panel",
        "chess.view.user.ProfileWindow",
        "chess.view.user.RegisterButton",
        "chess.view.user.RegisterWindow",
        "chess.view.user.SettingsButton",
        "chess.view.user.UserModel",
        "seek.View"
    ],
    "modules": [
        "Board",
        "Controller",
        "DataSource",
        "Dialog",
        "Grid",
        "Installer",
        "Menu",
        "Model",
        "Parser",
        "Tree",
        "User",
        "View"
    ],
    "allModules": [
        {
            "displayName": "Board",
            "name": "Board",
            "description": "Javascript Class for Chess Board and Pieces on the board\nJSON config type: chess.view.board.Board"
        },
        {
            "displayName": "Controller",
            "name": "Controller",
            "description": "Game controller base class. This class acts as the glue between\ngame models and views. When something happens in current game, it sends a message/event to the\ncontroller. The controller delegates this message to the views and all views interested"
        },
        {
            "displayName": "DataSource",
            "name": "DataSource",
            "description": "Data source for list of folders and databases\nby chess.view.gamelist.Grid"
        },
        {
            "displayName": "Dialog",
            "name": "Dialog",
            "description": "Game import dialog. Game import is only available to users with game edit privileges."
        },
        {
            "displayName": "Grid",
            "name": "Grid",
            "description": "List of games view. List of games is displayed in a grid."
        },
        {
            "displayName": "Installer",
            "name": "Installer",
            "description": "The DHTML Chess installer dialog"
        },
        {
            "displayName": "Menu",
            "name": "Menu",
            "description": "The game import menu item. This menu item will automatically be disabled when there are no\nvalid user sessions or if the user does not have access to the game import user role.\nOn click it will create a new chess.view.dialog.GameImport"
        },
        {
            "displayName": "Model",
            "name": "Model",
            "description": "Chess game model"
        },
        {
            "displayName": "Parser",
            "name": "Parser",
            "description": "Chess position parser"
        },
        {
            "displayName": "Tree",
            "name": "Tree",
            "description": "This view displays a list of folders and databases as a tree."
        },
        {
            "displayName": "User",
            "name": "User",
            "description": "Controller for the user login/registration module"
        },
        {
            "displayName": "View",
            "name": "View"
        }
    ]
} };
});