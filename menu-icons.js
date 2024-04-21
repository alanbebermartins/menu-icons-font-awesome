// $(document).ready(function(){
//     // Carregar os ícones do arquivo JSON
//     $.getJSON('./font-awesome-icons.json', function(data) {
//         // Iterar sobre cada objeto do JSON
//         $.each(data, function(index, item) {
//             // Criar o elemento li com o ícone e adicionar à lista
//             var iconClass = item['class-title'];
//             var listItem = $('<li class="options"><i class="' + iconClass + '"></i></li>');
//             $('#list').append(listItem);
//         });
//     });

//     // Show/hide icon list
//     $('.selector').click(function(){
//         $('#list').toggleClass('hide');
//     });

//     // When clicking on any icon in the list
//     $(document).on('click', '.options', function(){
//         // Get the class of the clicked icon
//         var selectedIconClass = $(this).find('i').attr('class');
//         // Replace the main icon HTML with the clicked icon HTML
//         $('#main-icon').html($(this).html());
//         // Hide the list after selection
//         $('#list').addClass('hide');
//     });
// });

// $(document).ready(function(){
//     var selectedIconHTML = []; // Array vazio para armazenar a tag HTML do ícone selecionado

//     // Carregar os ícones do arquivo JSON
//     $.getJSON('./font-awesome-icons.json', function(data) {
//         // Iterar sobre cada objeto do JSON
//         $.each(data, function(index, item) {
//             // Criar o elemento li com o ícone e adicionar à lista
//             var iconClass = item['class-title'];
//             var listItem = $('<li class="options"><i class="' + iconClass + '"></i></li>');
//             $('#list').append(listItem);
//         });
//     });

//     // Show/hide icon list
//     $('.selector').click(function(){
//         $('#list').toggleClass('hide');
//     });

//     // When clicking on any icon in the list
//     $(document).on('click', '.options', function(){
//         // Get the HTML of the clicked icon
//         var clickedIconHTML = $(this).html();
//         console.log("RETORNO INICIAL - " + clickedIconHTML)
//         // Update the selectedIconHTML array with the clicked icon HTML
//         selectedIconHTML = [clickedIconHTML];
//         console.log("RETORNO FINAL - " + selectedIconHTML.length)
//         // Replace the main icon HTML with the clicked icon HTML
//         $('#main-icon').html(clickedIconHTML);
//         // Hide the list after selection
//         $('#list').addClass('hide');
//     });
// });

// $(document).ready(function(){
//     var selectedIconHTML = []; // Array vazio para armazenar a tag HTML do ícone selecionado

//     // Carregar os ícones do arquivo JSON
//     $.getJSON('./font-awesome-icons.json', function(data) {
//         // Iterar sobre cada objeto do JSON
//         $.each(data, function(index, item) {
//             // Criar o elemento li com o ícone e adicionar à lista
//             var iconClass = item['class-title'];
//             var listItem = $('<li class="options"><i class="' + iconClass + '"></i></li>');
//             $('#list').append(listItem);
//         });
//     });

//     // Show/hide icon list
//     $('.selector').click(function(){
//         $('#list').toggleClass('hide');
//     });

//     // When clicking on any icon in the list
//     $(document).on('click', '.options', function(){
//         // Get the HTML of the clicked icon
//         var clickedIconHTML = $(this).html();
//         // Update the selectedIconHTML array with the clicked icon HTML
//         selectedIconHTML = [clickedIconHTML];
//         // Replace the main icon HTML with the clicked icon HTML
//         $('#main-icon').html(clickedIconHTML);
//         // Hide the list after selection
//         $('#list').addClass('hide');
//     });
// });

// $(document).ready(function(){
//     var selectedIconHTML = []; // Array para armazenar a tag HTML do ícone selecionado
//     var iconClasses = []; // Array para armazenar as classes dos ícones selecionados

