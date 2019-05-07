//https://www.color-blindness.com/color-name-hue/
const aqua = "#03edf9";
const persianRose = "#FC28A8";
const salmon = "#f97e72";
const midnightExpress = "#171520";
const parisDaisy = "#fff951";
const valhalla = "#262335";
const veryLightGrey = "#cccccc";

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: valhalla,
    borderColor: valhalla,
    cursorAccentColor: "${aqua}",
    cursorColor: salmon,
    cursorShape: 'BEAM',
    fontFamily: "'Fira Mono', Consolas, 'Courier New', monospace", 
    css: `
      ${config.css}
      .hyper_main {
        border-width: none;
      }

      .header_appTitle{
        color: ${veryLightGrey};
        font-size: 14px;
        color: #f4eee4;
        text-shadow: 0 0 2px #393a33, 0 0 35px #ffffff44, 0 0 8px #f39f0575, 0 0 2px #f39f0575;
      }
      .header_windowHeader {
        border-color: ${midnightExpress} !important;
        background-color: ${midnightExpress} !important;
      }

      .header_windowControls {
        background-color: ${midnightExpress} !important;
      }

      .tab_tab{
        background-color: rgb(38, 35, 53);
        --tab-border-bottom-color: #880088;
        font-family: Segoe WPC,Segoe UI,sans-serif;
        font-size: 13px;
        cursor: pointer;
      }

      .tab_active {
        box-shadow: inset 0 -5px 25px #FC28A825;
      }

      .tab_active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 1px;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, ${persianRose}, ${aqua}) !important;
          opacity: 1;
      }

      .header_shape {
          cursor: pointer;
      }

      .header_hamburgerMenuLeft:hover {
        background: linear-gradient(to bottom, ${parisDaisy} 25%, ${persianRose});
      }

      .terms_termsNotShifted::before {
          content: '';
          position: absolute;
          top: 0px;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(to right, ${persianRose}, ${aqua}) !important;
          opacity: 1;
      }
    `
  });
}