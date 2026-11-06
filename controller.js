const playerMenu = {
    label: "Player",
    options: [
        { name: "Godmode", checkbox: { checked: true } },
        { name: "Invisible", checkbox: { checked: false } },
        { name: "Infinite Stamina", checkbox: { checked: true } },
        { name: "Super Jump", checkbox: { checked: false } },
        { name: "Fast Run", checkbox: { checked: false } },
        { name: "Never Wanted", checkbox: { checked: true } },
        { separator: true, name: "Stats" },
        {
            name: "Movement Speed",
            slider: {
                options: [
                    { label: "Normal (1.0x)", value: 1 },
                    { label: "Fast (1.5x)", value: 2 },
                    { label: "Super (2.0x)", value: 3 },
                    { label: "Flash (5.0x)", value: 4 }
                ],
                value: 1
            }
        },
        { name: "Heal Player", button: { label: "Apply" } },
        { name: "Max Armor", button: { label: "Apply" } },
        { name: "Suicide", button: { label: "Execute" } }
    ]
};

const serverMenu = {
    label: "Server",
    options: [
        { separator: true, name: "World" },
        {
            name: "Weather",
            slider: {
                options: [
                    { label: "Clear", value: 1 },
                    { label: "Rain", value: 2 },
                    { label: "Thunder", value: 3 },
                    { label: "Snow", value: 4 },
                    { label: "Fog", value: 5 }
                ],
                value: 1
            }
        },
        {
            name: "Time Of Day",
            slider: {
                options: [
                    { label: "Morning", value: 1 },
                    { label: "Noon", value: 2 },
                    { label: "Evening", value: 3 },
                    { label: "Night", value: 4 }
                ],
                value: 2
            }
        },
        { name: "Freeze Time", checkbox: { checked: false } },
        { separator: true, name: "Session" },
        { name: "Players Online", button: { label: "View" } },
        { name: "Announce Message", button: { label: "Send" } },
        { name: "Server Info", button: { label: "Show" } }
    ]
};

const weaponMenu = {
    label: "Weapon",
    options: [
        { name: "Infinite Ammo", checkbox: { checked: true } },
        { name: "No Recoil", checkbox: { checked: true } },
        { name: "No Spread", checkbox: { checked: false } },
        { name: "Rapid Fire", checkbox: { checked: false } },
        { separator: true, name: "Damage" },
        {
            name: "Damage Multiplier",
            slider: {
                options: [
                    { label: "1x (Normal)", value: 1 },
                    { label: "2x Damage", value: 2 },
                    { label: "5x Damage", value: 3 },
                    { label: "10x Instakill", value: 4 }
                ],
                value: 2
            }
        },
        { name: "Explosive Bullets", checkbox: { checked: false } },
        { name: "Give All Weapons", button: { label: "Give" } },
        { name: "Remove Weapons", button: { label: "Remove" } }
    ]
};

const dynamicMenu = {
    label: "Dynamic Triggers",
    options: [
        { name: "Enable Triggers", checkbox: { checked: true } },
        { name: "Auto Trigger", checkbox: { checked: false } },
        { separator: true, name: "Config" },
        {
            name: "Trigger Delay",
            slider: {
                options: [
                    { label: "0.5 Seconds", value: 1 },
                    { label: "1 Second", value: 2 },
                    { label: "2 Seconds", value: 3 },
                    { label: "5 Seconds", value: 4 }
                ],
                value: 2
            }
        },
        {
            name: "Trigger Radius",
            slider: {
                options: [
                    { label: "Small", value: 1 },
                    { label: "Medium", value: 2 },
                    { label: "Large", value: 3 }
                ],
                value: 2
            }
        },
        { name: "Fire Trigger", button: { label: "Fire" } },
        { name: "Reset Triggers", button: { label: "Reset" } }
    ]
};

const vehicleMenu = {
    label: "Vehicle",
    options: [
        { name: "Vehicle Godmode", checkbox: { checked: true } },
        { name: "Auto Flip Over", checkbox: { checked: true } },
        { name: "Horn Boost", checkbox: { checked: false } },
        { separator: true, name: "Performance" },
        {
            name: "Engine Multiplier",
            slider: {
                options: [
                    { label: "Normal (100%)", value: 1 },
                    { label: "Sport (150%)", value: 2 },
                    { label: "Race (250%)", value: 3 },
                    { label: "Insane (500%)", value: 4 }
                ],
                value: 2
            }
        },
        { name: "Repair Vehicle", button: { label: "Repair" } },
        { name: "Clean Vehicle", button: { label: "Clean" } },
        { name: "Change Plate Text", button: { label: "Edit" } },
        { name: "Delete Vehicle", button: { label: "Delete" } }
    ]
};