//     // Função para extrair classes do HTML do ícone
//     function extractClassFromSVG(svgHTML) {
//         var regex = /class="([^"]+)"/; // Expressão regular para extrair atributo de classe
//         var matches = regex.exec(svgHTML);
//         if (matches && matches.length > 1) {
//             return matches[1]; // Retorna o conteúdo dentro do atributo de classe
//         }
//         return null;
//     }

//     // Carregar os ícones do arquivo JSON
//     $.getJSON('./font-awesome-icons.json', function(data) {
//         // Iterar sobre cada objeto do JSON
//         $.each(data, function(index, item) {
//             // Criar o elemento li com o ícone e adicionar à lista
//             var iconClass = item['class-title'];
//             var listItem = $('<li class="options"><i class="' + iconClass + '"></i></li>');
//             $('#list').append(listItem);
//         });
//     });

//     // Show/hide icon list
//     $('.selector').click(function(){
//         $('#list').toggleClass('hide');
//     });

//     // Quando clicar em qualquer ícone na lista
//     $(document).on('click', '.options', function(){
//         // Obtém o HTML do ícone clicado
//         var clickedIconHTML = $(this).html();
//         // Atualiza o array selectedIconHTML com o HTML do ícone clicado
//         selectedIconHTML = [clickedIconHTML];
//         console.log(selectedIconHTML)
//         // Substitui o HTML do ícone principal pelo HTML do ícone clicado
//         $('#main-icon').html(clickedIconHTML);
//         // Extrai a classe do HTML do ícone clicado e armazena no array iconClasses
//         var iconClass = extractClassFromSVG(clickedIconHTML);
//         console.log(iconClass)
//         if (iconClass) {
//             iconClasses.push(iconClass);
//         }
//         // Esconde a lista após a seleção
//         $('#list').addClass('hide');
//     });

// });


$(document).ready(function(){
    var selectedIconHTML = []; // Array para armazenar a tag HTML do ícone selecionado
    var iconClasses = []; // Array para armazenar as classes dos ícones selecionados

    // Função para extrair classes do HTML do ícone
    function extractClassFromSVG(svgHTML) {
        var regex = /class="([^"]+)"/; // Expressão regular para extrair atributo de classe
        var matches = regex.exec(svgHTML);
        if (matches && matches.length > 1) {
            var classes = matches[1].split(' '); // Divide as classes por espaço
            var filteredClasses = classes.filter(function(cls) {
                return !cls.startsWith('svg-inline--fa'); // Remove classes que começam com 'svg-inline--fa'
            });
            return filteredClasses.join(' '); // Retorna as classes filtradas como uma string
        }
        return null;
    }

    // Carregar os ícones do arquivo JSON
    $.getJSON('./font-awesome-icons.json', function(data) {
        // Iterar sobre cada objeto do JSON
        $.each(data, function(index, item) {
            // Criar o elemento li com o ícone e adicionar à lista
            var iconClass = item['class-title'];
            var listItem = $('<li class="options"><i class="' + iconClass + '"></i></li>');
            $('#list').append(listItem);
        });
    });

    // Show/hide icon list
    $('.selector').click(function(){
        $('#list').toggleClass('hide');
    });

    // Quando clicar em qualquer ícone na lista
    $(document).on('click', '.options', function(){
        // Obtém o HTML do ícone clicado
        var clickedIconHTML = $(this).html();
        // Atualiza o array selectedIconHTML com o HTML do ícone clicado
        selectedIconHTML = [clickedIconHTML];
        console.log(selectedIconHTML)
        // Substitui o HTML do ícone principal pelo HTML do ícone clicado
        $('#main-icon').html(clickedIconHTML);
        // Extrai a classe do HTML do ícone clicado e armazena no array iconClasses
        var iconClass = extractClassFromSVG(clickedIconHTML);
        console.log(iconClass)
        if (iconClass) {
            iconClasses.push(iconClass);
        }
        // Esconde a lista após a seleção
        $('#list').addClass('hide');
    });

});
