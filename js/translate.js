
     function translate() {
        const textElements = document.querySelectorAll('*[data-translate]');
    
        const targetLanguage = 'en'; // Define o idioma de destino como inglês
        const apiKey = '806ed04f10c1608fd20d'; // Substitua 'YOUR_API_KEY' pela sua própria chave de API
    
        let promises = [];
    
        textElements.forEach(element => {
          const textToTranslate = element.innerText;
    
          const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=PT|${targetLanguage}&key=${apiKey}`;
    
          promises.push(
            fetch(url)
              .then(response => response.json())
              .then(data => {
                const translatedText = data.responseData.translatedText;
                element.innerText = translatedText;
                element.setAttribute('data-translated', 'true');
                element.setAttribute('data-original-text', textToTranslate);
              })
              .catch(error => {
                console.error('Ocorreu um erro:', error);
              })
          );
        });
    
        Promise.all(promises)
          .then(() => {
            console.log('Tradução concluída.');
          })
          .catch(error => {
            console.error('Ocorreu um erro ao traduzir:', error);
          });
      }
    
      function resetTranslation() {
        const translatedElements = document.querySelectorAll('*[data-translated]');
    
        translatedElements.forEach(element => {
          const originalText = element.dataset.originalText;
          element.innerText = originalText;
          element.removeAttribute('data-translated');
          element.removeAttribute('data-original-text');
        });
    
        promises = []; // Limpa o array de promises
      }


      function imageClick() {
        const translatedElements = document.querySelectorAll('*[data-translated]');
    
        if (translatedElements.length === 0) {
          translate(); // Chama a função de tradução apenas se o texto ainda não tiver sido traduzido
        }
      }
   
    