(function () {
  "use strict";

  const FACE_SHAPES = {
    oval: {
      label: "Ovalado",
      summary: "Rostro equilibrado: admite muchas monturas, especialmente geometricas suaves.",
      lookFor: [
        "Monturas ligeramente mas anchas que la parte mas amplia del rostro.",
        "Wayfarer, aviador, geometricas suaves y cat eye moderado.",
        "Puentes proporcionados para mantener el equilibrio natural."
      ],
      avoid: [
        "Monturas demasiado grandes que oculten las proporciones.",
        "Varillas muy bajas si buscas un efecto mas estilizado."
      ]
    },
    round: {
      label: "Redondo",
      summary: "Rostro de curvas suaves: convienen lineas angulares para definir.",
      lookFor: [
        "Monturas rectangulares, wayfarer y geometricas con bordes marcados.",
        "Colores oscuros o acetatos con contraste para afinar visualmente.",
        "Puentes altos que alarguen la zona media del rostro."
      ],
      avoid: [
        "Lentes redondos muy pequenos, porque pueden enfatizar la redondez.",
        "Monturas sin estructura o demasiado bajas."
      ]
    },
    square: {
      label: "Cuadrado",
      summary: "Mandibula marcada: funcionan curvas y formas que suavizan los angulos.",
      lookFor: [
        "Monturas redondas, ovaladas o aviador para suavizar la mandibula.",
        "Bordes delgados o metalicos si deseas un acabado mas ligero.",
        "Modelos con curvas en la parte inferior del lente."
      ],
      avoid: [
        "Rectangulares muy rigidos que repitan la linea de la mandibula.",
        "Monturas muy estrechas, porque endurecen la expresion."
      ]
    },
    heart: {
      label: "Corazon",
      summary: "Frente mas amplia y barbilla fina: conviene equilibrar la parte baja.",
      lookFor: [
        "Cat eye suave, aviador y monturas de borde inferior liviano.",
        "Tamanos medianos para no cargar visualmente la frente.",
        "Colores claros o transparentes si quieres un look delicado."
      ],
      avoid: [
        "Monturas muy pesadas arriba, porque amplian la frente.",
        "Modelos excesivamente anchos en la sien."
      ]
    },
    diamond: {
      label: "Diamante",
      summary: "Pomulos protagonistas: favorecen monturas que abren frente y mirada.",
      lookFor: [
        "Cat eye, ovalados y geometricos suaves que destaquen los ojos.",
        "Browline o detalles superiores si quieres balancear la frente.",
        "Monturas medianas que no presionen visualmente los pomulos."
      ],
      avoid: [
        "Lentes muy angostos que acentuen los pomulos.",
        "Formas demasiado pequenas para la anchura media del rostro."
      ]
    },
    rectangle: {
      label: "Rectangular",
      summary: "Rostro alargado: ayudan monturas altas y con presencia.",
      lookFor: [
        "Monturas altas, redondas, aviador o cuadradas con bordes suaves.",
        "Puentes mas bajos para acortar visualmente el rostro.",
        "Acetatos con presencia si buscas equilibrio."
      ],
      avoid: [
        "Monturas muy estrechas o bajas que alarguen mas la cara.",
        "Varillas extremadamente finas si necesitas balance visual."
      ]
    }
  };

  const HAIR_PROFILES = {
    open: {
      label: "Rostro despejado",
      advice: "Puedes usar monturas con mas caracter porque el rostro queda visible.",
      boostStyles: ["cat-eye", "geometric", "wayfarer"]
    },
    fringe: {
      label: "Flequillo o frente cubierta",
      advice: "Convienen monturas ligeras o de altura media para no saturar la frente.",
      boostStyles: ["aviator", "round", "rectangle"]
    },
    volume: {
      label: "Volumen superior",
      advice: "Equilibra con lentes de presencia media y evita cargar demasiado la parte alta.",
      boostStyles: ["rectangle", "wayfarer", "aviator"]
    },
    sideVolume: {
      label: "Volumen lateral",
      advice: "Busca monturas definidas pero no excesivamente anchas en las sienes.",
      boostStyles: ["round", "geometric", "cat-eye"]
    }
  };

  const PRODUCTS = [
    {
      brand: "Ray-Ban",
      model: "Wayfarer Classic RB2140",
      style: "wayfarer",
      color: "Negro brillante",
      price: "$$",
      compatibleShapes: ["round", "oval", "heart"],
      description: "Icono angular que define rostros redondos y mantiene un look urbano."
    },
    {
      brand: "Ray-Ban",
      model: "Aviator Metal RB3025",
      style: "aviator",
      color: "Dorado / verde",
      price: "$$",
      compatibleShapes: ["square", "heart", "rectangle", "oval"],
      description: "Curva amplia y puente delgado para suavizar mandibulas y equilibrar frentes."
    },
    {
      brand: "Carolina Herrera",
      model: "CH Carolina Cat Eye",
      style: "cat-eye",
      color: "Carey miel",
      price: "$$$",
      compatibleShapes: ["diamond", "heart", "oval"],
      description: "Silueta femenina con elevacion lateral para abrir la mirada."
    },
    {
      brand: "Carolina Herrera",
      model: "Essential Rectangular",
      style: "rectangle",
      color: "Borgona transludico",
      price: "$$$",
      compatibleShapes: ["round", "oval", "volume"],
      description: "Rectangular pulido con color elegante para definir sin verse pesado."
    },
    {
      brand: "Oakley",
      model: "Holbrook",
      style: "rectangle",
      color: "Negro mate",
      price: "$$",
      compatibleShapes: ["round", "oval", "heart"],
      description: "Perfil deportivo con lineas rectas que estructura rasgos suaves."
    },
    {
      brand: "Prada",
      model: "Symbole Geometric",
      style: "geometric",
      color: "Negro / havana",
      price: "$$$$",
      compatibleShapes: ["oval", "diamond", "round"],
      description: "Geometria moderna para un resultado editorial y sofisticado."
    },
    {
      brand: "Persol",
      model: "PO3092SM Round",
      style: "round",
      color: "Havana clasico",
      price: "$$$",
      compatibleShapes: ["square", "rectangle", "diamond"],
      description: "Redondo con acetato calido para suavizar angulos y aportar caracter."
    },
    {
      brand: "Vogue Eyewear",
      model: "Soft Cat Eye VO",
      style: "cat-eye",
      color: "Rosa transparente",
      price: "$$",
      compatibleShapes: ["heart", "diamond", "oval"],
      description: "Cat eye ligero para levantar facciones con una presencia suave."
    },
    {
      brand: "Michael Kors",
      model: "Chelsea Aviator",
      style: "aviator",
      color: "Rose gold",
      price: "$$$",
      compatibleShapes: ["square", "rectangle", "heart"],
      description: "Aviador glam con lente alto que ayuda a compensar rostros largos."
    },
    {
      brand: "Gucci",
      model: "Web Stripe Square",
      style: "geometric",
      color: "Negro con detalle verde-rojo",
      price: "$$$$",
      compatibleShapes: ["oval", "round", "diamond"],
      description: "Montura con presencia para quienes quieren un accesorio protagonista."
    },
    {
      brand: "Dolce & Gabbana",
      model: "DG Sharp Rectangle",
      style: "rectangle",
      color: "Carey oscuro",
      price: "$$$",
      compatibleShapes: ["round", "oval"],
      description: "Lineas nitidas y acetato fuerte para estilizar rostros con curvas."
    },
    {
      brand: "Tom Ford",
      model: "Fausto Navigator",
      style: "aviator",
      color: "Havana / dorado",
      price: "$$$$",
      compatibleShapes: ["square", "rectangle", "oval"],
      description: "Navigator amplio que suaviza rasgos marcados sin perder presencia."
    }
  ];

  const state = {
    analysis: null,
    selectedShape: "oval",
    selectedHair: "open",
    cameraStream: null
  };

  const els = {
    video: document.getElementById("camera"),
    canvas: document.getElementById("snapshot"),
    stage: document.querySelector(".media-stage"),
    dropzone: document.getElementById("dropzone"),
    startCamera: document.getElementById("startCamera"),
    capturePhoto: document.getElementById("capturePhoto"),
    uploadPhoto: document.getElementById("uploadPhoto"),
    resetPhoto: document.getElementById("resetPhoto"),
    statusMessage: document.getElementById("statusMessage"),
    detectedShape: document.getElementById("detectedShape"),
    detectedHair: document.getElementById("detectedHair"),
    confidence: document.getElementById("confidence"),
    confidenceBar: document.getElementById("confidenceBar"),
    shapeOverride: document.getElementById("shapeOverride"),
    hairOverride: document.getElementById("hairOverride"),
    recommendationSummary: document.getElementById("recommendationSummary"),
    fitTips: document.getElementById("fitTips"),
    avoidTips: document.getElementById("avoidTips"),
    brandFilter: document.getElementById("brandFilter"),
    styleFilter: document.getElementById("styleFilter"),
    resultCount: document.getElementById("resultCount"),
    productGrid: document.getElementById("productGrid")
  };

  function init() {
    populateBrandFilter();
    bindEvents();
    updateRecommendationView();
    renderProducts();
  }

  function bindEvents() {
    els.startCamera.addEventListener("click", startCamera);
    els.capturePhoto.addEventListener("click", capturePhoto);
    els.uploadPhoto.addEventListener("change", handleUpload);
    els.resetPhoto.addEventListener("click", resetPhoto);
    els.dropzone.addEventListener("click", handleDropzoneClick);
    els.dropzone.addEventListener("keydown", handleDropzoneKeydown);
    els.dropzone.addEventListener("dragenter", showDragState);
    els.dropzone.addEventListener("dragover", showDragState);
    els.dropzone.addEventListener("dragleave", hideDragState);
    els.dropzone.addEventListener("drop", handleDrop);
    els.shapeOverride.addEventListener("change", applyOverrides);
    els.hairOverride.addEventListener("change", applyOverrides);
    els.brandFilter.addEventListener("change", renderProducts);
    els.styleFilter.addEventListener("change", renderProducts);
  }

  function populateBrandFilter() {
    const brands = Array.from(new Set(PRODUCTS.map((product) => product.brand))).sort();
    brands.forEach((brand) => {
      const option = document.createElement("option");
      option.value = brand;
      option.textContent = brand;
      els.brandFilter.append(option);
    });
  }

  async function startCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setStatus("Tu navegador no permite usar la camara desde esta pagina.");
      return;
    }

    try {
      stopCamera();
      state.cameraStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });
      els.video.srcObject = state.cameraStream;
      els.capturePhoto.disabled = false;
      els.stage.classList.add("is-video");
      els.stage.classList.remove("has-photo", "drag-over");
      setStatus("Camara lista. Centra tu rostro y presiona Tomar foto.");
    } catch (error) {
      setStatus("No se pudo iniciar la camara. Puedes subir una foto desde tu dispositivo.");
    }
  }

  function stopCamera() {
    if (!state.cameraStream) {
      return;
    }

    state.cameraStream.getTracks().forEach((track) => track.stop());
    state.cameraStream = null;
  }

  function capturePhoto() {
    const width = els.video.videoWidth;
    const height = els.video.videoHeight;

    if (!width || !height) {
      setStatus("La camara aun esta cargando. Intentalo de nuevo en unos segundos.");
      return;
    }

    drawToCanvas(els.video, width, height);
    stopCamera();
    els.capturePhoto.disabled = true;
    analyzeCanvas();
  }

  function handleUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }

    loadImageFile(file);
    event.target.value = "";
  }

  function handleDropzoneClick() {
    if (!els.stage.classList.contains("is-video")) {
      els.uploadPhoto.click();
    }
  }

  function handleDropzoneKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleDropzoneClick();
    }
  }

  function showDragState(event) {
    event.preventDefault();
    els.stage.classList.add("drag-over");
  }

  function hideDragState(event) {
    event.preventDefault();
    els.stage.classList.remove("drag-over");
  }

  function handleDrop(event) {
    event.preventDefault();
    els.stage.classList.remove("drag-over");

    const file = Array.from(event.dataTransfer.files || []).find((item) => item.type.startsWith("image/"));
    if (!file) {
      setStatus("Arrastra un archivo de imagen para analizarlo.");
      return;
    }

    loadImageFile(file);
  }

  function loadImageFile(file) {
    if (!file.type.startsWith("image/")) {
      setStatus("Selecciona una imagen valida para continuar.");
      return;
    }

    setStatus("Cargando foto...");
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        stopCamera();
        els.capturePhoto.disabled = true;
        drawToCanvas(image, image.naturalWidth, image.naturalHeight);
        analyzeCanvas();
      };
      image.onerror = () => setStatus("No se pudo leer la imagen. Prueba con otro archivo.");
      image.src = reader.result;
    };
    reader.onerror = () => setStatus("No se pudo cargar la foto seleccionada.");
    reader.readAsDataURL(file);
  }

  function resetPhoto() {
    stopCamera();
    state.analysis = null;
    state.selectedShape = "oval";
    state.selectedHair = "open";
    els.capturePhoto.disabled = true;
    els.video.srcObject = null;
    els.canvas.width = 0;
    els.canvas.height = 0;
    els.stage.classList.remove("is-video", "has-photo", "drag-over");
    els.shapeOverride.value = "auto";
    els.hairOverride.value = "auto";
    els.detectedShape.textContent = "Pendiente";
    els.detectedHair.textContent = "Pendiente";
    els.confidence.textContent = "--";
    els.confidenceBar.style.width = "0%";
    setStatus("Esperando una foto para analizar.");
    updateRecommendationView();
    renderProducts();
  }

  function drawToCanvas(source, sourceWidth, sourceHeight) {
    const maxSide = 1280;
    const scale = Math.min(1, maxSide / Math.max(sourceWidth, sourceHeight));
    const width = Math.round(sourceWidth * scale);
    const height = Math.round(sourceHeight * scale);
    const context = els.canvas.getContext("2d", { willReadFrequently: true });

    els.canvas.width = width;
    els.canvas.height = height;
    context.drawImage(source, 0, 0, width, height);
    els.stage.classList.remove("is-video", "drag-over");
    els.stage.classList.add("has-photo");
  }

  function analyzeCanvas() {
    const context = els.canvas.getContext("2d", { willReadFrequently: true });
    const sample = getSampledImageData(context, els.canvas.width, els.canvas.height);
    const analysis = analyzeFace(sample.imageData, sample.width, sample.height);

    state.analysis = analysis;
    state.selectedShape = analysis.shape;
    state.selectedHair = analysis.hair;
    els.shapeOverride.value = "auto";
    els.hairOverride.value = "auto";

    updateDetectedMetrics(analysis);
    updateRecommendationView();
    renderProducts();
    setStatus("Foto analizada. Puedes ajustar el resultado si lo necesitas.");
  }

  function getSampledImageData(context, width, height) {
    const maxWidth = 360;
    const scale = Math.min(1, maxWidth / width);
    const sampleWidth = Math.max(1, Math.round(width * scale));
    const sampleHeight = Math.max(1, Math.round(height * scale));
    const sampleCanvas = document.createElement("canvas");
    const sampleContext = sampleCanvas.getContext("2d", { willReadFrequently: true });

    sampleCanvas.width = sampleWidth;
    sampleCanvas.height = sampleHeight;
    sampleContext.drawImage(context.canvas, 0, 0, sampleWidth, sampleHeight);

    return {
      imageData: sampleContext.getImageData(0, 0, sampleWidth, sampleHeight),
      width: sampleWidth,
      height: sampleHeight
    };
  }

  function analyzeFace(imageData, width, height) {
    const mask = buildSkinMask(imageData.data, width, height);
    const bounds = findFaceBounds(mask, width, height);
    const measurements = measureFace(mask, width, height, bounds);
    const shapeResult = classifyShape(measurements);
    const hairResult = classifyHair(imageData.data, width, height, bounds);
    const confidence = estimateConfidence(bounds, width, height, measurements, shapeResult.margin);

    return {
      shape: shapeResult.shape,
      hair: hairResult,
      confidence,
      measurements
    };
  }

  function buildSkinMask(data, width, height) {
    const mask = new Uint8Array(width * height);

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const index = (y * width + x) * 4;
        const centralX = x > width * 0.08 && x < width * 0.92;
        const centralY = y > height * 0.08 && y < height * 0.96;

        if (centralX && centralY && isLikelySkin(data[index], data[index + 1], data[index + 2])) {
          mask[y * width + x] = 1;
        }
      }
    }

    return mask;
  }

  function isLikelySkin(red, green, blue) {
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const y = 0.299 * red + 0.587 * green + 0.114 * blue;
    const cb = 128 - 0.168736 * red - 0.331264 * green + 0.5 * blue;
    const cr = 128 + 0.5 * red - 0.418688 * green - 0.081312 * blue;
    const ycbcrSkin = y > 45 && cb >= 75 && cb <= 142 && cr >= 128 && cr <= 188;
    const rgbSkin = red > 55 && green > 35 && blue > 18 && max - min > 12 && red > blue && red >= green * 0.75;

    return ycbcrSkin || rgbSkin;
  }

  function findFaceBounds(mask, width, height) {
    const rows = [];
    let total = 0;

    for (let y = 0; y < height; y += 1) {
      let minX = width;
      let maxX = -1;
      let count = 0;

      for (let x = 0; x < width; x += 1) {
        if (mask[y * width + x]) {
          count += 1;
          minX = Math.min(minX, x);
          maxX = Math.max(maxX, x);
        }
      }

      if (count > width * 0.035) {
        rows.push({ y, minX, maxX, count });
        total += count;
      }
    }

    if (rows.length < height * 0.12 || total < width * height * 0.015) {
      return fallbackBounds(width, height);
    }

    const firstRows = rows.slice(0, Math.max(4, Math.round(rows.length * 0.08)));
    const lastRows = rows.slice(-Math.max(4, Math.round(rows.length * 0.08)));
    const minY = firstRows[0].y;
    const maxY = lastRows[lastRows.length - 1].y;
    const horizontalRows = rows.filter((row) => row.y >= minY + (maxY - minY) * 0.12);
    const minX = Math.max(0, percentile(horizontalRows.map((row) => row.minX), 12));
    const maxX = Math.min(width - 1, percentile(horizontalRows.map((row) => row.maxX), 88));

    if (maxX <= minX || maxY <= minY) {
      return fallbackBounds(width, height);
    }

    return { minX, maxX, minY, maxY, fallback: false };
  }

  function fallbackBounds(width, height) {
    return {
      minX: Math.round(width * 0.28),
      maxX: Math.round(width * 0.72),
      minY: Math.round(height * 0.18),
      maxY: Math.round(height * 0.82),
      fallback: true
    };
  }

  function measureFace(mask, width, height, bounds) {
    const faceHeight = bounds.maxY - bounds.minY;
    const faceWidth = bounds.maxX - bounds.minX;
    const foreheadWidth = widthAt(mask, width, bounds, 0.22);
    const cheekWidth = widthAt(mask, width, bounds, 0.48);
    const jawWidth = widthAt(mask, width, bounds, 0.78);
    const chinWidth = widthAt(mask, width, bounds, 0.92);

    return {
      faceHeight,
      faceWidth,
      foreheadWidth,
      cheekWidth,
      jawWidth,
      chinWidth,
      lengthRatio: safeRatio(faceHeight, Math.max(cheekWidth, faceWidth)),
      jawRatio: safeRatio(jawWidth, cheekWidth),
      foreheadRatio: safeRatio(foreheadWidth, cheekWidth),
      chinRatio: safeRatio(chinWidth, cheekWidth),
      fallback: bounds.fallback
    };
  }

  function widthAt(mask, width, bounds, relativeY) {
    const targetY = Math.round(bounds.minY + (bounds.maxY - bounds.minY) * relativeY);
    const radius = 3;
    const widths = [];

    for (let y = Math.max(0, targetY - radius); y <= Math.min(Math.floor(mask.length / width) - 1, targetY + radius); y += 1) {
      let minX = width;
      let maxX = -1;
      let count = 0;

      for (let x = bounds.minX; x <= bounds.maxX; x += 1) {
        if (mask[y * width + x]) {
          count += 1;
          minX = Math.min(minX, x);
          maxX = Math.max(maxX, x);
        }
      }

      if (count > (bounds.maxX - bounds.minX) * 0.05) {
        widths.push(maxX - minX);
      }
    }

    if (!widths.length) {
      return bounds.maxX - bounds.minX;
    }

    widths.sort((a, b) => a - b);
    return widths[Math.floor(widths.length / 2)];
  }

  function classifyShape(measurements) {
    const scores = {
      oval: 0,
      round: 0,
      square: 0,
      heart: 0,
      diamond: 0,
      rectangle: 0
    };

    const lengthRatio = measurements.lengthRatio;
    const jawRatio = measurements.jawRatio;
    const foreheadRatio = measurements.foreheadRatio;
    const chinRatio = measurements.chinRatio;

    scores.rectangle += scoreRange(lengthRatio, 1.48, 2.15) * 3;
    scores.oval += scoreRange(lengthRatio, 1.22, 1.62) * 2;
    scores.round += scoreRange(lengthRatio, 0.82, 1.22) * 2.4;
    scores.square += scoreRange(lengthRatio, 0.95, 1.34) * 1.8;

    scores.square += scoreClose(jawRatio, 0.96) * 2.4;
    scores.round += scoreClose(jawRatio, 0.9) * 1.3;
    scores.oval += scoreRange(jawRatio, 0.68, 0.92) * 1.7;
    scores.heart += scoreRange(jawRatio, 0.35, 0.72) * 2;
    scores.diamond += scoreRange(jawRatio, 0.45, 0.78) * 1.4;

    scores.heart += scoreRange(foreheadRatio, 0.95, 1.35) * 2;
    scores.diamond += scoreRange(foreheadRatio, 0.55, 0.88) * 2.2;
    scores.oval += scoreRange(foreheadRatio, 0.76, 1.02) * 1.4;
    scores.round += scoreRange(foreheadRatio, 0.84, 1.12) * 1.1;

    scores.heart += scoreRange(chinRatio, 0.18, 0.55) * 1.7;
    scores.diamond += scoreRange(chinRatio, 0.22, 0.62) * 1.4;
    scores.square += scoreRange(chinRatio, 0.54, 1.0) * 1.1;

    if (measurements.fallback) {
      scores.oval += 1;
    }

    const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return {
      shape: ranked[0][0],
      margin: ranked[0][1] - ranked[1][1]
    };
  }

  function classifyHair(data, width, height, bounds) {
    const topArea = sampleDarkDensity(data, width, {
      minX: bounds.minX,
      maxX: bounds.maxX,
      minY: Math.max(0, bounds.minY - Math.round((bounds.maxY - bounds.minY) * 0.28)),
      maxY: Math.min(height - 1, bounds.minY + Math.round((bounds.maxY - bounds.minY) * 0.15))
    });
    const upperFaceArea = sampleDarkDensity(data, width, {
      minX: bounds.minX,
      maxX: bounds.maxX,
      minY: bounds.minY,
      maxY: bounds.minY + Math.round((bounds.maxY - bounds.minY) * 0.25)
    });
    const sideMargin = Math.round((bounds.maxX - bounds.minX) * 0.22);
    const sideArea = sampleDarkDensity(data, width, {
      minX: Math.max(0, bounds.minX - sideMargin),
      maxX: Math.min(width - 1, bounds.maxX + sideMargin),
      minY: bounds.minY + Math.round((bounds.maxY - bounds.minY) * 0.18),
      maxY: bounds.minY + Math.round((bounds.maxY - bounds.minY) * 0.68),
      exclude: bounds
    });

    if (upperFaceArea > 0.2) {
      return "fringe";
    }

    if (topArea > 0.22 && sideArea < 0.17) {
      return "volume";
    }

    if (sideArea > 0.21) {
      return "sideVolume";
    }

    return "open";
  }

  function sampleDarkDensity(data, width, area) {
    const minX = clamp(Math.round(area.minX), 0, width - 1);
    const maxX = clamp(Math.round(area.maxX), 0, width - 1);
    const minY = Math.max(0, Math.round(area.minY));
    const maxY = Math.max(minY, Math.round(area.maxY));
    let dark = 0;
    let total = 0;

    for (let y = minY; y <= maxY; y += 1) {
      for (let x = minX; x <= maxX; x += 1) {
        if (area.exclude && x >= area.exclude.minX && x <= area.exclude.maxX) {
          continue;
        }
        const index = (y * width + x) * 4;
        const red = data[index];
        const green = data[index + 1];
        const blue = data[index + 2];
        const brightness = (red + green + blue) / 3;
        const contrast = Math.max(red, green, blue) - Math.min(red, green, blue);

        if (brightness < 82 || (brightness < 118 && contrast > 26 && red < 150)) {
          dark += 1;
        }
        total += 1;
      }
    }

    return total ? dark / total : 0;
  }

  function estimateConfidence(bounds, width, height, measurements, margin) {
    if (measurements.fallback) {
      return 42;
    }

    const areaRatio = ((bounds.maxX - bounds.minX) * (bounds.maxY - bounds.minY)) / (width * height);
    const areaScore = scoreRange(areaRatio, 0.12, 0.48);
    const ratioScore = scoreRange(measurements.lengthRatio, 0.8, 2.25);
    const marginScore = clamp(margin / 2.2, 0, 1);

    return Math.round(48 + (areaScore * 20 + ratioScore * 14 + marginScore * 18));
  }

  function scoreRange(value, min, max) {
    if (value < min || value > max) {
      const distance = value < min ? min - value : value - max;
      return Math.max(0, 1 - distance / (max - min || 1));
    }

    return 1;
  }

  function scoreClose(value, target) {
    return Math.max(0, 1 - Math.abs(value - target) / Math.max(target, 0.01));
  }

  function safeRatio(a, b) {
    return b ? a / b : 0;
  }

  function percentile(values, percent) {
    if (!values.length) {
      return 0;
    }

    const sorted = values.slice().sort((a, b) => a - b);
    const index = Math.round(((sorted.length - 1) * percent) / 100);
    return sorted[index];
  }

  function applyOverrides() {
    state.selectedShape = els.shapeOverride.value === "auto"
      ? (state.analysis && state.analysis.shape) || "oval"
      : els.shapeOverride.value;
    state.selectedHair = els.hairOverride.value === "auto"
      ? (state.analysis && state.analysis.hair) || "open"
      : els.hairOverride.value;

    updateRecommendationView();
    renderProducts();
  }

  function updateDetectedMetrics(analysis) {
    els.detectedShape.textContent = FACE_SHAPES[analysis.shape].label;
    els.detectedHair.textContent = HAIR_PROFILES[analysis.hair].label;
    els.confidence.textContent = `${analysis.confidence}%`;
    els.confidenceBar.style.width = `${analysis.confidence}%`;
  }

  function updateRecommendationView() {
    const shape = FACE_SHAPES[state.selectedShape];
    const hair = HAIR_PROFILES[state.selectedHair];

    els.recommendationSummary.innerHTML = `
      <h4>${shape.label} + ${hair.label}</h4>
      <p>${shape.summary} ${hair.advice}</p>
    `;
    renderList(els.fitTips, shape.lookFor.concat([hair.advice]));
    renderList(els.avoidTips, shape.avoid);
  }

  function renderList(element, items) {
    element.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      element.append(li);
    });
  }

  function renderProducts() {
    const brand = els.brandFilter.value;
    const style = els.styleFilter.value;
    const products = PRODUCTS
      .map((product) => ({ ...product, score: productScore(product) }))
      .filter((product) => brand === "all" || product.brand === brand)
      .filter((product) => style === "all" || product.style === style)
      .sort((a, b) => b.score - a.score || a.brand.localeCompare(b.brand));

    els.productGrid.innerHTML = "";

    els.resultCount.textContent = products.length;

    if (!products.length) {
      els.productGrid.innerHTML = '<p class="empty-state">No hay modelos con esos filtros. Prueba con otra marca o estilo.</p>';
      return;
    }

    products.forEach((product, index) => {
      const article = document.createElement("article");
      article.className = `product-card ${index === 0 ? "best-match" : ""}`;
      article.innerHTML = `
        <div class="product-visual">
          <div class="glasses-icon shape-${product.style}" aria-hidden="true">
            <span class="temple left"></span>
            <span class="lens left"></span>
            <span class="bridge"></span>
            <span class="lens right"></span>
            <span class="temple right"></span>
          </div>
        </div>
        <div class="product-body">
          <div class="product-meta">
            <span>${product.brand}</span>
            <span class="score">${product.score}% match</span>
          </div>
          <h3>${product.model}</h3>
          <p>${product.description}</p>
          <div class="match-track" aria-hidden="true"><span style="width: ${product.score}%"></span></div>
          <p class="match-reason">${productReason(product)}</p>
          <div class="tags">
            <span class="tag">${styleLabel(product.style)}</span>
            <span class="tag">${product.color}</span>
            <span class="tag">${product.price}</span>
          </div>
        </div>
      `;
      els.productGrid.append(article);
    });
  }

  function productScore(product) {
    let score = 58;

    if (product.compatibleShapes.includes(state.selectedShape)) {
      score += 26;
    }

    if (HAIR_PROFILES[state.selectedHair].boostStyles.includes(product.style)) {
      score += 10;
    }

    if (state.analysis) {
      score += Math.round((state.analysis.confidence - 50) / 8);
    }

    return clamp(score, 45, 98);
  }

  function productReason(product) {
    const reasons = [];
    const shape = FACE_SHAPES[state.selectedShape].label.toLowerCase();
    const hair = HAIR_PROFILES[state.selectedHair].label.toLowerCase();

    if (product.compatibleShapes.includes(state.selectedShape)) {
      reasons.push(`favorece rostro ${shape}`);
    }

    if (HAIR_PROFILES[state.selectedHair].boostStyles.includes(product.style)) {
      reasons.push(`equilibra ${hair}`);
    }

    if (!reasons.length) {
      reasons.push("aporta una alternativa de estilo para comparar");
    }

    return `Recomendado porque ${reasons.join(" y ")}.`;
  }

  function styleLabel(style) {
    const labels = {
      aviator: "Aviador",
      "cat-eye": "Cat eye",
      geometric: "Geometrico",
      rectangle: "Rectangular",
      round: "Redondo",
      wayfarer: "Wayfarer"
    };

    return labels[style] || style;
  }

  function setStatus(message) {
    els.statusMessage.textContent = message;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  init();
})();
