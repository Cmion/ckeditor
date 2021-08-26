const COLORS = [
    {
        "color": "#FFEBEE",
        "label": "Red 50"
    },
    {
        "color": "#FFCDD2",
        "label": "Red 100"
    },
    {
        "color": "#EF9A9A",
        "label": "Red 200"
    },
    {
        "color": "#E57373",
        "label": "Red 300"
    },
    {
        "color": "#EF5350",
        "label": "Red 400"
    },
    {
        "color": "#F44336",
        "label": "Red 500"
    },
    {
        "color": "#E53935",
        "label": "Red 600"
    },
    {
        "color": "#D32F2F",
        "label": "Red 700"
    },
    {
        "color": "#C62828",
        "label": "Red 800"
    },
    {
        "color": "#B71C1C",
        "label": "Red 900"
    },
    {
        "color": "#FCE4EC",
        "label": "Pink 50"
    },
    {
        "color": "#F8BBD0",
        "label": "Pink 100"
    },
    {
        "color": "#F48FB1",
        "label": "Pink 200"
    },
    {
        "color": "#F06292",
        "label": "Pink 300"
    },
    {
        "color": "#EC407A",
        "label": "Pink 400"
    },
    {
        "color": "#E91E63",
        "label": "Pink 500"
    },
    {
        "color": "#D81B60",
        "label": "Pink 600"
    },
    {
        "color": "#C2185B",
        "label": "Pink 700"
    },
    {
        "color": "#AD1457",
        "label": "Pink 800"
    },
    {
        "color": "#880E4F",
        "label": "Pink 900"
    },
    {
        "color": "#F3E5F5",
        "label": "Purple 50"
    },
    {
        "color": "#E1BEE7",
        "label": "Purple 100"
    },
    {
        "color": "#CE93D8",
        "label": "Purple 200"
    },
    {
        "color": "#BA68C8",
        "label": "Purple 300"
    },
    {
        "color": "#AB47BC",
        "label": "Purple 400"
    },
    {
        "color": "#9C27B0",
        "label": "Purple 500"
    },
    {
        "color": "#8E24AA",
        "label": "Purple 600"
    },
    {
        "color": "#7B1FA2",
        "label": "Purple 700"
    },
    {
        "color": "#6A1B9A",
        "label": "Purple 800"
    },
    {
        "color": "#4A148C",
        "label": "Purple 900"
    },
    {
        "color": "#EDE7F6",
        "label": "Deep Purple 50"
    },
    {
        "color": "#D1C4E9",
        "label": "Deep Purple 100"
    },
    {
        "color": "#B39DDB",
        "label": "Deep Purple 200"
    },
    {
        "color": "#9575CD",
        "label": "Deep Purple 300"
    },
    {
        "color": "#7E57C2",
        "label": "Deep Purple 400"
    },
    {
        "color": "#673AB7",
        "label": "Deep Purple 500"
    },
    {
        "color": "#5E35B1",
        "label": "Deep Purple 600"
    },
    {
        "color": "#512DA8",
        "label": "Deep Purple 700"
    },
    {
        "color": "#4527A0",
        "label": "Deep Purple 800"
    },
    {
        "color": "#311B92",
        "label": "Deep Purple 900"
    },
    {
        "color": "#E8EAF6",
        "label": "Indigo 50"
    },
    {
        "color": "#C5CAE9",
        "label": "Indigo 100"
    },
    {
        "color": "#9FA8DA",
        "label": "Indigo 200"
    },
    {
        "color": "#7986CB",
        "label": "Indigo 300"
    },
    {
        "color": "#5C6BC0",
        "label": "Indigo 400"
    },
    {
        "color": "#3F51B5",
        "label": "Indigo 500"
    },
    {
        "color": "#3949AB",
        "label": "Indigo 600"
    },
    {
        "color": "#303F9F",
        "label": "Indigo 700"
    },
    {
        "color": "#283593",
        "label": "Indigo 800"
    },
    {
        "color": "#1A237E",
        "label": "Indigo 900"
    },
    {
        "color": "#E3F2FD",
        "label": "Blue 50"
    },
    {
        "color": "#BBDEFB",
        "label": "Blue 100"
    },
    {
        "color": "#90CAF9",
        "label": "Blue 200"
    },
    {
        "color": "#64B5F6",
        "label": "Blue 300"
    },
    {
        "color": "#42A5F5",
        "label": "Blue 400"
    },
    {
        "color": "#2196F3",
        "label": "Blue 500"
    },
    {
        "color": "#1E88E5",
        "label": "Blue 600"
    },
    {
        "color": "#1976D2",
        "label": "Blue 700"
    },
    {
        "color": "#1565C0",
        "label": "Blue 800"
    },
    {
        "color": "#0D47A1",
        "label": "Blue 900"
    },
    {
        "color": "#E1F5FE",
        "label": "Light Blue 50"
    },
    {
        "color": "#B3E5FC",
        "label": "Light Blue 100"
    },
    {
        "color": "#81D4FA",
        "label": "Light Blue 200"
    },
    {
        "color": "#4FC3F7",
        "label": "Light Blue 300"
    },
    {
        "color": "#29B6F6",
        "label": "Light Blue 400"
    },
    {
        "color": "#03A9F4",
        "label": "Light Blue 500"
    },
    {
        "color": "#039BE5",
        "label": "Light Blue 600"
    },
    {
        "color": "#0288D1",
        "label": "Light Blue 700"
    },
    {
        "color": "#0277BD",
        "label": "Light Blue 800"
    },
    {
        "color": "#01579B",
        "label": "Light Blue 900"
    },
    {
        "color": "#E0F7FA",
        "label": "Cyan 50"
    },
    {
        "color": "#B2EBF2",
        "label": "Cyan 100"
    },
    {
        "color": "#80DEEA",
        "label": "Cyan 200"
    },
    {
        "color": "#4DD0E1",
        "label": "Cyan 300"
    },
    {
        "color": "#26C6DA",
        "label": "Cyan 400"
    },
    {
        "color": "#00BCD4",
        "label": "Cyan 500"
    },
    {
        "color": "#00ACC1",
        "label": "Cyan 600"
    },
    {
        "color": "#0097A7",
        "label": "Cyan 700"
    },
    {
        "color": "#00838F",
        "label": "Cyan 800"
    },
    {
        "color": "#006064",
        "label": "Cyan 900"
    },
    {
        "color": "#E0F2F1",
        "label": "Teal 50"
    },
    {
        "color": "#B2DFDB",
        "label": "Teal 100"
    },
    {
        "color": "#80CBC4",
        "label": "Teal 200"
    },
    {
        "color": "#4DB6AC",
        "label": "Teal 300"
    },
    {
        "color": "#26A69A",
        "label": "Teal 400"
    },
    {
        "color": "#009688",
        "label": "Teal 500"
    },
    {
        "color": "#00897B",
        "label": "Teal 600"
    },
    {
        "color": "#00796B",
        "label": "Teal 700"
    },
    {
        "color": "#00695C",
        "label": "Teal 800"
    },
    {
        "color": "#004D40",
        "label": "Teal 900"
    },
    {
        "color": "#E8F5E9",
        "label": "Green 50"
    },
    {
        "color": "#C8E6C9",
        "label": "Green 100"
    },
    {
        "color": "#A5D6A7",
        "label": "Green 200"
    },
    {
        "color": "#81C784",
        "label": "Green 300"
    },
    {
        "color": "#66BB6A",
        "label": "Green 400"
    },
    {
        "color": "#4CAF50",
        "label": "Green 500"
    },
    {
        "color": "#43A047",
        "label": "Green 600"
    },
    {
        "color": "#388E3C",
        "label": "Green 700"
    },
    {
        "color": "#2E7D32",
        "label": "Green 800"
    },
    {
        "color": "#1B5E20",
        "label": "Green 900"
    },
    {
        "color": "#F1F8E9",
        "label": "Light Green 50"
    },
    {
        "color": "#DCEDC8",
        "label": "Light Green 100"
    },
    {
        "color": "#C5E1A5",
        "label": "Light Green 200"
    },
    {
        "color": "#AED581",
        "label": "Light Green 300"
    },
    {
        "color": "#9CCC65",
        "label": "Light Green 400"
    },
    {
        "color": "#8BC34A",
        "label": "Light Green 500"
    },
    {
        "color": "#7CB342",
        "label": "Light Green 600"
    },
    {
        "color": "#689F38",
        "label": "Light Green 700"
    },
    {
        "color": "#558B2F",
        "label": "Light Green 800"
    },
    {
        "color": "#33691E",
        "label": "Light Green 900"
    },
    {
        "color": "#F9FBE7",
        "label": "Lime 50"
    },
    {
        "color": "#F0F4C3",
        "label": "Lime 100"
    },
    {
        "color": "#E6EE9C",
        "label": "Lime 200"
    },
    {
        "color": "#DCE775",
        "label": "Lime 300"
    },
    {
        "color": "#D4E157",
        "label": "Lime 400"
    },
    {
        "color": "#CDDC39",
        "label": "Lime 500"
    },
    {
        "color": "#C0CA33",
        "label": "Lime 600"
    },
    {
        "color": "#AFB42B",
        "label": "Lime 700"
    },
    {
        "color": "#9E9D24",
        "label": "Lime 800"
    },
    {
        "color": "#827717",
        "label": "Lime 900"
    },
    {
        "color": "#FFFDE7",
        "label": "Yellow 50"
    },
    {
        "color": "#FFF9C4",
        "label": "Yellow 100"
    },
    {
        "color": "#FFF59D",
        "label": "Yellow 200"
    },
    {
        "color": "#FFF176",
        "label": "Yellow 300"
    },
    {
        "color": "#FFEE58",
        "label": "Yellow 400"
    },
    {
        "color": "#FFEB3B",
        "label": "Yellow 500"
    },
    {
        "color": "#FDD835",
        "label": "Yellow 600"
    },
    {
        "color": "#FBC02D",
        "label": "Yellow 700"
    },
    {
        "color": "#F9A825",
        "label": "Yellow 800"
    },
    {
        "color": "#F57F17",
        "label": "Yellow 900"
    },
    {
        "color": "#FFF8E1",
        "label": "Amber 50"
    },
    {
        "color": "#FFECB3",
        "label": "Amber 100"
    },
    {
        "color": "#FFE082",
        "label": "Amber 200"
    },
    {
        "color": "#FFD54F",
        "label": "Amber 300"
    },
    {
        "color": "#FFCA28",
        "label": "Amber 400"
    },
    {
        "color": "#FFC107",
        "label": "Amber 500"
    },
    {
        "color": "#FFB300",
        "label": "Amber 600"
    },
    {
        "color": "#FFA000",
        "label": "Amber 700"
    },
    {
        "color": "#FF8F00",
        "label": "Amber 800"
    },
    {
        "color": "#FF6F00",
        "label": "Amber 900"
    },
    {
        "color": "#FFF3E0",
        "label": "Orange 50"
    },
    {
        "color": "#FFE0B2",
        "label": "Orange 100"
    },
    {
        "color": "#FFCC80",
        "label": "Orange 200"
    },
    {
        "color": "#FFB74D",
        "label": "Orange 300"
    },
    {
        "color": "#FFA726",
        "label": "Orange 400"
    },
    {
        "color": "#FF9800",
        "label": "Orange 500"
    },
    {
        "color": "#FB8C00",
        "label": "Orange 600"
    },
    {
        "color": "#F57C00",
        "label": "Orange 700"
    },
    {
        "color": "#EF6C00",
        "label": "Orange 800"
    },
    {
        "color": "#E65100",
        "label": "Orange 900"
    },
    {
        "color": "#FBE9E7",
        "label": "Deep Orange 50"
    },
    {
        "color": "#FFCCBC",
        "label": "Deep Orange 100"
    },
    {
        "color": "#FFAB91",
        "label": "Deep Orange 200"
    },
    {
        "color": "#FF8A65",
        "label": "Deep Orange 300"
    },
    {
        "color": "#FF7043",
        "label": "Deep Orange 400"
    },
    {
        "color": "#FF5722",
        "label": "Deep Orange 500"
    },
    {
        "color": "#F4511E",
        "label": "Deep Orange 600"
    },
    {
        "color": "#E64A19",
        "label": "Deep Orange 700"
    },
    {
        "color": "#D84315",
        "label": "Deep Orange 800"
    },
    {
        "color": "#BF360C",
        "label": "Deep Orange 900"
    },
    {
        "color": "#EFEBE9",
        "label": "Brown 50"
    },
    {
        "color": "#D7CCC8",
        "label": "Brown 100"
    },
    {
        "color": "#BCAAA4",
        "label": "Brown 200"
    },
    {
        "color": "#A1887F",
        "label": "Brown 300"
    },
    {
        "color": "#8D6E63",
        "label": "Brown 400"
    },
    {
        "color": "#795548",
        "label": "Brown 500"
    },
    {
        "color": "#6D4C41",
        "label": "Brown 600"
    },
    {
        "color": "#5D4037",
        "label": "Brown 700"
    },
    {
        "color": "#4E342E",
        "label": "Brown 800"
    },
    {
        "color": "#3E2723",
        "label": "Brown 900"
    },
    {
        "color": "#FAFAFA",
        "label": "Grey 50"
    },
    {
        "color": "#F5F5F5",
        "label": "Grey 100"
    },
    {
        "color": "#EEEEEE",
        "label": "Grey 200"
    },
    {
        "color": "#E0E0E0",
        "label": "Grey 300"
    },
    {
        "color": "#BDBDBD",
        "label": "Grey 400"
    },
    {
        "color": "#9E9E9E",
        "label": "Grey 500"
    },
    {
        "color": "#757575",
        "label": "Grey 600"
    },
    {
        "color": "#616161",
        "label": "Grey 700"
    },
    {
        "color": "#424242",
        "label": "Grey 800"
    },
    {
        "color": "#212121",
        "label": "Grey 900"
    },
    {
        "color": "#ECEFF1",
        "label": "Blue Grey 50"
    },
    {
        "color": "#CFD8DC",
        "label": "Blue Grey 100"
    },
    {
        "color": "#B0BEC5",
        "label": "Blue Grey 200"
    },
    {
        "color": "#90A4AE",
        "label": "Blue Grey 300"
    },
    {
        "color": "#78909C",
        "label": "Blue Grey 400"
    },
    {
        "color": "#607D8B",
        "label": "Blue Grey 500"
    },
    {
        "color": "#546E7A",
        "label": "Blue Grey 600"
    },
    {
        "color": "#455A64",
        "label": "Blue Grey 700"
    },
    {
        "color": "#37474F",
        "label": "Blue Grey 800"
    },
    {
        "color": "#263238",
        "label": "Blue Grey 900"
    }
]

export {
    COLORS
}