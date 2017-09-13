<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CountryLife</title>
<!-- build:css main.min.css -->
<link rel="stylesheet" href="css/main.css">
<!-- /build -->
</head>

<body>
<div id="CountryLife-game" class="game"></div>

<!-- build:remove -->
<!-- script src="//localhost:35729/livereload.js"></script -->
<!-- /build -->

<!-- build:js phaser.min.js-->
<script src="js/lib/phaser.js"></script>
<script src="js/lib/phaser-plugin-isometric.min.js"></script>
<script src="js/lib/rStats.js"></script>
<!-- /build -->

<!-- build:js main.min.js -->
<script src="js/browser/DeviceHandler.js?v=<?php echo time(); ?>"></script>

<script src="js/globals.js?v=<?php echo time(); ?>"></script>
<script src="js/browser/EventHandler.js?v=<?php echo time(); ?>"></script>

<script src="js/logic/EntityManager.js?v=<?php echo time(); ?>"></script>
<script src="js/logic/ScreenManager.js?v=<?php echo time(); ?>"></script>
<script src="js/logic/MenuManager.js?v=<?php echo time(); ?>"></script>
<script src="js/logic/Grid.js?v=<?php echo time(); ?>"></script>
<script src="js/logic/Camera.js?v=<?php echo time(); ?>"></script>
<script src="js/logic/GUIManager.js?v=<?php echo time(); ?>"></script>

<script src="js/states/Boot.js?v=<?php echo time(); ?>"></script>
<script src="js/states/LoadingScreen.js?v=<?php echo time(); ?>"></script>
<script src="js/states/Preloader.js?v=<?php echo time(); ?>"></script>
<script src="js/states/Menu.js?v=<?php echo time(); ?>"></script>
<script src="js/states/Game.js?v=<?php echo time(); ?>"></script>

<script src="js/main.js?v=<?php echo time(); ?>"></script>
<!-- /build -->
</body>
</html>