const miscMenu = {
    label: "Miscellaneous",
    options: [
        { name: "Player ESP (Box)", checkbox: { checked: true } },
        { name: "Player Skeleton", checkbox: { checked: true } },
        { name: "Distance Info", checkbox: { checked: true } },
        { name: "Health / Armor Bars", checkbox: { checked: true } },
        { name: "Snaplines", checkbox: { checked: false } },
        { separator: true, name: "Movement" },
        { name: "Noclip", checkbox: { checked: false } },
        { name: "Custom Crosshair", checkbox: { checked: true } },
        { name: "Teleport to Waypoint", button: { label: "TP" } }
    ]
};

const settingsMenu = {
    label: "Settings",
    options: [
        {
            name: "Theme Color",
            slider: {
                options: [
                    { label: "Gray (#7a7a7a)", value: 1 },
                    { label: "Blue (#3498db)", value: 2 },
                    { label: "Green (#2ecc71)", value: 3 },
                    { label: "Purple (#9b59b6)", value: 4 },
                    { label: "Gold (#f39c12)", value: 5 }
                ],
                value: 1
            }
        },
        { name: "Play Audio Clicks", checkbox: { checked: true } },
        { name: "Show Keybinds", checkbox: { checked: true } },
        { name: "Menu Keybind", button: { label: "INSERT" } },
        { separator: true, name: "Data" },
        { name: "Reset All Configs", button: { label: "Reset" } },
        { name: "Save Config", button: { label: "Save" } }
    ]
};

const vipMenu = {
    label: "VIP Features",
    options: [
        { name: "VIP Godmode", checkbox: { checked: true } },
        { name: "Priority Queue", checkbox: { checked: true } },
        { name: "Money Drop", button: { label: "Drop" } },
        { name: "Spawn Super Car", button: { label: "Spawn" } },
        { separator: true, name: "Exclusive" },
        {
            name: "VIP Vehicle",
            slider: {
                options: [
                    { label: "Adder", value: 1 },
                    { label: "Zentorno", value: 2 },
                    { label: "T20", value: 3 },
                    { label: "Nero", value: 4 }
                ],
                value: 1
            }
        },
        { name: "Set Crew Tag", button: { label: "Set" } }
    ]
};

const mainMenu = {
    label: "Main Menu",
    options: [
        { name: "Player", submenu: playerMenu },
        { name: "Server", submenu: serverMenu },
        { name: "Weapon", submenu: weaponMenu },
        { name: "Dynamic Triggers", submenu: dynamicMenu },
        { name: "Vehicle", submenu: vehicleMenu },
        { name: "Miscellaneous", submenu: miscMenu },
        { name: "Settings", submenu: settingsMenu },
        { name: "VIP Features", submenu: vipMenu }
    ]
};

const THEME_COLORS = ["#7a7a7a", "#3498db", "#2ecc71", "#9b59b6", "#f39c12"];

let navStack = [mainMenu];
let currentItemIndex = 0;
let isMenuVisible = true;

let isKeybindsOpen = false;
let isSpectatorsOpen = false;
let isPlayerInfoOpen = false;
let isCrosshairOpen = false;
let isAimbotFovOpen = false;
let isHoveringTextOpen = false;

function currentNode() {
    return navStack[navStack.length - 1];
}
function currentOptions() {
    return currentNode().options;
}

function sendAction(action, data = {}) {
    window.postMessage({ action, ...data }, "*");
}

function firstSelectable(options) {
    for (let i = 0; i < options.length; i++) {
        if (!options[i].separator) return i;
    }
    return 0;
}

function renderCurrent(resetIndex = true) {
    const node = currentNode();
    sendAction("buildMenu", { tabs: [{ label: node.label, options: node.options }] });
    sendAction("setTabIndex", { index: 0 });

    if (resetIndex) currentItemIndex = firstSelectable(node.options);

    setTimeout(() => {
        sendAction("updateSelection", { index: currentItemIndex });
        updateTooltipForCurrent();
    }, 60);
}

function initializeNexusMenu() {
    sendAction("setDiscordUsername", { username: "alperencontact" });
    sendAction("setVisible", { visible: true });
    isMenuVisible = true;

    navStack = [mainMenu];
    currentItemIndex = 0;
    renderCurrent(true);

    sendAction("updateKeybindList", {
        keybinds: [
            { name: "Toggle No Clip", controlName: "Caps Lock", enabled: false },
            { name: "Toggle Freecam", controlName: "Minus Key", enabled: false }
        ]
    });
    sendAction("toggleKeybindList", { visible: true });

    setTimeout(() => {
        sendAction("notify", {
            type: "success",
            header: "DEV GN Hazir",
            message: "Menu yuklendi. INSERT ile ac/kapat, ENTER ile kategoriye gir, BACKSPACE ile geri don.",
            duration: 4500
        });
    }, 450);
}

