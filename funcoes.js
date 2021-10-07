cancelar = () => {
    console.log("Cancelando modal..");
    setTimeout(() => {
        window.parent.postMessage(JSON.stringify({"action": "CANCEL"}), "*");
    }, 3000);
}

salvar = () => {
    console.log("Salvando forma de pagamento e então fechando modal..");
    setTimeout(() => {
        window.parent.postMessage(JSON.stringify({"action": "DONE"}), "*");
    }, 3000);
}