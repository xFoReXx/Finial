const icon = document.querySelector('.nav-icon')
const textP = document.querySelector('.text-p')
const textDiv = document.querySelector('.text')
const header = document.querySelector('header')
const moreScansButton = document.getElementById('moreBtn')
const moreScansButtonD = document.getElementById('moreBtnD')
const moreScansButtonM = document.getElementById('moreBtnM')
const sideMenu = document.getElementById('side-menu')
const sideMenuD = document.getElementById('side-menuD')
const sideMenuM = document.getElementById('side-menuM')
const closeMenuButton = document.getElementById('close-menu-btn')
const closeMenuButtonD = document.getElementById('close-menu-btnD')
const closeMenuButtonM = document.getElementById('close-menu-btnM')
const input = document.getElementById('searchInput')


let mainScanVisible = true

moreScansButton.addEventListener('click', function () {
	toggleSideMenuVisibility(sideMenu)
})

moreScansButtonD.addEventListener('click', function () {
	toggleSideMenuVisibility(sideMenuD)
})

moreScansButtonM.addEventListener('click', function () {
	toggleSideMenuVisibility(sideMenuM)
})

closeMenuButton.addEventListener('click', function () {
	hideSideMenu()
})

closeMenuButtonD.addEventListener('click', function () {
	hideSideMenu()
})

closeMenuButtonM.addEventListener('click', function () {
	hideSideMenu()
})

function toggleSideMenuVisibility(sideMenuElement) {
	const mainScan = document.querySelector('.main-scan')
	const sideMenus = document.querySelectorAll('.hidden-menu, .hidden-menuD, .hidden-menuM')

	sideMenus.forEach(menu => {
		if (menu === sideMenuElement) {
			menu.classList.toggle('visible')
			menu.classList.toggle('hidden')
		} else {
			menu.classList.add('hidden')
		}
	})

	// Sprawdzamy, czy którykolwiek panel boczny jest widoczny
	const anySideMenuVisible = Array.from(sideMenus).some(menu => !menu.classList.contains('hidden'))

	if (anySideMenuVisible) {
		mainScanVisible = false
		mainScan.classList.add('hidden')
	} else {
		mainScanVisible = true
		mainScan.classList.remove('hidden')
	}
}

function hideSideMenu() {
	const sideMenus = document.querySelectorAll('.hidden-menu, .hidden-menuD, .hidden-menuM')
	sideMenus.forEach(menu => menu.classList.add('hidden'))
	mainScanVisible = true
	document.querySelector('.main-scan').classList.remove('hidden')
}

icon.addEventListener('click', function (event) {
	textDiv.classList.toggle('hidden')
	event.stopPropagation()
})

textP.addEventListener('click', function (event) {
	textDiv.classList.toggle('hidden')
	event.stopPropagation()
})

document.addEventListener('click', function (event) {
	if (!header.contains(event.target)) {
		textDiv.classList.add('hidden')
	}
})

input.addEventListener('keyup', function (event) {
	if (event.keyCode === 13) {
		var imageUrl = '/assets/meme.png'
		var audioUrl = '/music/videoplayback.m4a'

		// Only legend knows \\
		// var audioUrl = '/music/too-fare.m4a'

		var combinedHtml = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Combined Page</title>
                <style>
                body {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;     
                    font-family: Arial, sans-serif;
                    background-color: #333;
                    padding: 20px;
                }
                    img {
                        position: relative;
                        max-width: 100%;
                        height: 800px;
                        margin-bottom: 20px;
                    }
                    audio {
                        margin-top: 20px;
                        width: 100%;
                    }
                    h1 {
                        position: absolute;
                        font-size: 100px;
                        z-index: 1000;
                        color: #fff;
                    }
                </style>
            </head>
            <body>
            <h1>It's end of your adventure</h1>
                <img src="${imageUrl}" alt="Obraz">
                <audio controls autoplay>
                    <source src="${audioUrl}" type="audio/mpeg">
                    Twoja przeglądarka nie obsługuje elementu audio.
                </audio>
            </body>
            </html>
        `

		var combinedWindow = window.open('', '_blank')
		combinedWindow.document.write(combinedHtml)
		combinedWindow.document.close()
	}
})