function updateTooltipForCurrent() {
    sendAction("updateTooltip", { items: [] });
}

function openSubmenu(node) {
    navStack.push(node);
    renderCurrent(true);
}

function goBack() {
    if (navStack.length > 1) {
        navStack.pop();
        renderCurrent(true);
    } else {
        isMenuVisible = false;
        sendAction("setVisible", { visible: false });
    }
}

function activateCurrent() {
    const options = currentOptions();
    const item = options[currentItemIndex];
    if (!item) return;

    if (item.submenu) {
        openSubmenu(item.submenu);
        return;
    }

    if (item.checkbox !== undefined) {
        item.checkbox.checked = !item.checkbox.checked;
        sendAction("updateCheckbox", { itemIndex: currentItemIndex, checked: item.checkbox.checked });
        sendAction("notify", {
            type: item.checkbox.checked ? "success" : "warn",
            header: item.name,
            message: item.checkbox.checked ? "Ozellik aktif edildi." : "Ozellik kapatildi.",
            duration: 2200
        });
        updateTooltipForCurrent();
    } else if (item.button !== undefined) {
        sendAction("notify", {
            type: "info",
            header: item.name,
            message: `"${item.name}" aksiyonu tetiklendi.`,
            duration: 2200
        });
    }
}

function moveSelection(dir) {
    const options = currentOptions();
    let next = currentItemIndex;
    const len = options.length;
    for (let step = 0; step < len; step++) {
        next = (next + dir + len) % len;
        if (options[next] && !options[next].separator) {
            currentItemIndex = next;
            break;
        }
    }
    sendAction("updateSelection", { index: currentItemIndex });
    updateTooltipForCurrent();
}

function changeSlider(dir) {
    const item = currentOptions()[currentItemIndex];
    if (!item || !item.slider) return;
    const maxVal = item.slider.options.length;
    if (dir > 0) {
        item.slider.value = item.slider.value >= maxVal ? 1 : item.slider.value + 1;
    } else {
        item.slider.value = item.slider.value <= 1 ? maxVal : item.slider.value - 1;
    }
    sendAction("updateSlider", { itemIndex: currentItemIndex, value: item.slider.value });

    if (item.name === "Theme Color") {
        const chosen = THEME_COLORS[item.slider.value - 1] || "#7a7a7a";
        sendAction("updateMenuColors", { mainColor: chosen });
    }
    updateTooltipForCurrent();
}

window.addEventListener("keydown", (e) => {
    const overlay = document.querySelector(".input-overlay");
    if (overlay && overlay.style.pointerEvents === "auto") {
        if (e.key === "Escape") sendAction("closeTextInput");
        return;
    }

    if (e.key === "Delete" || e.key === "m" || e.key === "M") {
        isMenuVisible = !isMenuVisible;
        sendAction("setVisible", { visible: isMenuVisible });
        return;
    }

    if (!isMenuVisible) return;

    switch (e.key) {
        case "ArrowUp":
            e.preventDefault();
            moveSelection(-1);
            break;
        case "ArrowDown":
            e.preventDefault();
            moveSelection(1);
            break;
        case "ArrowLeft":
        case "q":
        case "Q": {
            e.preventDefault();
            const item = currentOptions()[currentItemIndex];
            if (item && item.slider) changeSlider(-1);
            break;
        }
        case "ArrowRight":
        case "e":
        case "E": {
            e.preventDefault();
            const item = currentOptions()[currentItemIndex];
            if (item && item.slider) changeSlider(1);
            break;
        }
        case "Enter":
        case " ":
            e.preventDefault();
            activateCurrent();
            break;
        case "Backspace":
            e.preventDefault();
            goBack();
            break;
    }
});

document.addEventListener("click", (e) => {
    const menuItem = e.target.closest(".menu-item");
    if (menuItem && menuItem.dataset.index !== undefined && !menuItem.classList.contains("separator")) {
        const idx = parseInt(menuItem.dataset.index, 10);
        const options = currentOptions();
        if (idx === currentItemIndex) {
            const item = options[idx];
            if (item && item.slider) changeSlider(1);
            else activateCurrent();
        } else {
            currentItemIndex = idx;
            sendAction("updateSelection", { index: currentItemIndex });
            updateTooltipForCurrent();
        }
    }
});

document.addEventListener("contextmenu", (e) => {
    if (e.target.closest("#menu-root")) {
        e.preventDefault();
        goBack();
    }
});

