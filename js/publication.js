// Cria um novo objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// Configura a requisição GET
xhr.open("GET", "", true);

// Define o que acontece quando a requisição é concluída
xhr.onload = function () {
  // Verifica se a requisição foi bem-sucedida
    if (xhr.status >= 200 && xhr.status < 300) {
        // Faz algo com os dados recebidos (armazenados em xhr.responseText)
        
        var responseData = JSON.parse(xhr.responseText);

        const container = document.getElementById("container");

        var count = 0

        responseData.forEach(item => {
            const div = document.createElement("div");
            div.classList.add("center");

            const topHeading = document.createElement("h1");
            topHeading.classList.add("text-top");
            topHeading.textContent = item["username"];
    
            const quiteImg = document.createElement("img");
            quiteImg.classList.add("quite");
            quiteImg.setAttribute("src", `${item["imageLink"]}`);
            // Aqui você pode adicionar conteúdo à div "quite" se necessário
    
            const bottomHeading = document.createElement("h1");
            bottomHeading.classList.add("text-bottom");
            bottomHeading.textContent = item["description"];
    
            // Adiciona os elementos ao div principal
            div.appendChild(topHeading);
            div.appendChild(quiteImg);
            div.appendChild(bottomHeading);
    
            // Adiciona o div principal ao container
            container.appendChild(div);
            count = count + 1
        });

        // console.log(responseData[0]["username"]);
    } else {
        // Trata erros
        console.error('Erro ao fazer a requisição: ' + xhr.status);
    }
};

// Define o que acontece em caso de erro na requisição
xhr.onerror = function () {
    console.error('Erro de rede ao fazer a requisição.');
};

// Envia a requisição
xhr.send();
