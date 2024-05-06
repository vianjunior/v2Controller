var tabId;

document.addEventListener("DOMContentLoaded", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (abas) => {
    tabId = abas[0].id;
  });

  definePropsBotoes();
});

const definePropsBotoes = () => {
  let btnHabilitar = document.getElementById('btnHabilitar');
  btnHabilitar.addEventListener('click', () => {
    habilitaChaveV2();
    atualizaAbaNavegador();
  });

  let btnDesabilitar = document.getElementById('btnDesabilitar');
  btnDesabilitar.addEventListener('click', () => {
    desabilitaChaveV2();
    atualizaAbaNavegador();
  });
}

const habilitaChaveV2 = () => {
  chrome.scripting.executeScript({
    target: { tabId: tabId},
    function: () => {
      sessionStorage.setItem('v2', 'true');
    },
  });
}

const desabilitaChaveV2 = () => {
  chrome.scripting.executeScript({
    target: { tabId: tabId},
    function: () => {
      sessionStorage.removeItem('v2');
    },
  });
}

const atualizaAbaNavegador = () => {
  chrome.tabs.reload(tabId);
}