window.nexusTest = {
    toggleMenu() {
        isMenuVisible = !isMenuVisible;
        sendAction("setVisible", { visible: isMenuVisible });
    },

    testNotification(type = "success") {
        const types = {
            success: { header: "Islem Basarili", msg: "Arac basariyla tamir edildi ve boyandi." },
            warn: { header: "Uyari", msg: "Bu ozelligi kalabalik bolgelerde dikkatli kullanin." },
            error: { header: "Hata Olustu", msg: "Hedef oyuncu bulunamadi veya cevrimdisi." },
            info: { header: "DEV GN Bilgi", msg: "Surum 2.4.1 guncel durumda." }
        };
        const conf = types[type] || types.info;
        sendAction("notify", { type, header: conf.header, message: conf.msg, duration: 3500 });
    },

    testProgressBar() {
        sendAction("showProgressBar");
        let pct = 0;
        const interval = setInterval(() => {
            pct += 10;
            sendAction("updateProgress", { percent: pct, topText: "Bilesenler Yukleniyor...", bottomText: `Isleniyor: %${pct}` });
            if (pct >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    sendAction("hideProgressBar");
                    sendAction("notify", { type: "success", header: "Yukleme Tamamlandi", message: "Tum sistemler optimize edildi.", duration: 3000 });
                }, 600);
            }
        }, 200);
    },

    toggleKeybinds() {
        isKeybindsOpen = !isKeybindsOpen;
        if (isKeybindsOpen) {
            sendAction("updateKeybindList", {
                keybinds: [
                    { name: "Menu Toggle", controlName: "INSERT", enabled: true },
                    { name: "Freecam", controlName: "F2 Key", enabled: true },
                    { name: "Aimbot", controlName: "Left Shift", enabled: true },
                    { name: "Speed Boost", controlName: "Space Key", enabled: false },
                    { name: "Noclip", controlName: "X Key", enabled: true }
                ]
            });
        }
        sendAction("toggleKeybindList", { visible: isKeybindsOpen });
    },

    toggleSpectators() {
        isSpectatorsOpen = !isSpectatorsOpen;
        if (isSpectatorsOpen) {
            sendAction("updateSpectatorList", {
                spectators: [
                    { name: "Admin_John", id: 4 },
                    { name: "Spectator_Girl", id: 21 },
                    { name: "Mod_Helper", id: 89 }
                ]
            });
        }
        sendAction("toggleSpectatorList", { visible: isSpectatorsOpen });
    },

    togglePlayerInfo() {
        isPlayerInfoOpen = !isPlayerInfoOpen;
        if (isPlayerInfoOpen) {
            sendAction("setSelectedPlayer", {
                playerData: {
                    name: "Michael_Townley", id: 77, job: "Los Santos Police", group: "Supervisor",
                    health: 85, armor: 60, weapon: "WEAPON_CARBINERIFLE", isInVehicle: false,
                    speed: "0 km/h", distance: "18.4 m", isAlive: true, phone: "555-0149"
                }
            });
        } else {
            sendAction("clearSelectedPlayer");
        }
    },

    toggleCrosshair() {
        isCrosshairOpen = !isCrosshairOpen;
        sendAction(isCrosshairOpen ? "showCrosshair" : "hideCrosshair");
    },

    toggleAimbotFov() {
        isAimbotFovOpen = !isAimbotFovOpen;
        if (isAimbotFovOpen) {
            sendAction("ctxAimbotShow", { targetOpacity: 0.9, radius: 120, radiusOpacity: 0.6 });
            sendAction("ctxAimbotSet", {
                target: { x: window.innerWidth / 2 + 100, y: window.innerHeight / 2 - 80 },
                targetOpacity: 0.8, radius: 120, radiusOpacity: 0.6
            });
        } else {
            sendAction("ctxAimbotHide");
        }
    },

    testTextInput() {
        sendAction("openTextInput", { question: "Yeni Arac Plakasi Giriniz:", value: "NEXUS01", placeholder: "Orn: 34ABC123" });
    },

    testHoveringText() {
        isHoveringTextOpen = !isHoveringTextOpen;
        if (isHoveringTextOpen) {
            sendAction("setHoveringTextOptions", {
                options: [
                    { id: "1", name: "Teleport to Waypoint", data: "(Safe)" },
                    { id: "2", name: "Teleport to Custom Coord", data: "" },
                    { id: "3", name: "Teleport to Closest Vehicle", data: "(Driver)" },
                    { id: "4", name: "Teleport into Interior", data: "" }
                ]
            });
            sendAction("showHoveringText");
        } else {
            sendAction("hideHoveringText");
        }
    },

    changeColor(hex) {
        sendAction("updateMenuColors", { mainColor: hex });
        const idx = THEME_COLORS.indexOf(hex);
        if (idx >= 0) {
            const tc = settingsMenu.options.find(o => o.name === "Theme Color");
            if (tc && tc.slider) tc.slider.value = idx + 1;
        }
    }
};

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(initializeNexusMenu, 150);
});
