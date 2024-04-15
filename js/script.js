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
		var combinedHtml = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Adventure</title>
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
                    iframe {
                        max-width: 100%;
                        margin-top: 80px;
                    }
                    h1 {
                        position: absolute;
                        font-size: 100px;
                        z-index: 1000;
                        color: #fff;
                        top: -10px;
                        margin: 0px;
                    }
                </style>
            </head>
            <body>
            <h1>It's end of your adventure</h1>
            <iframe width="1098" height="798" src="https://www.youtube.com/embed/V4-7VjGr3d8?si=7BoM4zYzBxT_RGfB" frameborder="0" allowfullscreen></iframe>
            </body>
            </html>
        `

		var combinedWindow = window.open('', '_blank')
		combinedWindow.document.write(combinedHtml)
		combinedWindow.document.close()
	}
})
