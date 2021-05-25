var skinRender = new SkinRender({
  controls: {
    enabled: true,
    zoom: false,
    rotate: true,
    pan: false,
  },
  canvas: {
    width: 700,
    height: 600,
  },
});
document.getElementById("mySkinContainer");

skinRender.render("iheartjbh");
