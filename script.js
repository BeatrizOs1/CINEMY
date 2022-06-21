const API_KEY = '655c04710b452e7338c9c6f5aa5b830c';

function exibeFilmes () {
    let divTela = document.getElementById('container');
    let texto = '';
    let cabecalho ='';

    let dados = JSON.parse (this.responseText);
    for (i=0; i< dados.results.length; i++) {
        let filme = dados.results[i];

        let data = filme.release_date;
        let separador = '-';
        let array = data.split(separador);
        let pesquisa = filme.title.split(' ').join('');
    
        texto = texto + `
            <section class="row resultado-filme">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" class="col-xs-12 col-sm-12 col-md-12 col-lg-2 resultado">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10 resultado">
                <h2 class="filmes_page">Filme - ${filme.title}</h2>
                <p>${filme.overview}<br>
                <strong>Data de Lançamento: ${array[2]}/${array[1]}/${array[0]}</strong><br>
                <button type="button" class="btn-warning">
                <a class="link" href="https://www.themoviedb.org/movie/${filme.id}">Saiba Mais</a>
                </button>
                </div>
            </section>
            <hr>            
        `;
        
    };

    cabecalho = cabecalho + `
    <section class="botão">
    <div class="boot2 col-lg-2 col-md-12 col-sm-12 col-xs-2">
      <button type="button" class="btn btn-dark">
        <i class="btn btn-success"><a href="index.html"> Home Page</a></i>
      </button>
    </div>
    </section>
    `;

    divTela.innerHTML = cabecalho + texto + cabecalho;
}

function executaPesquisa () {
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest ();
    xhr.onload = exibeFilmes;
    xhr.open ('GET', `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=pt-BR`);
    xhr.send ();
}

document.getElementById ('btnPesquisa').addEventListener ('click', executaPesquisa);

function carrega()  {
    let divDestaque = document.getElementById('images1');
    let texto2 = '';

    let dados2 = JSON.parse (this.responseText);
    for (i=0; i< 4; i++) {
        let filme = dados2.results[i];

        let data2 = filme.release_date;
        let separador2 = '-';
        let array2 = data2.split(separador2);
        let pesquisa2 = filme.title.split(' ').join('');

        texto2 = texto2 + `
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 box-filme">
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
                <h4>${filme.title}</h4>
                <p>${filme.overview}<br>
                <p class="data"><strong>Lançamento: ${array2[2]}/${array2[1]}/${array2[0]}</strong><br></p>
                <button type="button" class="btn-warning" id="btnWarning">
                <a class="link" href="filmes_descricao.html">Saiba Mais</a>
                </button>
                </p>
            </div>            
        `;
    };
    divDestaque.innerHTML = texto2;
}


function carrega2()  {
    let divDestaque = document.getElementById('images2');
    let texto2 = '';
    let cabecalho = '';

    let dados2 = JSON.parse (this.responseText);
    for (i=0; i< 4; i++) {
        let filme = dados2.results[i];

        let data2 = filme.release_date;
        let separador2 = '-';
        let array2 = data2.split(separador2);
        let pesquisa2 = filme.title.split(' ').join('');

        texto2 = texto2 + `
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 page_filme">
                <h4>${filme.title}</h4>
                <img src="https://image.tmdb.org/t/p/w500${filme.poster_path}" alt="">
                <p><strong> Sinopse: </strong> ${filme.overview}<br>
                <p><strong> Idioma: </strong>  ${filme.original_language}</p>
                <p><strong> Visualizações: </strong> ${filme.popularity}</p>
                <p class="data"><strong>Lançamento:</strong> ${array2[2]}/${array2[1]}/${array2[0]}<br></p>
                </p>
                <p class="filme_avaliacao"><strong> Avaliação: </strong> ${filme.vote_average}</p>
            </div>           
        `;
    };
    cabecalho = cabecalho + `
    <section class="botão">
    <div class="boot2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
      <button type="button" class="btn btn-dark">
        <i class="btn btn-success"><a href="index.html"> Home Page</a></i>
      </button>
    </div>
    </section>
    `;

    divDestaque.innerHTML = cabecalho + texto2 + cabecalho;
}

onload = function() {
    let temp = new XMLHttpRequest ();
    temp.onload = carrega;
    temp.open ('GET',`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`);
    temp.send ();
    let temp2 = new XMLHttpRequest ();
    temp2.onload = carrega2;
    temp2.open ('GET',`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR`);
    temp2.send ();
}
var form = document.getElementById("pesquisa");
function temp(event) { event.preventDefault(); } 
form.addEventListener('submit', temp);
