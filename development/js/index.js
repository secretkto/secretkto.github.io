$(document).ready(function () {
  //region vars
  let tab = $('.tab');
  let tabClose = $('.tab .icon--close');
  let material = $('.list--materials .list-item');
  let headingMainDesktop = $('.heading--primary');
  let headingMainMobile = $('.heading--primary-mobile');
  let backRightPanel = $('.heading.is-route');
  let backLeftPanel = $('.panel-heading');
  let furniture = $('.list--furniture .list-item');
  let furnitureInside = $('.panel-inside');
  let leftPanel = $('.panel--left');
  let leftPanelContent = $('.panel--left .panel-content');
  let rightPanelContent = $('.panel--right .panel-content');
  let rightPanel = $('.panel--right');
  let menuButton = $('.icon--menu');
  let buttonMenuOpen = $('.button--open-menu');
  let buttonMenuClose = $('.button--close-menu');
  let menu = $('.menu');
  let price = $('.price-number');
  let buttonAdmin = $('.button--admin');
  let buttonAdminClose = $('.admin .icon--close');
  let admin = $('.admin');
  let materialsButton = $('.materials');
  let materialsClose = $('.heading--secondary .icon--close');
  let windowWidth = $(window).outerWidth();
  let builder = $('.builder');
  //endregion

  //region ruler
  let controlsSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--s-controls').slice(0, -2));
  let controlsSizeMin = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--s-controls-min').slice(0, -2));
  builder.ruler({
    vRuleSize: controlsSizeMin,
    hRuleSize: controlsSize,
    showCrosshair: false,
  });
  //endregion

  //region svg
  inlineSVG.init({
    svgSelector: '.svg--inline',
  }, function () {
    setSvg();
    setAreas();
    console.log('All SVGs inlined');
  });
  //endregion

  //region resize
  let resizeAction = function () {
    if (windowWidth <= 991) {
      headingMainDesktop.removeClass('is-active');
      headingMainMobile.addClass('is-active');
      leftPanel.removeClass('is-active');
      leftPanelContent.removeClass('is-active');
      tab.removeClass('is-active');
      admin.removeClass('is-active');
      menu.removeClass('is-active');
      menuButton.removeClass('is-active');
      rightPanel.removeClass('is-active');
    }
    // let isActive = false;
    // leftPanelContent.each(function () {
    //   if ($(this).is('.is-active')) {
    //     isActive = true;
    //   }
    // });
    if (windowWidth > 991) {
      headingMainMobile.removeClass('is-active');
      headingMainDesktop.addClass('is-active');
      leftPanel.addClass('is-active');
      leftPanelContent.eq(0).addClass('is-active');
      tab.eq(0).addClass('is-active');
    }
  };
  resizeAction();
  $(window).resize(function () {
    if ($(window).outerWidth() === windowWidth) return;
    windowWidth = $(window).outerWidth();
    if ($(document.activeElement).prop('type') !== 'text') {
      resizeAction();
    }
  });
  //endregion

  //region menu
  buttonAdmin.click(function () {
    admin.toggleClass('is-active');
  });
  buttonAdminClose.click(function () {
    admin.removeClass('is-active');
  });
  buttonMenuOpen.click(function () {
    leftPanel.addClass('is-active');
    headingMainDesktop.addClass('is-active');
    headingMainMobile.removeClass('is-active');
    $(this).parent().toggleClass('is-active');
    menu.toggleClass('is-active');
  });
  buttonMenuClose.click(function () {
    let isActive = false;
    leftPanelContent.each(function () {
      if ($(this).is('.is-active')) {
        isActive = true;
      }
    });
    if (!isActive) {
      leftPanel.removeClass('is-active');
      headingMainDesktop.removeClass('is-active');
      headingMainMobile.addClass('is-active');
    }
    $(this).parent().toggleClass('is-active');
    menu.toggleClass('is-active');
    admin.removeClass('is-active');
    rightPanel.removeClass('is-active');
  });
  //endregion

  //region Left panel
  tab.click(function () {
    tab.removeClass('is-active');
    leftPanel.addClass('is-active');
    headingMainDesktop.addClass('is-active');
    headingMainMobile.removeClass('is-active');
    $(this).addClass('is-active');
    let index = parseInt($(this).attr('data-index'));
    leftPanelContent.removeClass('is-active');
    leftPanelContent.eq(index - 1).addClass('is-active');
    menuButton.removeClass('is-active');
    menu.removeClass('is-active');
  });
  tabClose.click(function (event) {
    tab.removeClass('is-active');
    leftPanel.removeClass('is-active');
    leftPanelContent.removeClass('is-active');
    headingMainDesktop.removeClass('is-active');
    headingMainMobile.addClass('is-active');
    event.stopPropagation();
  });
  furniture.click(function () {
    let index = $(this).index();
    furnitureInside.eq(index).addClass('is-active');
  });
  backLeftPanel.click(function () {
    furnitureInside.removeClass('is-active')
  });
  //endregion

  //region Right panel
  material.click(function () {
    let index = $(this).index();
    rightPanelContent.removeClass('is-active');
    rightPanelContent.eq(index + 1).addClass('is-active');
  });
  backRightPanel.click(function () {
    rightPanelContent.removeClass('is-active');
    rightPanelContent.eq(0).addClass('is-active');
  });
  let a1 = $('.list--textures');
  for (let i = 1; i < 11; i++) {
    a1.append(`<li class="list-item"><img src="/img/t-${i}.png" alt="Изображение текстуры"/></li>`)
  }
  let texture = $('.list--textures .list-item');
  texture.click(function () {
    texture.removeClass('is-active');
    $(this).addClass('is-active');
  });
  materialsButton.click(function () {
    rightPanel.toggleClass('is-active')
  });
  materialsClose.click(function () {
    rightPanel.removeClass('is-active')
  });
  //endregion

  //region print
  let buttonMenuPrint = $('.print');
  buttonMenuPrint.click(function () {
    window.print();
  });
  //endregion

  //region count
  let buttonMenuCount = $('.count');

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  buttonMenuCount.click(function () {
    let str = randomIntFromInterval(1000, 10000).toString();
    let counted = [str.slice(0, 1), str.slice(1)].join(' ');
    price.each(function () {
      $(this).html(counted);
    });
  });
  //endregion

  //region data
  //region vars
  let data = $('.data');
  let buttonMenuData = $('.watch-data');
  let buttonCloseData = $('.data .icon--close');
  let dataConstructionTypeInputs = $('.data--construction-type input');
  let dataConstructionTypeValue = $('.data-value--door-type');

  let dataOpeningSizeWInput = $('.data--opening-w input');
  let dataOpeningSizeWValue = $('.data-value--opening-w');
  let dataOpeningSizeHInput = $('.data--opening-h input');
  let dataOpeningSizeHValue = $('.data-value--opening-h');

  let dataRailSizeUInput = $('.data--rail-u input');
  let dataRailSizeUValue = $('.data-value--rail-u');
  let dataRailSizeBInput = $('.data--rail-b input');
  let dataRailSizeBValue = $('.data-value--rail-b');
  let dataRailSizeTSelect = $('.data--rail-t select');
  let dataRailSizeTValue = $('.data-value--rail-t');

  let dataSashAmountSelect = $('.data--sash-amount select');
  let dataSashAmountValue = $('.data-value--sash-amount');
  let dataSashTypeInputs = $('.data--sash-type input');
  let dataSashTypeValue = $('.data-value--sash-type');
  let dataDividerTypeInputs = $('.data--divider-type input');
  let dataDividerTypeValue = $('.data-value--divider-type');
  let dataLintelTypeInputs = $('.data--lintel-type input');
  let dataLintelTypeValue = $('.data-value--lintel-type');

  let dataProfileTypeInputs = $('.data--profile-type input');
  let dataProfileTypeValue = $('.data-value--profile-type');
  let dataProfileColorInputs = $('.data--profile-color input');
  let dataProfileColorValue = $('.data-value--profile-color');
  //endregion

  //region construction type
  dataConstructionTypeInputs.each(function () {
    if ($(this).prop("checked")) {
      dataConstructionTypeValue.html($(this).attr("value"));
    }
  });
  dataConstructionTypeInputs.click(function () {
    if ($(this).prop("checked")) {
      dataConstructionTypeValue.html($(this).attr("value"));
    }
  });
  //endregion

  //region opening size
  dataOpeningSizeWValue.html(dataOpeningSizeWInput.attr("placeholder"));
  dataOpeningSizeWInput.change(function () {
    dataOpeningSizeWValue.html(dataOpeningSizeWInput.val());
  });
  dataOpeningSizeHValue.html(dataOpeningSizeHInput.attr("placeholder"));
  dataOpeningSizeHInput.change(function () {
    dataOpeningSizeHValue.html(dataOpeningSizeHInput.val());
  });
  //endregion

  //region rail type and size
  dataRailSizeUValue.html(dataRailSizeUInput.attr("placeholder"));
  dataRailSizeUInput.change(function () {
    dataRailSizeUValue.html(dataRailSizeUInput.val());
  });
  dataRailSizeBValue.html(dataRailSizeBInput.attr("placeholder"));
  dataRailSizeBInput.change(function () {
    dataRailSizeBValue.html(dataRailSizeBInput.val());
  });
  dataRailSizeTValue.html(dataRailSizeTSelect.children("option:selected").val());
  dataRailSizeTSelect.change(function () {
    dataRailSizeTValue.html(dataRailSizeTSelect.children("option:selected").val());
  });
  //endregion

  //region sash amount
  dataSashAmountValue.html(dataSashAmountSelect.children("option:selected").val());
  dataSashAmountSelect.change(function () {
    dataSashAmountValue.html(dataSashAmountSelect.children("option:selected").val());
  });
  //endregion

  //region sash type
  dataSashTypeInputs.each(function () {
    if ($(this).prop("checked")) {
      dataSashTypeValue.html($(this).attr("value"));
    }
  });
  dataSashTypeInputs.click(function () {
    if ($(this).prop("checked")) {
      dataSashTypeValue.html($(this).attr("value"));
    }
  });
  //endregion

  //region divider type
  dataDividerTypeInputs.each(function () {
    if ($(this).prop("checked")) {
      dataDividerTypeValue.html($(this).attr("value"));
    }
  });
  dataDividerTypeInputs.click(function () {
    if ($(this).prop("checked")) {
      dataDividerTypeValue.html($(this).attr("value"));
    }
  });
  //endregion

  //region lintel type
  dataLintelTypeInputs.each(function () {
    if ($(this).prop("checked")) {
      dataLintelTypeValue.html($(this).attr("value"));
    }
  });
  dataLintelTypeInputs.click(function () {
    if ($(this).prop("checked")) {
      dataLintelTypeValue.html($(this).attr("value"));
    }
  });
  //endregion

  //region profile type
  dataProfileTypeInputs.each(function () {
    if ($(this).prop("checked")) {
      dataProfileTypeValue.html($(this).attr("value"));
    }
  });
  dataProfileTypeInputs.click(function () {
    if ($(this).prop("checked")) {
      dataProfileTypeValue.html($(this).attr("value"));
    }
  });
  //endregion

  //region profile color
  dataProfileColorInputs.each(function () {
    if ($(this).prop("checked")) {
      dataProfileColorValue.html($(this).attr("value"));
    }
  });
  dataProfileColorInputs.click(function () {
    if ($(this).prop("checked")) {
      dataProfileColorValue.html($(this).attr("value"));
    }
  });
  //endregion

  //region icon close
  buttonMenuData.click(function () {
    data.addClass('is-active');
  });
  buttonCloseData.click(function () {
    data.removeClass('is-active');
  });
  //endregion
  //endregion

  //region builder
  let setSvg = function () {
    //region vars
    let lineS = 0.459995;
    let carcassS = 0.851874 - lineS;
    let lineCarcassS = 0.851874;
    let texutres = {};
    let svgW = 26.5729;
    let svgH = 23.1557;
    let svg = $('.svg');
    let lineVerX3 = 18.25024;
    let lineVerX2 = 10.15024;
    let lineVerX1 = 4.95024;
    let lineHorW = svgW - carcassS - carcassS;
    let lineVerH = svgH - carcassS - carcassS;
    let lineHorY1 = 5.36618;
    let lineHorY2 = 17.5151;
    let textureS = (svgW - lineVerX3 - lineCarcassS - lineS) / 2;


    //region segment1
    let segmentW1 = lineVerX1 - lineCarcassS;
    let segmentX1 = lineCarcassS;
    let segmentY11 = lineCarcassS;
    let segmentH11 = svgH - lineCarcassS - lineCarcassS;
    //endregion

    //region segment2
    let segmentW2 = lineVerX2 - lineVerX1 - lineS;
    let segmentX2 = lineVerX1 + lineS;
    let segmentY21 = lineCarcassS;
    let segmentH21 = svgH - lineCarcassS - lineCarcassS;
    //endregion

    //region segment3
    let segmentW3 = lineVerX3 - lineVerX2 - lineS;
    let segmentX3 = lineVerX2 + lineS;
    let segmentY31 = lineCarcassS;
    let segmentH31 = svgH - lineCarcassS - lineCarcassS;
    //endregion

    //region segment4
    let segmentW4 = svgW - lineVerX3 - lineCarcassS - lineS;
    let segmentX4 = lineVerX3 + lineS;
    let segmentY41 = lineS + carcassS;
    let segmentH41 = lineHorY1 - lineCarcassS;
    let segmentY42 = lineHorY1 + lineS;
    let segmentH42 = lineHorY2 - segmentH41 - lineCarcassS - lineS;
    let segmentY43 = lineHorY2 + lineS;
    let segmentH43 = svgH - lineHorY2 - lineS - lineCarcassS;
    //endregion

    let profileRects = [
      {x: carcassS, y: carcassS, w: lineS, h: lineVerH},
      {x: lineVerX1, y: carcassS, w: lineS, h: lineVerH},
      {x: lineVerX2, y: carcassS, w: lineS, h: lineVerH},
      {x: lineVerX3, y: carcassS, w: lineS, h: lineVerH},
      {x: svgW - lineCarcassS, y: carcassS, w: lineS, h: lineVerH},

      {x: carcassS, y: carcassS, w: lineHorW, h: lineS},
      {x: carcassS, y: svgH - lineCarcassS, w: lineHorW, h: lineS},
      {x: segmentX4, y: lineHorY1, w: segmentW4, h: lineS},
      {x: segmentX4, y: lineHorY2, w: segmentW4, h: lineS},
    ];

    let profileGrad = [
      {x1: carcassS - 0.1, y1: svgH / 2, x2: carcassS + lineS, y2: svgH / 2},
      {x1: 4.95024, y1: 11.589, x2: 5.41023, y2: 11.589},
      {x1: 10.05024, y1: 11.589, x2: 10.6, y2: 11.589},
      {x1: 18.05024, y1: 11.589, x2: 18.6, y2: 11.589},
      {x1: 25.75024, y1: 11.589, x2: 26.15024, y2: 11.589},

      {x1: 13.3056, y1: 0.900736, x2: 13.3056, y2: 0.44072},
      {x1: 13.305, y1: 22.7273, x2: 13.305, y2: 22.2673},
      {x1: 22.1675, y1: 5.82617, x2: 22.1675, y2: 5.36615},
      {x1: 22.1706, y1: 17.9751, x2: 22.1706, y2: 17.5151}
    ];
    //endregion

    //region profile gradients
    for (let i = 0; i < 9; i++) {
      d3
        .select(".svg defs #def-profile")
        .append('linearGradient')
        .attr("id", `profile${i}`)
        .attr("gradientUnits", 'userSpaceOnUse')
        .attr("xlink:href", '#brown')
        .attr("x1", profileGrad[i].x1)
        .attr("y1", profileGrad[i].y1)
        .attr("x2", profileGrad[i].x2)
        .attr("y2", profileGrad[i].y2)
    }
    //endregion

    //region profile rects
    for (let i = 0; i < 9; i++) {
      d3
        .select(".svg #profile-rects")
        .append('rect')
        .attr("x", profileRects[i].x)
        .attr("y", profileRects[i].y)
        .attr("width", profileRects[i].w)
        .attr("height", profileRects[i].h)
        .attr("class", `profile${i} profile`)
        .attr("style", `fill: url(#profile${i})`);
    }
    //endregion

    //region profile events
    // let profileRect = $('.profile');
    // profileRect.mouseenter(function (e) {
    //   svg.append(e.target);
    // });
    // profileRect.mouseenter(function (e) {
    //   $('.delete').remove()
    // });
    //endregion

    //region texture rects
    for (let i = 1; i < 7; i++) {
      d3
        .select(".svg #texture-rects")
        .append('rect')
        .attr("class", `
          texture
          texture${i}
          ${i <= 3 ? "is-active" : ""}
        `)
        .attr("style", `fill: url(#texture${i})`)
    }
    //endregion

    //region texture patterns
    for (let i = 1; i < 11; i++) {
      d3
        .select(".svg defs #def-textures")
        .append('pattern')
        .attr("id", `texture${i}`)
        .attr("viewBox", "0 0 1 1")
        .append("image")
        .attr("xlink:href", `img/t-1.png`)
        .attr("preserveAspectRatio", `xMidYMid slice`)
        .attr("width", 1.1)
        .attr("height", 1.1);
      texutres[`pat${i}`] = $(`#texture${i}`);
      texutres[`rect${i}`] = $(`.texture${i}`)
    }
    //endregion

    //region texture pattern and rect attr
    texutres['pat1']
      .attr("width", textureS / segmentW4)
      .attr("height", textureS / segmentH41 - 0.05)
      .attr("patternUnits", "objectBoundingBox")
      .attr("preserveAspectRatio", "xMidYMid slice");
    texutres['rect1']
      .attr("x", segmentX4)
      .attr("y", segmentY41)
      .attr("width", segmentW4)
      .attr("height", segmentH41);
    texutres['pat2']
      .attr("width", textureS / segmentW4)
      .attr("height", textureS / segmentH42 - 0.05)
      .attr("patternUnits", "objectBoundingBox")
      .attr("preserveAspectRatio", "xMidYMid slice");
    texutres['rect2']
      .attr("x", segmentX4)
      .attr("y", segmentY42)
      .attr("width", segmentW4)
      .attr("height", segmentH42);
    texutres['pat3']
      .attr("width", textureS / segmentW4)
      .attr("height", textureS / segmentH43 - 0.05)
      .attr("patternUnits", "objectBoundingBox")
      .attr("preserveAspectRatio", "xMidYMid slice");
    texutres['rect3']
      .attr("x", segmentX4)
      .attr("y", segmentY43)
      .attr("width", segmentW4)
      .attr("height", segmentH43);
    texutres['pat4']
      .attr("width", textureS / segmentW3)
      .attr("height", textureS / segmentH31 - 0.01)
      .attr("patternUnits", "objectBoundingBox")
      .attr("preserveAspectRatio", "xMidYMid slice");
    texutres['rect4']
      .attr("x", segmentX3)
      .attr("y", segmentY31)
      .attr("width", segmentW3)
      .attr("height", segmentH31);
    texutres['pat5']
      .attr("width", textureS / segmentW2)
      .attr("height", textureS / segmentH21 - 0.01)
      .attr("patternUnits", "objectBoundingBox")
      .attr("preserveAspectRatio", "xMidYMid slice");
    texutres['rect5']
      .attr("x", segmentX2)
      .attr("y", segmentY21)
      .attr("width", segmentW2)
      .attr("height", segmentH21);
    texutres['pat6']
      .attr("width", textureS / segmentW1)
      .attr("height", textureS / segmentH11 - 0.01)
      .attr("patternUnits", "objectBoundingBox")
      .attr("preserveAspectRatio", "xMidYMid slice");
    texutres['rect6']
      .attr("x", segmentX1)
      .attr("y", segmentY11)
      .attr("width", segmentW1)
      .attr("height", segmentH11);
    //endregion

    //region texture events
    let drag = d3.drag();
    let texturePanel = $('.panel--right .panel-content:not(:first-child)');
    // let textureRect = $('.profile');
    // texturePanel.each(function () {
    //   let item = $(this).find('.list-item');
    //   item.each(function () {
    //     $(this).click(function () {
    //       console.log($(this));
    //       for (let i = 0; i < textureRect.length; i++) {
    //         d3.select(`.svg #texture${i} image`).attr("href", `img/t-${$(this).index() + 1}.png`)
    //       }
    //     })
    //   })
    // });
    //endregion

    //region texture actions
    let textureSelect = $('.texture');
    textureSelect.each(function () {
      $(this).click(function () {
        $(this).toggleClass('is-active')
      })
    })
    //endregion
  };
  //endregion

  //region drag
  // let clicking = false;
  // let isDragging = false;
  // let lastx = 0;
  // let change = 0;
  // $('.right').mousedown(function () {
  //
  // });
  //
  // $(document).on('mousedown', '.right', function (e) {
  //   clicking = true;
  //   $('.status').text('mousedown');
  // });
  // $(document).on('mouseup', '.right', function () {
  //   clicking = false;
  //   $('.status').text('mouseup');
  //   $('.status').text('click released, no more move event');
  // });
  // $(document).on('mousemove', '.right', function (e) {
  //   if (clicking === false) return;
  //   $('.status').text('mouse moving');
  //   lastx = e.pageX;
  //   change = lastx - e.pageX;
  //   $(this).width(e.pageX);
  //   $('.cords').html('x:' + e.pageX + ' y: ' + e.pageY + ' change:' + change + ' lastx:' + lastx);
  // });
  //endregion

  //region visible areas
  let setAreas = function () {
    let areaInputs = $('.list--areas input');
    let svgProfile = $('#profile-rects');
    let svgDoors = $('#doors');
    let svgTexture = $('#texture-rects');
    let removeAreas = function () {
      svgDoors.removeClass("is-active");
      svgProfile.removeClass("is-active");
      svgTexture.removeClass("is-active")
    };
    let checkAreas = function () {
      areaInputs.each(function () {
        if ($(this).prop("checked")) {
          if ($(this).prop("value") === "areas-doors") {
            svgDoors.addClass("is-active")
          }
          if ($(this).prop("value") === "areas-profile") {
            svgProfile.addClass("is-active")
          }
          if ($(this).prop("value") === "areas-texture") {
            svgProfile.addClass("is-active");
            svgTexture.addClass("is-active")
          }
          dataConstructionTypeValue.html($(this).attr("value"));
        }
      });
    };
    checkAreas();
    areaInputs.each(function () {
      $(this).change(function () {
        removeAreas();
        checkAreas();
      })
    });
  };
  //endregion
});
