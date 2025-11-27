/*!
 * Biblioteca JavaScript jQuery v3.7.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation e outros colaboradores
 * Lançado sob a licença do MIT
 * https://jquery.org/license
 *
 * Data: 2023-08-28T13:37Z
 */
( função( global, fábrica ) {

	"usar estrito";

	se ( tipo de módulo === "objeto" && tipo de módulo.exports === "objeto" ) {

		// Para ambientes CommonJS e semelhantes a CommonJS onde uma `janela` adequada
		// estiver presente, execute a fábrica e obtenha o jQuery.
		// Para ambientes que não possuem uma `janela` com um `documento`
		// (como Node.js), exponha uma fábrica como module.exports.
		// Isso acentua a necessidade da criação de uma `janela` real.
		// por exemplo var jQuery = require("jquery")(window);
		// Veja o ticket trac-14549 para mais informações.
		módulo.exports = global.document ?
			fábrica( global, verdadeiro ) :
			função( w ) {
				se ( !w.document ) {
					lançar novo erro( "jQuery requer uma janela com um documento" );
				}
				retornar fábrica( w );
			};
	} outro {
		fábrica( global );
	}

// Passe isto se a janela ainda não estiver definida
} )( tipo de janela !== "indefinido" ? janela : isto, função( janela, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lança exceções quando código não estrito (por exemplo, ASP.NET 4.5) acessa o modo estrito
// argumentos.callee.caller (trac-13335). Mas a partir do jQuery 3.0 (2016), o modo estrito deve ser comum
// o suficiente para que todas essas tentativas sejam protegidas em um bloco try.
"usar estrito";

var arr = [];

var getProto = Objeto.getPrototypeOf;

var fatia = arr.slice;

var flat = arr.flat ? função(matriz) {
	retornar arr.flat.call(matriz);
} : função(matriz) {
	retornar arr.concat.apply( [], matriz );
};


var push = arr.push;

var índiceDe = arr.índiceDe;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Objeto );

var suporte = {};

var isFunction = função isFunction( obj ) {

		// Suporte: Chrome <=57, Firefox <=52
		// Em alguns navegadores, typeof retorna "function" para elementos HTML <object>
		// (ou seja, `typeof document.createElement( "object" ) === "function"`).
		// Não queremos classificar *nenhum* nó DOM como uma função.
		// Suporte: QtWeb <=3.8.5, WebKit <=534.34, ferramenta wkhtmltopdf <=0.12.5
		// Além disso, para o WebKit antigo, typeof retorna "função" para coleções HTML
		// (por exemplo, `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		retornar tipo de obj === "função" && tipo de obj.nodeType !== "número" &&
			tipo de obj.item !== "função";
	};


var isWindow = função isWindow( obj ) {
		retornar obj != nulo && obj === obj.window;
	};


var documento = janela.documento;



	var preservadoScriptAttributes = {
		tipo: verdadeiro,
		src: verdadeiro,
		nonce: verdadeiro,
		noModule: verdadeiro
	};

	função DOMEval(código, nó, doc) {
		doc = doc || documento;

		var i, val,
			script = doc.createElement( "script" );

		script.texto = código;
		se ( nó ) {
			para (i em preservationScriptAttributes) {

				// Suporte: Firefox 64+, Edge 18+
				// Alguns navegadores não suportam a propriedade "nonce" em scripts.
				// Por outro lado, apenas usar `getAttribute` não é suficiente, pois
				// o atributo `nonce` é redefinido para uma string vazia sempre que
				// torna-se conectado ao contexto de navegação.
				// Veja https://github.com/whatwg/html/issues/2369
				// Veja https://html.spec.whatwg.org/#nonce-attributes
				// A verificação `node.getAttribute` foi adicionada para fins de
				// `jQuery.globalEval` para que ele possa falsificar um nó contendo nonce
				// por meio de um objeto.
				val = nó[ i ] || nó.getAttribute && nó.getAttribute( i );
				se ( val ) {
					script.setAttribute(i, val);
				}
			}
		}
		doc.head.appendChild(script).parentNode.removeChild(script);
	}


função toType(obj) {
	se ( obj == nulo ) {
		retornar obj + "";
	}

	// Suporte: Android <=2.3 somente (RegExp funcional)
	retornar tipo de obj === "objeto" || tipo de obj === "função" ?
		class2type[ toString.call( obj ) ] || "objeto" :
		tipo de obj;
}
/* Símbolo global */
// Definir este global em .eslintrc.json criaria um perigo de usar o global
// desprotegido em outro lugar, parece mais seguro definir global apenas para este módulo



var version = "3.7.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween",

	rhtmlSuffix = /HTML$/i,

	// Defina uma cópia local do jQuery
	jQuery = função(seletor, contexto) {

		// O objeto jQuery é na verdade apenas o construtor init 'aprimorado'
		// Precisa de init se jQuery for chamado (apenas permite que o erro seja lançado se não for incluído)
		retornar novo jQuery.fn.init( seletor, contexto );
	};

jQuery.fn = jQuery.prototype = {

	// A versão atual do jQuery sendo usada
	jquery: versão,

	construtor: jQuery,

	// O comprimento padrão de um objeto jQuery é 0
	comprimento: 0,

	paraArray: função() {
		retornar fatia.call(isto);
	},

	// Obtenha o enésimo elemento no conjunto de elementos correspondentes OU
	// Obtenha todo o conjunto de elementos correspondentes como uma matriz limpa
	obter: função(num) {

		// Retorna todos os elementos em uma matriz limpa
		se ( num == nulo ) {
			retornar fatia.call(isto);
		}

		// Retorna apenas um elemento do conjunto
		retornar num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Pegue um array de elementos e coloque-o na pilha
	// (retornando o novo conjunto de elementos correspondentes)
	pushStack: função(elementos) {

		// Cria um novo conjunto de elementos correspondentes jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Adicione o objeto antigo à pilha (como referência)
		ret.prevObject = isto;

		// Retorna o conjunto de elementos recém-formado
		retornar ret;
	},

	// Executa um retorno de chamada para cada elemento no conjunto correspondente.
	cada: função(retorno de chamada) {
		retornar jQuery.each(isto, retorno de chamada);
	},

	mapa: função(retorno de chamada) {
		retornar isto.pushStack( jQuery.map( isto, função( elem, i ) {
			retornar retorno de chamada.call(elem, i, elem);
		} ) );
	},

	fatia: função() {
		retornar this.pushStack( slice.apply( this, argumentos ) );
	},

	primeiro: função() {
		retorne isso.eq( 0 );
	},

	último: função() {
		retorne isto.eq( -1 );
	},

	mesmo: função() {
		retornar isto.pushStack( jQuery.grep( isto, função( _elem, i ) {
			retornar ( i + 1 ) % 2;
		} ) );
	},

	ímpar: função() {
		retornar isto.pushStack( jQuery.grep( isto, função( _elem, i ) {
			retornar i % 2;
		} ) );
	},

	eq: função(i) {
		var len = this.comprimento,
			j = +i + ( i < 0 ? len : 0 );
		retornar isto.pushStack( j >= 0 && j < len ? [ isto[ j ] ] : [] );
	},

	fim: função() {
		retornar this.prevObject || this.constructor();
	},

	// Somente para uso interno.
	// Comporta-se como um método do Array, não como um método do jQuery.
	empurrar: empurrar,
	ordenar: arr.sort,
	emenda: arr.splice
};

jQuery.extend = jQuery.fn.extend = função() {
	var opções, nome, src, copiar, copyIsArray, clone,
		alvo = argumentos[ 0 ] || {},
		eu = 1,
		comprimento = argumentos.comprimento,
		profundo = falso;

	// Lidar com uma situação de cópia profunda
	se (tipo de alvo === "booleano") {
		profundo = alvo;

		// Pule o booleano e o alvo
		alvo = argumentos[ i ] || {};
		eu++;
	}

	// Lidar com o caso quando o alvo é uma string ou algo assim (possível em cópia profunda)
	se (tipo de alvo !== "objeto" && !isFunction(alvo)) {
		alvo = {};
	}

	// Estender o próprio jQuery se apenas um argumento for passado
	se ( i === comprimento ) {
		alvo = isto;
		eu--;
	}

	para ( ; i < comprimento; i++ ) {

		// Lidar somente com valores não nulos/indefinidos
		se ( ( opções = argumentos [ i ] ) ! = nulo ) {

			// Estender o objeto base
			para (nome em opções) {
				copiar = opções[ nome ];

				// Prevenir poluição do Object.prototype
				// Evitar loop sem fim
				se (nome === "__proto__" || alvo === cópia) {
					continuar;
				}

				// Recurse se estivermos mesclando objetos simples ou matrizes
				se (profundo && copiar && (jQuery.isPlainObject(copiar) ||
					( copyIsArray = Array.isArray( cópia ) ) ) ) {
					src = alvo[ nome ];

					// Garanta o tipo apropriado para o valor de origem
					se ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} senão se ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} outro {
						clone = origem;
					}
					copyIsArray = falso;

					// Nunca mova objetos originais, clone-os
					target[ nome ] = jQuery.extend( deep, clone, copy );

				// Não traga valores indefinidos
				} senão se ( copiar !== indefinido ) {
					target[ nome ] = copiar;
				}
			}
		}
	}

	// Retorna o objeto modificado
	retornar alvo;
};

jQuery.extend( {

	// Único para cada cópia do jQuery na página
	expando: "jQuery" + ( versão + Math.random() ).replace( /\D/g, "" ),

	// Suponha que o jQuery esteja pronto sem o módulo ready
	isReady: verdadeiro,

	erro: função(msg) {
		lançar novo erro(msg);
	},

	noop: função() {},

	isPlainObject: função( obj ) {
		var proto, Ctor;

		// Detectar negativos óbvios
		// Use toString em vez de jQuery.type para capturar objetos host
		se ( !obj || toString.call( obj ) !== "[objeto Objeto]" ) {
			retornar falso;
		}

		proto = getProto( obj );

		// Objetos sem protótipo (por exemplo, `Object.create( null )`) são simples
		se ( !proto ) {
			retornar verdadeiro;
		}

		// Objetos com protótipo são simples se foram construídos por uma função global Object
		Ctor = hasOwn.call( proto, "construtor" ) && proto.construtor;
		retornar tipo de Ctor === "função" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: função( obj ) {
		nome da variável;

		para (nome em obj) {
			retornar falso;
		}
		retornar verdadeiro;
	},

	// Avalia um script em um contexto fornecido; retorna ao contexto global
	// se não for especificado.
	globalEval: função(código, opções, doc) {
		DOMEval( código, { nonce: opções && opções.nonce }, doc );
	},

	cada: função(obj, retorno de chamada) {
		var comprimento, i = 0;

		se ( éArrayLike ( obj ) ) {
			comprimento = obj.length;
			para ( ; i < comprimento; i++ ) {
				se ( retorno de chamada. chamada (obj [i], i, obj [i]) === falso) {
					quebrar;
				}
			}
		} outro {
			para (i em obj) {
				se ( retorno de chamada. chamada (obj [i], i, obj [i]) === falso) {
					quebrar;
				}
			}
		}

		retornar obj;
	},


	// Recupera o valor do texto de uma matriz de nós DOM
	texto: função(elem) {
		nó var,
			ret = "",
			eu = 0,
			Tipo de nó = elem.Tipo de nó;

		se ( !nodeType ) {

			// Se não houver nodeType, espera-se que seja uma matriz
			enquanto ( ( nó = elem[ i++ ] ) ) {

				// Não atravesse nós de comentários
				ret += jQuery.text( nó );
			}
		}
		se ( tipo de nó === 1 || tipo de nó === 11 ) {
			retornar elem.textContent;
		}
		se ( tipo de nó === 9 ) {
			retornar elem.documentElement.textContent;
		}
		se ( tipo de nó === 3 || tipo de nó === 4 ) {
			retornar elem.nodeValue;
		}

		// Não inclua nós de instruções de comentário ou processamento

		retornar ret;
	},

	// os resultados são apenas para uso interno
	makeArray: função(arr, resultados) {
		var ret = resultados || [];

		se ( arr != nulo ) {
			if (isArrayLike(Object(arr))) {
				jQuery.merge(ret,
					tipo de arr === "string" ?
						[ chegada ] : chegada
				);
			} outro {
				push.call(ret, arr);
			}
		}

		retornar ret;
	},

	inArray: função(elem, arr, i) {
		retornar arr == nulo ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: função(elem) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assuma HTML quando documentElement ainda não existe, como dentro
		// fragmentos de documentos.
		retornar !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
	// push.apply(_, arraylike) é lançado no WebKit antigo
	mesclar: função(primeiro, segundo) {
		var len = +segundo.comprimento,
			j = 0,
			i = primeiro.comprimento;

		para ( ; j < len; j++ ) {
			primeiro[ i++ ] = segundo[ j ];
		}

		primeiro.comprimento = i;

		retornar primeiro;
	},

	grep: função(elementos, retorno de chamada, inverter) {
		var retorno de chamadaInverso,
			correspondências = [],
			eu = 0,
			comprimento = elems.length,
			callbackExpect = !inverter;

		// Percorrer o array, salvando apenas os itens
		// que passa a função validadora
		para ( ; i < comprimento; i++ ) {
			callbackInverse = !callback(elems[ i ], i );
			se ( retorno de chamada Inverso ! == retorno de chamada Expectativa ) {
				correspondências.push(elems[i]);
			}
		}

		partidas de retorno;
	},

	// arg é somente para uso interno
	mapa: função(elems, retorno de chamada, argumento) {
		var comprimento, valor,
			eu = 0,
			ret = [];

		// Percorrer a matriz, traduzindo cada um dos itens para seus novos valores
		se (isArrayLike(elementos)) {
			comprimento = elems.length;
			para ( ; i < comprimento; i++ ) {
				valor = retorno de chamada(elems[i], i, arg);

				se ( valor != nulo ) {
					ret.push( valor );
				}
			}

		// Percorra todas as teclas do objeto,
		} outro {
			para (i em elementos) {
				valor = retorno de chamada(elems[i], i, arg);

				se ( valor != nulo ) {
					ret.push( valor );
				}
			}
		}

		// Achatar quaisquer matrizes aninhadas
		retornar plano( ret );
	},

	// Um ​​contador GUID global para objetos
	guia: 1,

	// jQuery.support não é usado no Core, mas outros projetos anexam seus
	// propriedades para que ele exista.
	suporte: suporte
} );

se ( tipo de símbolo === "função") {
	jQuery.fn[ Símbolo.iterador ] = arr[ Símbolo.iterador ];
}

// Preencha o mapa class2type
jQuery.each( "Boolean Number String Function Array Date RegExp Objeto Símbolo de erro".split( " " ),
	função( _i, nome ) {
		class2type[ "[objeto " + nome + "]" ] = nome.toLowerCase();
	} );

função isArrayLike( obj ) {

	// Suporte: somente iOS 8.2 real (não reproduzível no simulador)
	// verificação `in` usada para evitar erro JIT (gh-2145)
	// hasOwn não é usado aqui devido a falsos negativos
	// sobre o comprimento do Nodelist no IE
	var comprimento = !!obj && "comprimento" em obj && obj.length,
		tipo = toType( obj );

	se ( éFunção( obj ) || éJanela( obj ) ) {
		retornar falso;
	}

	tipo de retorno === "matriz" || comprimento === 0 ||
		tipo de comprimento === "número" && comprimento > 0 && ( comprimento - 1 ) em obj;
}


função nodeName(elem, nome) {

	retornar elem.nodeName && elem.nodeName.toLowerCase() === nome.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var emenda = arr.splice;


var espaço em branco = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = novo RegExp(
	"^" + espaço em branco + "+|((?:^|[^\\\\])(?:\\\\.)*)" + espaço em branco + "+$",
	"g"
);




// Nota: um elemento não contém a si mesmo
jQuery.contains = função( a, b ) {
	var bup = b && b.parentNode;

	retornar um === bup || !!( bup && bup.nodeType === 1 && (

		// Suporte: IE 9 - 11+
		// O IE não tem `contains` em SVG.
		a.contém ?
			a.contém(bup):
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// Serialização de string/identificador CSS
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

função fcssescape(ch, asCodePoint) {
	se ( comoCodePoint ) {

		// U+0000 NULL se torna U+FFFD CARACTERE DE SUBSTITUIÇÃO
		se (ch === "\0" ) {
			retornar "\uFFFD";
		}

		// Caracteres de controle e números (dependendo da posição) são escapados como pontos de código
		retornar ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Outros caracteres ASCII potencialmente especiais são escapados por barra invertida
	retornar "\\" + ch;
}

jQuery.escapeSelector = função(sel) {
	retornar (sel + "" ).replace(rcssescape, fcssescape );
};




var preferredDoc = documento,
	pushNative = empurrar;

( função() {

var eu,
	Expressão,
	contextoexterno,
	classificarEntrada,
	temDuplicado,
	push = pushNativo,

	// Variáveis ​​de documentos locais
	documento,
	documentoElemento,
	documentoIsHTML,
	rbuggyQSA,
	partidas,

	// Dados específicos da instância
	expando = jQuery.expando,
	dirruns = 0,
	feito = 0,
	classCache = createCache(),
	tokenCache = criarCache(),
	compiladorCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = função( a, b ) {
		se ( a === b ) {
			hasDuplicate = verdadeiro;
		}
		retornar 0;
	},

	booleans = "marcado|selecionado|assíncrono|foco automático|reprodução automática|controles|adiar|desabilitado|oculto|ismap|" +
		"loop|múltiplo|aberto|somente leitura|obrigatório|com escopo",

	// Expressões regulares

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identificador = "(?:\\\\[\\da-fA-F]{1,6}" + espaço em branco +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Seletores de atributos: https://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\[" + espaço em branco + "*(" + identificador + ")(?:" + espaço em branco +

		// Operador (captura 2)
		"*([*^$|!~]?=)" + espaço em branco +

		// "Os valores dos atributos devem ser identificadores CSS [captura 5] ou strings [captura 3 ou captura 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identificador + "))|)" +
		espaço em branco + "*\\]",

	pseudos = ":(" + identificador + ")(?:\\((" +

		// Para reduzir o número de seletores que precisam ser tokenizados no preFilter, prefira argumentos:
		// 1. citado (captura 3; captura 4 ou captura 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \")|" +

		// 2. simples (captura 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + atributos + ")*)|" +

		// 3. qualquer outra coisa (captura 2)
		".*" +
		")\\)|)",

	// Espaços em branco iniciais e finais sem escape, capturando alguns caracteres que não sejam espaços em branco antes dos últimos
	rwhitespace = novo RegExp(espaço em branco + "+", "g" ),

	rcomma = new RegExp( "^" + espaço em branco + "*," + espaço em branco + "*" ),
	rleadingCombinator = new RegExp( "^" + espaço em branco + "*([>+~]|" + espaço em branco + ")" +
		espaço em branco + "*"),
	rdescend = novo RegExp(espaço em branco + "|>" ),

	rpseudo = novo RegExp( pseudos ),
	identificador = novo RegExp( "^" + identificador + "$" ),

	correspondênciaExpr = {
		ID: novo RegExp( "^#(" + identificador + ")" ),
		CLASSE: novo RegExp( "^\\.(" + identificador + ")" ),
		TAG: novo RegExp( "^(" + identificador + "|[*])" ),
		ATTR: novo RegExp( "^" + atributos ),
		PSEUDO: novo RegExp( "^" + pseudos ),
		CRIANÇA: novo RegExp(
			"^:(somente|primeiro|último|enésimo|enésimo-último)-(filho|do-tipo)(?:\\(" +
				espaço em branco + "*(par|ímpar|(([+-]|)(\\d*)n|)" + espaço em branco + "*(?:([+-]|)" +
				espaço em branco + "*(\\d+)|))" + espaço em branco + "*\\)|)", "i" ),
		bool: novo RegExp( "^(?:" + booleanos + ")$", "i" ),

		// Para uso em bibliotecas que implementam .is()
		// Usamos isso para correspondência de POS em `select`
		needsContext: novo RegExp( "^" + espaço em branco +
			"*[>+~]|:(par|ímpar|eq|gt|lt|enésimo|primeiro|último)(?:\\(" + espaço em branco +
			"*((?:-\\d)?\\d*)" + espaço em branco + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:entrada|selecionar|área de texto|botão)$/i,
	rheader = /^h\d$/i,

	// Seletores de ID, TAG ou CLASS facilmente analisáveis/recuperáveis
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	irmão = /[+~]/,

	// Escapes CSS
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + espaço em branco +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = função(escape, nãoHex) {
		var alto = "0x" + escape.slice( 1 ) - 0x10000;

		se (não Hex) {

			// Remove o prefixo de barra invertida de uma sequência de escape não hexadecimal
			retornar não Hex;
		}

		// Substitui uma sequência de escape hexadecimal pelo ponto de código Unicode codificado
		// Suporte: IE <=11+
		// Para valores fora do Plano Multilíngue Básico (BMP), construa manualmente um
		// par substituto
		retornar alto < 0 ?
			String.fromCharCode( alto + 0x10000 ) :
			String.fromCharCode( alto >> 10 | 0xD800, alto & 0x3FF | 0xDC00 );
	},

	// Usado para iframes; veja `setDocument`.
	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// Remover o wrapper de função causa uma "Permissão Negada"
	// erro no IE/Edge.
	descarregarHandler = função() {
		definirDocumento();
	},

	inDisabledFieldset = adicionarCombinator(
		função(elemento) {
			retornar elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", próximo: "legenda" }
	);

// Suporte: IE <=9 apenas
// Acessar document.activeElement pode gerar resultados inesperados
// https://bugs.jquery.com/ticket/13393
função safeActiveElement() {
	tentar {
		retornar documento.activeElement;
	} pegar (errar) { }
}

// Otimizar para push.apply( _, NodeList )
tentar {
	empurre.aplicar(
		( arr = fatia.call(preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Suporte: Android <=4.0
	// Detectar push.apply com falha silenciosa
	// eslint-disable-next-line sem-expressões-não-utilizadas
	arr[ preferredDoc.childNodes.length ].nodeType;
} pegar ( e ) {
	empurrar = {
		aplicar: função(alvo, els) {
			pushNative.apply( alvo, fatia.call( els ) );
		},
		chamada: função(alvo) {
			pushNative.apply( alvo, fatia.call( argumentos, 1 ) );
		}
	};
}

função find(seletor, contexto, resultados, semente) {
	var m, i, elem, nid, correspondência, grupos, newSelector,
		newContext = contexto && contexto.ownerDocument,

		// nodeType padrão é 9, já que o contexto padrão é document
		nodeType = contexto ? contexto.nodeType : 9;

	resultados = resultados || [];

	// Retornar antecipadamente de chamadas com seletor ou contexto inválido
	se ( tipo de seletor !== "string" || !seletor ||
		tipo de nó !== 1 && tipo de nó !== 9 && tipo de nó !== 11 ) {

		retornar resultados;
	}

	// Tente atalhos para operações de busca (em vez de filtros) em documentos HTML
	se ( !semente ) {
		setDocument( contexto );
		contexto = contexto || documento;

		se (documentIsHTML) {

			// Se o seletor for suficientemente simples, tente usar um método DOM "get*By*"
			// (exceto o contexto DocumentFragment, onde os métodos não existem)
			se ( nodeType !== 11 && ( match = rquickExpr.exec( seletor ) ) ) {

				// Seletor de ID
				se ( ( m = correspondência [ 1 ] ) ) {

					// Contexto do documento
					se ( tipo de nó === 9 ) {
						se ( ( elem = contexto.getElementById( m ) ) ) {

							// Suporte: somente IE 9
							// getElementById pode corresponder elementos por nome em vez de ID
							se (elem.id === m) {
								push.call( resultados, elem );
								retornar resultados;
							}
						} outro {
							retornar resultados;
						}

					// Contexto do elemento
					} outro {

						// Suporte: somente IE 9
						// getElementById pode corresponder elementos por nome em vez de ID
						if (newContext && (elem = newContext.getElementById(m)) &&
							find.contains( contexto, elem ) &&
							elem.id === m ) {

							push.call( resultados, elem );
							retornar resultados;
						}
					}

				// Seletor de tipo
				} senão se (corresponder[ 2 ] ) {
					push.apply( resultados, contexto.getElementsByTagName( seletor ) );
					retornar resultados;

				// Seletor de classe
				} senão se ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( resultados, contexto.getElementsByClassName( m ) );
					retornar resultados;
				}
			}

			// Aproveite o querySelectorAll
			se ( !nonnativeSelectorCache[ seletor + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( seletor ) ) ) {

				newSelector = seletor;
				novoContexto = contexto;

				// qSA considera elementos fora de uma raiz de escopo ao avaliar filho ou
				// combinadores descendentes, o que não é o que queremos.
				// Nesses casos, contornamos o comportamento prefixando cada seletor no
				// lista com um seletor de ID referenciando o contexto do escopo.
				// A técnica também deve ser usada quando um combinador líder é usado
				// como tais seletores não são reconhecidos por querySelectorAll.
				// Obrigado a Andrew Dupont por esta técnica.
				se ( tipo de nó === 1 &&
					( rdescend.test( seletor ) || rleadingCombinator.test( seletor ) ) ) {

					// Expandir contexto para seletores irmãos
					newContext = rsibling.test( seletor ) && testContext( contexto. parentNode ) ||
						contexto;

					// Podemos usar :scope em vez do hack de ID se o navegador
					// suporta isso e se não estivermos mudando o contexto.
					// Suporte: IE 11+, Edge 17 - 18+
					// O IE/Edge às vezes gera um erro de "Permissão negada" quando
					// comparação estrita de dois documentos; comparações superficiais funcionam.
					// eslint-desabilita-próxima-linha eqeqeq
					se ( novoContexto != contexto || ! suporte. escopo ) {

						// Capture o ID do contexto, definindo-o primeiro se necessário
						se ( ( nid = contexto.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} outro {
							contexto.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefixe cada seletor na lista
					grupos = tokenize( seletor );
					i = grupos.comprimento;
					enquanto (i--) {
						grupos[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( grupos[ i ] );
					}
					newSelector = grupos.join( "," );
				}

				tentar {
					push.apply( resultados,
						newContext.querySelectorAll(newSelector)
					);
					retornar resultados;
				} pegar ( qsaError ) {
					nonnativeSelectorCache( seletor, verdadeiro );
				} finalmente {
					se ( nid === expando ) {
						contexto.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Todos os outros
	retornar selecionar( seletor.replace( rtrimCSS, "$1" ), contexto, resultados, semente );
}

/**
 * Crie caches de chave-valor de tamanho limitado
 * @returns {function(string, object)} Retorna os dados do objeto após armazená-los em si mesmo com
 * nome da propriedade a string (com espaço) e (se o cache for maior que Expr.cacheLength)
 * excluindo a entrada mais antiga
 */
função createCache() {
	var chaves = [];

	função cache(chave, valor) {

		// Use (tecla + " ") para evitar colisão com propriedades de protótipo nativas
		// (veja https://github.com/jquery/sizzle/issues/157)
		se ( chaves.push( chave + " " ) > Expr.cacheLength ) {

			// Mantenha apenas as entradas mais recentes
			excluir cache[ keys.shift() ];
		}
		retornar ( cache[ chave + " " ] = valor );
	}
	retornar cache;
}

/**
 * Marcar uma função para uso especial pelo módulo seletor jQuery
 * @param {Function} fn A função a ser marcada
 */
função markFunction(fn) {
	fn[ expando ] = verdadeiro;
	retornar fn;
}

/**
 * Suporte a testes usando um elemento
 * @param {Function} fn Passou o elemento criado e retorna um resultado booleano
 */
função assert(fn) {
	var el = document.createElement( "fieldset" );

	tentar {
		retornar !!fn( el );
	} pegar ( e ) {
		retornar falso;
	} finalmente {

		// Remover do pai por padrão
		se (el.parentNode) {
			el.parentNode.removeChild(el);
		}

		// liberar memória no IE
		el = nulo;
	}
}

/**
 * Retorna uma função para usar em pseudos para tipos de entrada
 * @param {String} tipo
 */
função createInputPseudo(tipo) {
	retornar função(elem) {
		retornar nodeName(elem, "entrada") && elem.type === tipo;
	};
}

/**
 * Retorna uma função para usar em pseudos para botões
 * @param {String} tipo
 */
função createButtonPseudo(tipo) {
	retornar função(elem) {
		retornar ( nodeName( elem, "entrada" ) || nodeName( elem, "botão" ) ) &&
			elem.tipo === tipo;
	};
}

/**
 * Retorna uma função para usar em pseudos para :enabled/:disabled
 * @param {Boolean} desabilitado verdadeiro para :disabled; falso para :enabled
 */
função createDisabledPseudo(desabilitado) {

	// Conhecido :falsos positivos desabilitados: fieldset[desabilitado] > legenda:nth-of-type(n+2) :can-disable
	retornar função(elem) {

		// Apenas certos elementos podem corresponder a :enabled ou :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		se ( "formulário" em elem ) {

			// Verifique se há deficiência herdada em elementos relevantes não desabilitados:
			// * listou elementos associados ao formulário em um fieldset desabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opção em um optgroup desabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos esses elementos têm uma propriedade "form".
			se (elem.parentNode && elem.disabled === falso) {

				// Os elementos de opção são adiados para um optgroup pai, se presente
				se ( "rótulo" em elem ) {
					se ( "rótulo" em elem.parentNode ) {
						retornar elem.parentNode.disabled === desabilitado;
					} outro {
						retornar elem.disabled === desabilitado;
					}
				}

				// Suporte: IE 6 - 11+
				// Use a propriedade de atalho isDisabled para verificar ancestrais do fieldset desabilitados
				retornar elem.isDisabled === desabilitado ||

					// Onde não há isDisabled, verifique manualmente
					elem.isDisabled !== !desativado &&
						inDisabledFieldset(elem) === desabilitado;
			}

			retornar elem.disabled === desabilitado;

		// Tente filtrar os elementos que não podem ser desabilitados antes de confiar na propriedade disabled.
		// Algumas vítimas ficam presas em nossa rede (rótulo, legenda, menu, faixa), mas não deveria
		// sequer existem neles, muito menos têm um valor booleano.
		} senão se ( "rótulo" em elem ) {
			retornar elem.disabled === desabilitado;
		}

		// Os elementos restantes não são :enabled nem :disabled
		retornar falso;
	};
}

/**
 * Retorna uma função para usar em pseudos para posicionais
 * @param {Função} fn
 */
função createPositionalPseudo(fn) {
	retornar markFunction( função( argumento ) {
		argumento = +argumento;
		retornar markFunction( função( semente, correspondências ) {
			var j,
				matchIndexes = fn( [], semente.length, argumento ),
				i = matchIndexes.length;

			// Corresponde aos elementos encontrados nos índices especificados
			enquanto (i--) {
				se ( semente [ ( j = matchIndexes [ i ] ) ] ) {
					semente[ j ] = !( correspondências[ j ] = semente[ j ] );
				}
			}
		} );
	} );
}

/**
 * Verifica a validade de um nó como um contexto de seletor jQuery
 * @param {Elemento|Objeto=} contexto
 * @returns {Element|Object|Boolean} O nó de entrada se aceitável, caso contrário, um valor falso
 */
função testContext( contexto ) {
	retornar contexto && tipo de contexto.getElementsByTagName !== "indefinido" && contexto;
}

/**
 * Define variáveis ​​relacionadas ao documento uma vez com base no documento atual
 * @param {Element|Object} [node] Um elemento ou objeto de documento a ser usado para definir o documento
 * @returns {Object} Retorna o documento atual
 */
função setDocument( nó ) {
	var subJanela,
		doc = nó ? nó.ownerDocument || nó : preferredDoc;

	// Retornar mais cedo se o documento for inválido ou já estiver selecionado
	// Suporte: IE 11+, Edge 17 - 18+
	// O IE/Edge às vezes gera um erro de "Permissão negada" ao fazer uma comparação estrita
	// dois documentos; comparações superficiais funcionam.
	// eslint-desabilita-próxima-linha eqeqeq
	se ( doc == documento || doc.nodeType !== 9 || !doc.documentElement ) {
		documento de devolução;
	}

	// Atualizar variáveis ​​globais
	documento = doc;
	documentElement = documento.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( documento );

	// Suporte: somente iOS 7, IE 9 - 11+
	// Navegadores mais antigos não suportavam `matches` sem prefixo.
	correspondências = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// Acessar documentos iframe após descarregar gera erros de "permissão negada"
	// (veja trac-13936).
	// Limitar a correção ao IE e Edge Legacy; apesar do Edge 15+ implementar `matches`,
	// todas as versões do IE 9+ e Edge Legacy também implementam `msMatchesSelector`.
	se ( documentElement.msMatchesSelector &&

		// Suporte: IE 11+, Edge 17 - 18+
		// O IE/Edge às vezes gera um erro de "Permissão negada" ao fazer uma comparação estrita
		// dois documentos; comparações superficiais funcionam.
		// eslint-desabilita-próxima-linha eqeqeq
		preferredDoc != documento &&
		( subJanela = document.defaultView ) && subJanela.top !== subJanela ) {

		// Suporte: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "descarregar", unloadHandler );
	}

	// Suporte: IE <10
	// Verifique se getElementById retorna elementos por nome
	// Os métodos getElementById quebrados não pegam nomes definidos programaticamente,
	// então use um teste indireto getElementsByName
	suporte.getById = assert( função( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		retornar !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Suporte: somente IE 9
	// Verifique se é possível fazer matchesSelector
	// em um nó desconectado.
	suporte.disconnectedMatch = assert( função( el ) {
		retornar partidas.call(el, "*" );
	} );

	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// O IE/Edge não suporta a pseudoclasse :scope.
	suporte.escopo = assert( função() {
		retornar documento.querySelectorAll( ":escopo" );
	} );

	// Suporte: somente Chrome 105 - 111, somente Safari 15.4 - 16.3
	// Certifique-se de que o argumento `:has()` seja analisado sem piedade.
	// Incluímos `*` no teste para detectar implementações com bugs que são
	// _seletivamente_ perdoando (especificamente quando a lista inclui pelo menos
	// um seletor válido).
	// Observe que tratamos a completa falta de suporte para `:has()` como se fosse
	// suporte compatível com especificações, o que é bom porque o uso de `:has()` em tal
	// os ambientes falharão no caminho qSA e retornarão ao jQuery traversal
	// de qualquer forma.
	suporte.cssHas = assert( função() {
		tentar {
			documento.querySelector( ":has(*,:jqfake)" );
			retornar falso;
		} pegar ( e ) {
			retornar verdadeiro;
		}
	} );

	// Filtro de ID e localização
	se ( suporte.getById ) {
		Expr.filter.ID = função( id ) {
			var attrId = id.replace( runescape, funescape );
			retornar função(elem) {
				retornar elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = função(id, contexto) {
			se ( tipo de contexto.getElementById !== "indefinido" && documentIsHTML ) {
				var elem = contexto.getElementById( id );
				retornar elem ? [ elem ] : [];
			}
		};
	} outro {
		Expr.filter.ID = função( id ) {
			var attrId = id.replace( runescape, funescape );
			retornar função(elem) {
				var node = typeof elem.getAttributeNode !== "indefinido" &&
					elem.getAttributeNode( "id" );
				retornar nó && node.value === attrId;
			};
		};

		// Suporte: somente IE 6 - 7
		// getElementById não é confiável como um atalho de localização
		Expr.find.ID = função(id, contexto) {
			se ( tipo de contexto.getElementById !== "indefinido" && documentIsHTML ) {
				nó var, eu, elems,
					elem = contexto.getElementById( id );

				se (elemento) {

					// Verifique o atributo id
					nó = elem.getAttributeNode( "id" );
					se ( nó && nó.valor === id ) {
						retornar [elem];
					}

					// Voltar para getElementsByName
					elems = contexto.getElementsByName( id );
					eu = 0;
					enquanto ( ( elem = elems[ i++ ] ) ) {
						nó = elem.getAttributeNode( "id" );
						se ( nó && nó.valor === id ) {
							retornar [elem];
						}
					}
				}

				retornar [];
			}
		};
	}

	// Marcação
	Expr.find.TAG = função(tag, contexto) {
		se (tipo de contexto.getElementsByTagName !== "indefinido") {
			retornar contexto.getElementsByTagName( tag );

		// Os nós DocumentFragment não têm gEBTN
		} outro {
			retornar contexto.querySelectorAll(tag);
		}
	};

	// Aula
	Expr.find.CLASS = função(nomedaclasse, contexto) {
		se ( tipo de contexto.getElementsByClassName !== "indefinido" && documentIsHTML ) {
			retornar contexto.getElementsByClassName(className);
		}
	};

	/* QSA/matchesSelector
	-------------------------------------------------- -------------------- */

	// Suporte QSA e matchesSelector

	rbuggyQSA = [];

	// Construir regex QSA
	// Estratégia Regex adotada por Diego Perini
	assert( função( el ) {

		var entrada;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' desabilitado='desabilitado'></a>" +
			"<select id='" + expando + "-\r\\' desabilitado='desabilitado'>" +
			"<opção selecionada=''></option></select>";

		// Suporte: somente iOS <=7 - 8
		// Atributos booleanos e "valor" não são tratados corretamente em alguns documentos XML
		se ( !el.querySelectorAll( "[selecionado]" ).length ) {
			rbuggyQSA.push( "\\[" + espaço em branco + "*(?:valor|" + booleanos + ")" );
		}

		// Suporte: somente iOS <=7 - 8
		se ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Suporte: somente iOS 8
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// Falha no seletor `selector#id sibling-combinator` na página
		se ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Suporte: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Em alguns tipos de documentos, esses seletores não funcionariam nativamente.
		// Provavelmente isso está OK, mas para compatibilidade com versões anteriores, queremos manter
		// manipulando-os por meio do jQuery traversal no jQuery 3.x.
		se ( !el.querySelectorAll( ":verificado" ).comprimento ) {
			rbuggyQSA.push( ":verificado" );
		}

		// Suporte: Aplicativos nativos do Windows 8
		// Os atributos type e name são restritos durante a atribuição .innerHTML
		entrada = document.createElement( "entrada" );
		input.setAttribute( "tipo", "oculto" );
		el.appendChild(entrada).setAttribute( "nome", "D" );

		// Suporte: IE 9 - 11+
		// O seletor :disabled do IE não seleciona os filhos dos fieldsets desabilitados
		// Suporte: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Em alguns tipos de documentos, esses seletores não funcionariam nativamente.
		// Provavelmente isso está OK, mas para compatibilidade com versões anteriores, queremos manter
		// manipulando-os por meio do jQuery traversal no jQuery 3.x.
		documentElement.appendChild(el).disabled = verdadeiro;
		se ( el.querySelectorAll( ":desabilitado" ).comprimento !== 2 ) {
			rbuggyQSA.push( ":habilitado", ":desabilitado" );
		}

		// Suporte: IE 11+, Edge 15 - 18+
		// O IE 11/Edge não encontra elementos em uma consulta `[name='']` em alguns casos.
		// Adicionando um atributo temporário ao documento antes que a seleção funcione
		// em torno da questão.
		// Curiosamente, o IE 10 e versões anteriores não parecem ter esse problema.
		entrada = document.createElement( "entrada" );
		input.setAttribute( "nome", "" );
		el.appendChild( entrada );
		se ( !el.querySelectorAll( "[nome='']" ).comprimento ) {
			rbuggyQSA.push( "\\[" + espaço em branco + "*nome" + espaço em branco + "*=" +
				espaço em branco + "*(?:''|\"\")" );
		}
	} );

	se ( !support.cssHas ) {

		// Suporte: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Nosso mecanismo regular `try-catch` falha ao detectar nativamente sem suporte
		// pseudo-classes dentro de `:has()` (como `:has(:contains("Foo"))`)
		// em navegadores que analisam o argumento `:has()` como uma lista de seletores tolerantes.
		// https://drafts.csswg.org/selectors/#relational agora requer o argumento
		// deve ser analisado implacavelmente, mas os navegadores ainda não se ajustaram totalmente.
		rbuggyQSA.push( ":tem" );
	}

	rbuggyQSA = rbuggyQSA.length && novo RegExp( rbuggyQSA.join( "|" ) );

	/* Classificação
	-------------------------------------------------- -------------------- */

	// Classificação de documentos
	sortOrder = função( a, b ) {

		// Sinalizar para remoção de duplicatas
		se ( a === b ) {
			hasDuplicate = verdadeiro;
			retornar 0;
		}

		// Classificar por existência de método se apenas uma entrada tiver compareDocumentPosition
		var comparar = !a.compareDocumentPosition - !b.compareDocumentPosition;
		se (comparar) {
			retornar comparar;
		}

		// Calcula a posição se ambas as entradas pertencem ao mesmo documento
		// Suporte: IE 11+, Edge 17 - 18+
		// O IE/Edge às vezes gera um erro de "Permissão negada" ao fazer uma comparação estrita
		// dois documentos; comparações superficiais funcionam.
		// eslint-desabilita-próxima-linha eqeqeq
		comparar = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Caso contrário, sabemos que eles estão desconectados
			1;

		// Nós desconectados
		se ( comparar & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === comparar ) ) {

			// Escolha o primeiro elemento que está relacionado ao nosso documento preferido
			// Suporte: IE 11+, Edge 17 - 18+
			// O IE/Edge às vezes gera um erro de "Permissão negada" ao fazer uma comparação estrita
			// dois documentos; comparações superficiais funcionam.
			// eslint-desabilita-próxima-linha eqeqeq
			se ( um === documento || a.ownerDocument == preferredDoc &&
				find.contains(preferredDoc, a)) {
				retornar -1;
			}

			// Suporte: IE 11+, Edge 17 - 18+
			// O IE/Edge às vezes gera um erro de "Permissão negada" ao fazer uma comparação estrita
			// dois documentos; comparações superficiais funcionam.
			// eslint-desabilita-próxima-linha eqeqeq
			se ( b === documento || b.ownerDocument == preferredDoc &&
				find.contains(preferredDoc, b)) {
				retornar 1;
			}

			// Manter ordem original
			retornar sortInput ?
				( índiceDe.chamada(sortInput, a ) - índiceDe.chamada(sortInput, b ) ) :
				0;
		}

		retornar comparar & 4 ? -1 : 1;
	};

	documento de devolução;
}

find.matches = função( expr, elementos ) {
	retornar find( expr, nulo, nulo, elementos );
};

find.matchesSelector = função(elem, expr) {
	setDocument(elemento);

	se ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		tentar {
			var ret = corresponde.call(elem, expr);

			// O matchesSelector do IE 9 retorna falso em nós desconectados
			se ( ret || suporte.disconnectedMatch ||

					// Além disso, diz-se que os nós desconectados estão em um documento
					// fragmento no IE 9
					elem.documento && elem.documento.tipo de nó !== 11 ) {
				retornar ret;
			}
		} pegar ( e ) {
			nonnativeSelectorCache( expr, verdadeiro );
		}
	}

	retornar find( expr, documento, nulo, [ elem ] ).length > 0;
};

find.contains = função(contexto, elem) {

	// Defina as variáveis ​​do documento se necessário
	// Suporte: IE 11+, Edge 17 - 18+
	// O IE/Edge às vezes gera um erro de "Permissão negada" ao fazer uma comparação estrita
	// dois documentos; comparações superficiais funcionam.
	// eslint-desabilita-próxima-linha eqeqeq
	se ( ( contexto.ownerDocument || contexto ) != documento ) {
		setDocument( contexto );
	}
	retornar jQuery.contains( contexto, elem );
};


find.attr = função(elem, nome) {

	// Defina as variáveis ​​do documento se necessário
	// Suporte: IE 11+, Edge 17 - 18+
	// O IE/Edge às vezes gera um erro de "Permissão negada" ao fazer uma comparação estrita
	// dois documentos; comparações superficiais funcionam.
	// eslint-desabilita-próxima-linha eqeqeq
	se ( ( elem.ownerDocument || elem ) != documento ) {
		setDocument(elemento);
	}

	var fn = Expr.attrHandle[ nome.toLowerCase() ],

		// Não se deixe enganar pelas propriedades Object.prototype (veja trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, nome.toLowerCase() ) ?
			fn(elem, nome, !documentIsHTML ) :
			indefinido;

	se ( val !== indefinido ) {
		retornar valor;
	}

	retornar elem.getAttribute(nome);
};

find.error = função(msg) {
	throw new Error( "Erro de sintaxe, expressão não reconhecida: " + msg );
};

/**
 * Classificação de documentos e remoção de duplicatas
 * @param {ArrayLike} resultados
 */
jQuery.uniqueSort = função( resultados ) {
	var elem,
		duplicatas = [],
		j = 0,
		eu = 0;

	// A menos que *sabemos* que podemos detectar duplicatas, assuma sua presença
	//
	// Suporte: Android <=4.0+
	// O teste para detectar duplicatas é imprevisível, então, em vez disso, assuma que não podemos
	// depende da detecção de duplicatas em todos os navegadores sem uma classificação estável.
	temDuplicado = !support.sortStable;
	sortInput = !support.sortStable && slice.call( resultados, 0 );
	sort.call( resultados, sortOrder );

	se (temDuplicado) {
		enquanto ( ( elem = resultados[ i++ ] ) ) {
			se (elem === resultados[ i ] ) {
				j = duplicatas.push( i );
			}
		}
		enquanto ( j-- ) {
			splice.call( resultados, duplicatas[ j ], 1 );
		}
	}

	// Limpar entrada após classificar para liberar objetos
	// Veja https://github.com/jquery/sizzle/pull/225
	sortInput = nulo;

	retornar resultados;
};

jQuery.fn.uniqueSort = função() {
	retornar isto.pushStack( jQuery.uniqueSort( fatia.apply( isto ) ) );
};

Expr = jQuery.expr = {

	// Pode ser ajustado pelo usuário
	cacheLength: 50,

	criarPseudo: markFunction,

	correspondência: matchExpr,

	attrHandle: {},

	encontrar: {},

	relativo: {
		">": { dir: "parentNode", primeiro: verdadeiro },
		" ": { dir: "parentNode" },
		"+": { dir: "irmãoanterior", primeiro: verdadeiro },
		"~": { dir: "irmãoanterior" }
	},

	pré-filtro: {
		ATTR: função(correspondência) {
			correspondência[ 1 ] = correspondência[ 1 ].substituir( runescape, funescape );

			// Mova o valor fornecido para match[3], esteja ele entre aspas ou não
			correspondência[ 3 ] = ( correspondência[ 3 ] || correspondência[ 4 ] || correspondência[ 5 ] || "" )
				.substituir( runescape, funescape );

			se (correspondência[ 2 ] === "~=" ) {
				correspondência[ 3 ] = " " + correspondência[ 3 ] + " ";
			}

			retornar match.slice( 0, 4 );
		},

		CRIANÇA: função(correspondência) {

			/* corresponde a matchExpr["CHILD"]
				1 tipo (apenas|enésimo|...)
				2 o que (criança|do-tipo)
				3 argumento (par|ímpar|\d*|\d*n([+-]\d+)?|...)
				4 xn-componente do argumento xn+y ([+-]?\d*n|)
				5 sinais do componente xn
				6 x de xn-componente
				7 sinal do componente y
				8 y do componente y
			*/
			correspondência[ 1 ] = correspondência[ 1 ].toLowerCase();

			se (corresponder[1].slice(0, 3) === "enésimo" ) {

				// nth-* requer argumento
				se ( !corresponder[ 3 ] ) {
					encontrar.erro(correspondência[ 0 ] );
				}

				// parâmetros numéricos x e y para Expr.filter.CHILD
				// lembre-se de que false/true convertem respectivamente para 0/1
				correspondência[ 4 ] = +( correspondência[ 4 ] ?
					correspondência[ 5 ] + ( correspondência[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "par" || match[ 3 ] === "ímpar" )
				);
				correspondência[ 5 ] = +( ( correspondência[ 7 ] + correspondência[ 8 ] ) || correspondência[ 3 ] === "ímpar" );

			// outros tipos proíbem argumentos
			} senão se (corresponder[ 3 ] ) {
				encontrar.erro(correspondência[ 0 ] );
			}

			jogo de volta;
		},

		PSEUDO: função(correspondência) {
			excesso de var,
				sem aspas = !match[ 6 ] && match[ 2 ];

			se (matchExpr.CHILD.test(match[ 0 ] ) ) {
				retornar nulo;
			}

			// Aceitar argumentos citados como estão
			se (corresponder[ 3 ] ) {
				correspondência[ 2 ] = correspondência[ 4 ] || correspondência[ 5 ] || "";

			// Remove o excesso de caracteres de argumentos não citados
			} else if ( sem aspas && rpseudo.test( sem aspas ) &&

				// Obter excesso de tokenize (recursivamente)
				( excesso = tokenize( sem aspas, verdadeiro ) ) &&

				// avançar para o próximo parêntese de fechamento
				( excesso = unquoted.indexOf( ")", unquoted.length - excesso ) - unquoted.length ) ) {

				// excesso é um índice negativo
				match[ 0 ] = match[ 0 ].slice( 0, excesso );
				match[ 2 ] = sem aspas.slice( 0, excesso );
			}

			// Retorna apenas as capturas necessárias para o método de pseudofiltro (tipo e argumento)
			retornar match.slice( 0, 3 );
		}
	},

	filtro: {

		TAG: função(nodeNameSelector) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			retornar nodeNameSelector === "*" ?
				função() {
					retornar verdadeiro;
				} :
				função(elemento) {
					retornar nodeName(elem, expectedNodeName);
				};
		},

		CLASSE: função(nomedaclasse) {
			var padrão = classCache[ nomedaclasse + " " ];

			padrão de retorno ||
				( padrão = novo RegExp( "(^|" + espaço em branco + ")" + className +
					"(" + espaço em branco + "|$)" ) ) &&
				classCache(className, função(elem) {
					retornar padrão.teste(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "indefinido" &&
								elem.getAttribute( "classe" ) ||
							""
					);
				} );
		},

		ATTR: function(nome, operador, verificação) {
			retornar função(elem) {
				var resultado = find.attr( elem, nome );

				se ( resultado == nulo ) {
					operador de retorno === "!=";
				}
				se (!operador) {
					retornar verdadeiro;
				}

				resultado += "";

				se (operador === "=" ) {
					retornar resultado === verificar;
				}
				se (operador === "!=" ) {
					retornar resultado !== verificar;
				}
				se (operador === "^=") {
					retornar verificação && resultado.indexOf( verificação ) === 0;
				}
				se (operador === "*=" ) {
					retornar verificação && resultado.indexOf( verificação ) > -1;
				}
				se (operador === "$=") {
					retornar verificação && resultado.slice( -check.length ) === verificação;
				}
				se (operador === "~=" ) {
					retornar ( " " + resultado.replace( rwhitespace, " " ) + " " )
						.indexOf(verificação) > -1;
				}
				se (operador === "|=") {
					retornar resultado === verificar || resultado.slice( 0, verificar.length + 1 ) === verificar + "-";
				}

				retornar falso;
			};
		},

		CRIANÇA: função(tipo, o que, _argumento, primeiro, último) {
			var simple = tipo.slice( 0, 3 ) !== "nésimo",
				forward = type.slice( -4 ) !== "último",
				ofType = o que === "do-tipo";

			retornar primeiro === 1 && último === 0 ?

				// Atalho para :nth-*(n)
				função(elemento) {
					retornar !!elem.parentNode;
				} :

				função(elem, _contexto, xml) {
					var cache, outerCache, nó, nodeIndex, iniciar,
						dir = simples !== forward ? "nextSibling" : "anteriorSibling",
						pai = elem.parentNode,
						nome = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = falso;

					se (pai) {

						// :(primeiro|último|único)-(filho|do-tipo)
						se ( simples ) {
							enquanto (dir) {
								nó = elem;
								enquanto ( ( nó = nó [ dir ] ) ) {
									se ( deTipo ?
										nodeName( nó, nome ) :
										nó.tipo de nó === 1 ) {

										retornar falso;
									}
								}

								// Inverter a direção para :only-* (se ainda não o fizemos)
								início = dir = tipo === "somente" && !início && "nextSibling";
							}
							retornar verdadeiro;
						}

						início = [ avançar ? pai.primeiroFilho : pai.últimoFilho ];

						// não-xml :nth-child(...) armazena dados de cache em `pai`
						se (encaminhar && usarCache) {

							// Procura `elem` de um índice previamente armazenado em cache
							outerCache = pai[ expando ] || ( pai[ expando ] = {} );
							cache = outerCache[ tipo ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = índice de nó && cache[ 2 ];
							nó = nodeIndex && parent.childNodes[ nodeIndex ];

							enquanto ( ( nó = ++nodeIndex && nó && nó[ dir ] ||

								// Voltar a procurar `elem` desde o início
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// Quando encontrado, armazena em cache os índices em `pai` e quebra
								se ( nó.nodeType === 1 && ++diff && nó === elem ) {
									outerCache[ tipo ] = [ dirruns, nodeIndex, diff ];
									quebrar;
								}
							}

						} outro {

							// Use o índice de elemento armazenado em cache anteriormente, se disponível
							se (useCache) {
								outerCache = elemento[expandir] || (elem[expandir] = {});
								cache = outerCache[ tipo ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = índice_do_nó;
							}

							// xml :enésimo-filho(...)
							// ou :nth-last-child(...) ou :nth(-last)?-of-type(...)
							se (diff === falso) {

								// Use o mesmo loop acima para buscar `elem` desde o início
								enquanto ( ( nó = ++nodeIndex && nó && nó[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									se ( ( deTipo ?
										nodeName( nó, nome ) :
										nó.tipo de nó === 1 ) &&
										++diferença ) {

										// Armazena em cache o índice de cada elemento encontrado
										se (useCache) {
											outerCache = nó[ expando ] ||
												( nó[ expando ] = {} );
											outerCache[ tipo ] = [ dirruns, diff ];
										}

										se ( nó === elem ) {
											quebrar;
										}
									}
								}
							}
						}

						// Incorpore o deslocamento e, em seguida, verifique o tamanho do ciclo
						diff -= último;
						retornar diff === primeiro || ( diff % primeiro === 0 && diff / primeiro >= 0 );
					}
				};
		},

		PSEUDO: função( pseudo, argumento ) {

			// nomes de pseudoclasses não diferenciam maiúsculas de minúsculas
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Priorizar por diferenciação de maiúsculas e minúsculas no caso de pseudos personalizados serem adicionados com letras maiúsculas
			// Lembre-se de que setFilters herda de pseudos
			var argumentos,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "pseudo não suportado: " + pseudo );

			// O usuário pode usar createPseudo para indicar que
			// argumentos são necessários para criar a função de filtro
			// assim como o jQuery faz
			se ( fn[ expando ] ) {
				retornar fn(argumento);
			}

			// Mas mantenha o suporte para assinaturas antigas
			se (fn.length > 1) {
				args = [ pseudo, pseudo, "", argumento ];
				retornar Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( função( semente, correspondências ) {
						var idx,
							correspondido = fn( semente, argumento ),
							i = comprimento correspondente;
						enquanto (i--) {
							idx = indexOf.call( semente, correspondido[ i ] );
							semente[ idx ] = !( correspondências[ idx ] = correspondido[ i ] );
						}
					} ) :
					função(elemento) {
						retornar fn(elem, 0, args);
					};
			}

			retornar fn;
		}
	},

	pseudônimos: {

		// Pseudos potencialmente complexos
		não: markFunction( função( seletor ) {

			// Aparar o seletor passado para compilar
			// para evitar tratar o início e o fim
			// espaços como combinadores
			var entrada = [],
				resultados = [],
				matcher = compilar(seletor.substituir(rtrimCSS, "$1" ) );

			retornar matcher[ expando ] ?
				markFunction( função( semente, correspondências, _contexto, xml ) {
					var elem,
						inigualável = matcher( semente, nulo, xml, [] ),
						i = semente.comprimento;

					// Corresponde aos elementos não correspondidos por `matcher`
					enquanto (i--) {
						se ( ( elem = incomparável [ i ] ) ) {
							semente[ i ] = !( correspondências[ i ] = elem );
						}
					}
				} ) :
				função(elem, _contexto, xml) {
					entrada[ 0 ] = elem;
					matcher(entrada, nulo, xml, resultados);

					// Não mantenha o elemento
					// (veja https://github.com/jquery/sizzle/issues/299)
					entrada[ 0 ] = nulo;
					retornar !results.pop();
				};
		} ),

		tem: markFunction( função( seletor ) {
			retornar função(elem) {
				retornar find( seletor, elem ).length > 0;
			};
		} ),

		contém: markFunction( função( texto ) {
			texto = texto.replace( runescape, funescape );
			retornar função(elem) {
				retornar ( elem.textContent || jQuery.text( elem ) ).indexOf( texto ) > -1;
			};
		} ),

		// "Se um elemento é representado por um seletor :lang()
		// é baseado somente no valor de idioma do elemento
		// sendo igual ao identificador C,
		// ou começando com o identificador C imediatamente seguido por "-".
		// A correspondência de C com o valor de idioma do elemento é realizada sem distinção entre maiúsculas e minúsculas.
		// O identificador C não precisa ser um nome de idioma válido."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		idioma: markFunction( função( idioma ) {

			// o valor lang deve ser um identificador válido
			se ( !ridentifier.test( idioma || "" ) ) {
				find.error( "idioma não suportado: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			retornar função(elem) {
				var elemLang;
				fazer {
					se ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === idioma || elemLang.indexOf(lang + "-" ) === 0;
					}
				} while ((elem = elem.parentNode) && elem.nodeType === 1);
				retornar falso;
			};
		} ),

		// Diversos
		alvo: função(elem) {
			var hash = janela.localização && janela.localização.hash;
			retornar hash && hash.slice( 1 ) === elem.id;
		},

		raiz: função(elem) {
			retornar elem === documentElement;
		},

		foco: função(elem) {
			retornar elemento === safeActiveElement() &&
				documento.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Propriedades booleanas
		habilitado: createDisabledPseudo(false),
		desabilitado: createDisabledPseudo( true ),

		verificado: função(elem) {

			// Em CSS3, :checked deve retornar elementos selecionados e marcados
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			retornar ( nodeName( elem, "entrada") && !!elem.checked ) ||
				( nodeName( elem, "opção" ) && !!elem.selected );
		},

		selecionado: função(elem) {

			// Suporte: IE <=11+
			// Acessando a propriedade selectedIndex
			// força o navegador a tratar a opção padrão como
			// selecionado quando em um optgroup.
			se (elem.parentNode) {
				// eslint-disable-next-line sem-expressões-não-utilizadas
				elem.parentNode.selectedIndex;
			}

			retornar elem.selected === verdadeiro;
		},

		// Conteúdo
		vazio: função(elem) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty é negado pelo elemento (1) ou nós de conteúdo (texto: 3; cdata: 4; referência de entidade: 5),
			// mas não por outros (comentário: 8; instrução de processamento: 7; etc.)
			// nodeType < 6 funciona porque os atributos (2) não aparecem como filhos
			para (elem = elem.firstChild; elem; elem = elem.nextSibling) {
				se (elem.nodeType < 6) {
					retornar falso;
				}
			}
			retornar verdadeiro;
		},

		pai: função(elem) {
			retornar !Expr.pseudos.empty(elem);
		},

		// Tipos de elementos/entradas
		cabeçalho: função(elem) {
			retornar rheader.test( elem.nodeName );
		},

		entrada: função(elem) {
			retornar rinputs.test( elem.nodeName );
		},

		botão: função(elem) {
			retornar nodeName(elem, "entrada") && elem.type === "botão" ||
				nodeName(elem, "botão" );
		},

		texto: função(elem) {
			atributo var;
			retornar nodeName(elem, "entrada") && elem.type === "texto" &&

				// Suporte: somente IE <10
				// Novos valores de atributos HTML5 (por exemplo, "pesquisar") aparecem
				// com elem.type === "texto"
				( ( attr = elem.getAttribute( "tipo" ) ) == nulo ||
					attr.toLowerCase() === "texto" );
		},

		// Posição-na-coleção
		primeiro: createPositionalPseudo( function() {
			retornar [ 0 ];
		} ),

		último: createPositionalPseudo( function( _matchIndexes, comprimento ) {
			retornar [ comprimento - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, comprimento, argumento ) {
			retornar [ argumento < 0 ? argumento + comprimento : argumento ];
		} ),

		mesmo: createPositionalPseudo( function( matchIndexes, comprimento ) {
			var i = 0;
			para ( ; i < comprimento; i += 2 ) {
				matchIndexes.push( i );
			}
			retornar matchIndexes;
		} ),

		ímpar: createPositionalPseudo( função( matchIndexes, comprimento ) {
			var i = 1;
			para ( ; i < comprimento; i += 2 ) {
				matchIndexes.push( i );
			}
			retornar matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, comprimento, argumento ) {
			var eu;

			se ( argumento < 0 ) {
				i = argumento + comprimento;
			} senão se ( argumento > comprimento ) {
				i = comprimento;
			} outro {
				i = argumento;
			}

			para ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			retornar matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, comprimento, argumento ) {
			var i = argumento < 0 ? argumento + comprimento : argumento;
			para ( ; ++i < comprimento; ) {
				matchIndexes.push( i );
			}
			retornar matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Adicionar pseudos de tipo de botão/entrada
para (i em { rádio: verdadeiro, caixa de seleção: verdadeiro, arquivo: verdadeiro, senha: verdadeiro, imagem: verdadeiro } ) {
	Expr.pseudos[ i ] = criarPseudoInput( i );
}
para (i em {enviar: verdadeiro, redefinir: verdadeiro}) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// API fácil para criar novos setFilters
função setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = novo setFilters();

função tokenize( seletor, parseOnly ) {
	var correspondido, correspondência, tokens, tipo,
		até agora, grupos, pré-filtros,
		em cache = tokenCache[ seletor + " " ];

	se (em cache) {
		retornar parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = seletor;
	grupos = [];
	preFiltros = Expr.preFiltro;

	enquanto ( até agora ) {

		// Vírgula e primeira execução
		se ( !correspondido || (correspondência = rcomma.exec( soFar ) ) ) {
			se (corresponder) {

				// Não consuma vírgulas finais como válidas
				até agora = até agora.slice( match[ 0 ].length ) || até agora;
			}
			grupos.push( ( tokens = [] ) );
		}

		correspondido = falso;

		// Combinadores
		se ( ( correspondência = rleadingCombinator.exec( até agora ) ) ) {
			correspondido = match.shift();
			tokens.push( {
				valor: correspondido,

				// Lança combinadores descendentes para o espaço
				tipo: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice(correspondido.length);
		}

		// Filtros
		para (digite em Expr.filter) {
			se ((correspondência = matchExpr[tipo].exec(soFar)) && (!preFilters[tipo] ||
				( correspondência = preFilters[ tipo ]( correspondência ) ) ) ) {
				correspondido = match.shift();
				tokens.push( {
					valor: correspondido,
					tipo: tipo,
					fósforos: fósforo
				} );
				soFar = soFar.slice(correspondido.length);
			}
		}

		se ( !correspondido ) {
			quebrar;
		}
	}

	// Retorna o comprimento do excesso inválido
	// se estamos apenas analisando
	// Caso contrário, lance um erro ou retorne tokens
	se (parseOnly) {
		retornar soFar.length;
	}

	retornar até agora?
		find.error( seletor ) :

		// Armazenar em cache os tokens
		tokenCache( seletor, grupos ).slice( 0 );
}

função toSelector( tokens ) {
	var i = 0,
		len = tokens.comprimento,
		seletor = "";
	para ( ; i < len; i++ ) {
		seletor += tokens[ i ].valor;
	}
	seletor de retorno;
}

função addCombinator(correspondente, combinador, base) {
	var dir = combinator.dir,
		pular = combinator.next,
		chave = pular || diretório,
		checkNonElements = base && chave === "parentNode",
		doneName = feito++;

	retornar combinator.first ?

		// Verifique o ancestral mais próximo/elemento precedente
		função(elem, contexto, xml) {
			enquanto ( ( elem = elem[ dir ] ) ) {
				se (elem.nodeType === 1 || checkNonElements) {
					retornar matcher(elem, contexto, xml);
				}
			}
			retornar falso;
		} :

		// Verificar todos os elementos ancestrais/precedentes
		função(elem, contexto, xml) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// Não podemos definir dados arbitrários em nós XML, então eles não se beneficiam do cache do combinador
			se ( xml ) {
				enquanto ( ( elem = elem[ dir ] ) ) {
					se (elem.nodeType === 1 || checkNonElements) {
						se (correspondente(elemento, contexto, xml)) {
							retornar verdadeiro;
						}
					}
				}
			} outro {
				enquanto ( ( elem = elem[ dir ] ) ) {
					se (elem.nodeType === 1 || checkNonElements) {
						outerCache = elemento[expandir] || (elem[expandir] = {});

						se ( pular && nodeName( elem, pular ) ) {
							elem = elem[ dir ] || elem;
						} senão se ( ( oldCache = outerCache [ chave ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Atribuir a newCache para que os resultados sejam propagados de volta para os elementos anteriores
							retornar ( newCache[ 2 ] = oldCache[ 2 ] );
						} outro {

							// Reutilize newcache para que os resultados sejam propagados de volta para elementos anteriores
							outerCache[ chave ] = newCache;

							// Uma correspondência significa que terminamos; uma falha significa que temos que continuar verificando
							se ( ( newCache[ 2 ] = matcher( elem, contexto, xml ) ) ) {
								retornar verdadeiro;
							}
						}
					}
				}
			}
			retornar falso;
		};
}

function elementMatcher(correspondentes) {
	retornar matchers.length > 1 ?
		função(elem, contexto, xml) {
			var i = matchers.length;
			enquanto (i--) {
				se ( !matchers[ i ]( elem, contexto, xml ) ) {
					retornar falso;
				}
			}
			retornar verdadeiro;
		} :
		combinadores[ 0 ];
}

função multipleContexts(seletor, contextos, resultados) {
	var i = 0,
		len = contextos.length;
	para ( ; i < len; i++ ) {
		find( seletor, contextos[ i ], resultados );
	}
	retornar resultados;
}

função condensar(incomparável, mapa, filtro, contexto, xml) {
	var elem,
		novoIncomparável = [],
		eu = 0,
		len = comprimento incomparável,
		mapeado = mapa != nulo;

	para ( ; i < len; i++ ) {
		se ( ( elem = incomparável [ i ] ) ) {
			se ( !filtro || filtro(elemento, contexto, xml ) ) {
				novoIncomparável.push(elem);
				se ( mapeado ) {
					mapa.push(i);
				}
			}
		}
	}

	retornar novoIncomparável;
}

função setMatcher(preFilter, seletor, matcher, postFilter, postFinder, postSelector) {
	se ( postFilter && ! postFilter [ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	se ( postFinder && ! postFinder [ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	retornar markFunction( função( semente, resultados, contexto, xml ) {
		var temp, i, elem, matcherOut,
			préMapa = [],
			postMap = [],
			preexistente = resultados.comprimento,

			// Obter elementos iniciais da semente ou contexto
			elems = semente ||
				multipleContexts( seletor || "*",
					contexto.nodeType ? [ contexto ] : contexto, [] ),

			// Pré-filtro para obter entrada do correspondente, preservando um mapa para sincronização de resultados iniciais
			matcherIn = preFilter && ( semente || !seletor ) ?
				condensar(elems, preMap, preFilter, contexto, xml) :
				elementos;

		se (correspondente) {

			// Se tivermos um postFinder, ou semente filtrada, ou postFilter não semente
			// ou resultados preexistentes,
			matcherOut = postFinder || ( semente ? preFilter : preexistente || postFilter ) ?

				// ...processamento intermediário é necessário
				[] :

				// ...caso contrário, use os resultados diretamente
				resultados;

			// Encontre correspondências primárias
			matcher(matcherIn, matcherOut, contexto, xml);
		} outro {
			matcherOut = matcherIn;
		}

		// Aplicar postFilter
		se ( postFilter ) {
			temp = condensar(matcherOut, postMap);
			postFilter( temp, [], contexto, xml );

			// Desfaça a correspondência dos elementos com falha movendo-os de volta para matcherIn
			i = temp.comprimento;
			enquanto (i--) {
				se ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		se (semente) {
			se ( postFinder || preFilter ) {
				se ( postFinder ) {

					// Obtenha o matcherOut final condensando este intermediário em contextos postFinder
					temperatura = [];
					i = matcherOut.length;
					enquanto (i--) {
						se ( ( elem = matcherOut[ i ] ) ) {

							// Restaurar matcherIn, pois elem ainda não é uma correspondência final
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder(nulo, (matcherOut = []), temp, xml);
				}

				// Mova os elementos correspondentes da semente para os resultados para mantê-los sincronizados
				i = matcherOut.length;
				enquanto (i--) {
					se ((elem = matcherOut[i]) &&
						( temp = postFinder ? indexOf.call( semente, elem ) : preMap[ i ] ) > -1 ) {

						semente[ temp ] = !( resultados[ temp ] = elem );
					}
				}
			}

		// Adicionar elementos aos resultados, por meio do postFinder, se definido
		} outro {
			matcherOut = condensar(
				matcherOut === resultados ?
					matcherOut.splice( preexistente, matcherOut.length ) :
					matcherFora
			);
			se ( postFinder ) {
				postFinder(null, resultados, matcherOut, xml);
			} outro {
				push.apply( resultados, matcherOut );
			}
		}
	} );
}

função matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.comprimento,
		leadingRelative = Expr.relative[ tokens[ 0 ].tipo ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// O correspondente fundamental garante que os elementos sejam acessíveis a partir de contextos de nível superior
		matchContext = addCombinator( função( elem ) {
			retornar elemento === checkContext;
		}, implicitRelative, verdadeiro ),
		matchAnyContext = addCombinator( função( elem ) {
			retornar indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, verdadeiro ),
		matchers = [ função(elem, contexto, xml ) {

			// Suporte: IE 11+, Edge 17 - 18+
			// O IE/Edge às vezes apresenta um erro de "Permissão negada" ou ao fazer uma comparação estrita
			// dois documentos; comparações superficiais funcionam.
			// eslint-desabilita-próxima-linha eqeqeq
			var ret = ( !leadingRelative && ( xml || contexto != outermostContext ) ) || (
				( checkContext = contexto ).nodeType ?
					matchContext(elem, contexto, xml) :
					matchAnyContext(elem, contexto, xml));

			// Evite ficar preso ao elemento
			// (veja https://github.com/jquery/sizzle/issues/299)
			checkContext = nulo;
			retornar ret;
		} ];

	para ( ; i < len; i++ ) {
		se ((correspondente = Expr.relative[tokens[i].tipo])) {
			matchers = [addCombinator(elementMatcher(matchers), matcher)];
		} outro {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Retorna especial ao ver um matcher posicional
			se (correspondente[expandir]) {

				// Encontre o próximo operador relativo (se houver) para tratamento adequado
				j = ++i;
				para ( ; j < len; j++ ) {
					se ( Expr.relativo[ tokens[ j ].tipo ] ) {
						quebrar;
					}
				}
				retornar setMatcher(
					i > 1 && elementMatcher(correspondentes),
					i > 1 && paraSeletor(

						// Se o token anterior for um combinador descendente, insira um `*` implícito em qualquer elemento
						tokens.slice( 0, i - 1 )
							.concat( { valor: tokens[ i - 2 ].tipo === " " ? "*" : "" } )
					).substituir( rtrimCSS, "$1" ),
					combinador,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push(correspondente);
		}
	}

	return elementMatcher(correspondentes);
}

função matcherFromGroupMatchers(elementMatchers, setMatchers) {
	var bySet = setMatchers.length > 0,
		porElemento = elementMatchers.length > 0,
		superMatcher = function( semente, contexto, xml, resultados, mais externo ) {
			var elem, j, matcher,
				contagemcorrespondida = 0,
				eu = "0",
				incomparável = semente && [],
				conjuntoCorrespondido = [],
				contextBackup = contextoexterno,

				// Devemos sempre ter elementos semente ou contexto mais externo
				elems = semente || porElemento && Expr.find.TAG( "*", mais externo ),

				// Use dirruns inteiros se este for o correspondente mais externo
				dirrunsUnique = ( dirruns += contextBackup == nulo ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			se (mais externo) {

				// Suporte: IE 11+, Edge 17 - 18+
				// O IE/Edge às vezes gera um erro de "Permissão negada" ao fazer uma comparação estrita
				// dois documentos; comparações superficiais funcionam.
				// eslint-desabilita-próxima-linha eqeqeq
				outermostContext = contexto == documento || contexto || mais externo;
			}

			// Adicionar elementos passando elementMatchers diretamente aos resultados
			// Suporte: somente iOS <=7 - 9
			// Tolera propriedades NodeList (IE: "length"; Safari: <number>) correspondentes
			// elementos por id. (veja trac-14142)
			para ( ; i !== len && ( elem = elems[ i ] ) != nulo; i++ ) {
				se (porElemento && elem) {
					j = 0;

					// Suporte: IE 11+, Edge 17 - 18+
					// O IE/Edge às vezes gera um erro de "Permissão negada" ao fazer uma comparação estrita
					// dois documentos; comparações superficiais funcionam.
					// eslint-desabilita-próxima-linha eqeqeq
					se ( !contexto && elem.ownerDocument != documento ) {
						setDocument(elemento);
						xml = !documentIsHTML;
					}
					enquanto ( ( matcher = elementMatchers[ j++ ] ) ) {
						se ( matcher (elem, contexto || documento, xml ) ) {
							push.call( resultados, elem );
							quebrar;
						}
					}
					se (mais externo) {
						dirruns = dirrunsUnique;
					}
				}

				// Rastreie elementos incomparáveis ​​para filtros definidos
				se (porSet) {

					// Eles terão passado por todos os possíveis matchers
					se ((elem = !matcher && elem)) {
						Contagemcorrespondida--;
					}

					// Aumentar o array para cada elemento, correspondido ou não
					se (semente) {
						incomparável.push(elem);
					}
				}
			}

			// `i` agora é a contagem de elementos visitados acima e adicionando-o a `matchedCount`
			// torna o último não negativo.
			Contagemcorrespondida += i;

			// Aplicar filtros definidos a elementos não correspondentes
			// NOTA: Isso pode ser ignorado se não houver elementos não correspondentes (por exemplo, `matchedCount`
			// é igual a `i`), a menos que não tenhamos visitado _nenhum_ elemento no loop acima porque temos
			// sem correspondências de elementos e sem semente.
			// Incrementar uma string inicial "0" `i` permite que `i` permaneça uma string somente naquele
			// caso, que resultará em um `matchedCount` `00'' que difere de `i`, mas também é
			// numericamente zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				enquanto ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher(incomparável, setMatched, contexto, xml);
				}

				se (semente) {

					// Reintegrar correspondências de elementos para eliminar a necessidade de classificação
					se (matchedCount > 0) {
						enquanto (i--) {
							se ( !( não correspondido [ i ] || definido correspondido [ i ] ) ) {
								setMatched[ i ] = pop.call( resultados );
							}
						}
					}

					// Descarte os valores do espaço reservado do índice para obter apenas correspondências reais
					setMatched = condensar( setMatched );
				}

				// Adicionar correspondências aos resultados
				push.apply( resultados, setMatched );

				// Os conjuntos de correspondências sem sementes que sucederam vários correspondentes bem-sucedidos estipulam a classificação
				se (mais externo && !seed && setMatched.length > 0 &&
					(matchedCount + setMatchers.length) > 1) {

					jQuery.uniqueSort( resultados );
				}
			}

			// Substituir manipulação de globais por matchers aninhados
			se (mais externo) {
				dirruns = dirrunsUnique;
				outermostContext = contextoBackup;
			}

			retornar incomparável;
		};

	retornar porSet ?
		markFunction( superMatcher ) :
		superMatcher;
}

função compilar(seletor, correspondência /* Somente para uso interno */ ) {
	var eu,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ seletor + " " ];

	se (!em cache) {

		// Gera uma função de funções recursivas que podem ser usadas para verificar cada elemento
		se ( !corresponder ) {
			correspondência = tokenize( seletor );
		}
		i = correspondência.comprimento;
		enquanto (i--) {
			em cache = matcherFromTokens(correspondência[i]);
			se (em cache[expandir]) {
				setMatchers.push(em cache);
			} outro {
				elementMatchers.push(em cache);
			}
		}

		// Armazena em cache a função compilada
		cached = compilerCache( seletor,
			matcherFromGroupMatchers(elementMatchers, setMatchers));

		// Salvar seletor e tokenização
		cached.selector = seletor;
	}
	retornar em cache;
}

/**
 * Uma função de seleção de baixo nível que funciona com o compilado do jQuery
 * funções seletoras
 * @param {String|Function} seletor Um seletor ou um pré-compilado
 * função seletora construída com compilação de seletor jQuery
 * @param {Elemento} contexto
 * @param {Array} [resultados]
 * @param {Array} [seed] Um conjunto de elementos para comparar
 */
função select(seletor, contexto, resultados, semente) {
	var i, tokens, token, tipo, encontrar,
		compilado = seletor typeof === "função" && seletor,
		match = !seed && tokenize( ( seletor = compilado.selector || seletor ) );

	resultados = resultados || [];

	// Tente minimizar as operações se houver apenas um seletor na lista e nenhuma semente
	// (o último dos quais nos garante o contexto)
	se (correspondência.comprimento === 1) {

		// Reduz o contexto se o seletor composto líder for um ID
		tokens = correspondência[ 0 ] = correspondência[ 0 ].slice( 0 );
		se ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				contexto.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			contexto = ( Expr.find.ID(
				token.matches[ 0 ].substituir( runescape, funescape ),
				contexto
			) || [] )[ 0 ];
			se ( !contexto ) {
				retornar resultados;

			// Os matchers pré-compilados ainda verificarão a ancestralidade, então suba um nível
			} senão se (compilado) {
				contexto = contexto.parentNode;
			}

			seletor = seletor.slice( tokens.shift().value.length );
		}

		// Buscar um conjunto de sementes para correspondência da direita para a esquerda
		i = matchExpr.needsContext.test( seletor ) ? 0 : tokens.length;
		enquanto (i--) {
			token = tokens[ i ];

			// Abortar se atingirmos um combinador
			se ( Expr.relativo [ ( tipo = token.tipo ) ] ) {
				quebrar;
			}
			se ( ( encontrar = Expr.encontrar[ tipo ] ) ) {

				// Pesquisar, expandindo o contexto para combinadores irmãos líderes
				se ( ( semente = encontrar (
					token.matches[ 0 ].substituir( runescape, funescape ),
					rsibling.test( tokens[ 0 ].tipo ) &&
						testContext( contexto.parentNode ) || contexto
				) ) ) {

					// Se a semente estiver vazia ou não houver tokens restantes, podemos retornar mais cedo
					tokens.splice(i, 1);
					seletor = semente.length && toSelector( tokens );
					se ( !seletor ) {
						push.apply( resultados, semente );
						retornar resultados;
					}

					quebrar;
				}
			}
		}
	}

	// Compilar e executar uma função de filtragem se nenhuma for fornecida
	// Forneça `match` para evitar a re-tokenização se modificarmos o seletor acima
	( compilado || compilar( seletor, correspondência ) )(
		semente,
		contexto,
		!documentoÉHTML,
		resultados,
		!contexto || rsibling.test( seletor ) && testContext( contexto.parentNode ) || contexto
	);
	retornar resultados;
}

// Tarefas únicas

// Suporte: Android <=4.0 - 4.1+
// Estabilidade de classificação
suporte.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Inicializar com base no documento padrão
definirDocumento();

// Suporte: Android <=4.0 - 4.1+
// Nós separados seguem *uns aos outros* de forma confusa
suporte.sortDetached = assert( função( el ) {

	// Deveria retornar 1, mas retorna 4 (seguinte)
	retornar el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = encontrar;

// Obsoleto
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// Elas sempre foram privadas, mas costumavam ser documentadas como parte de
// Sizzle, então vamos mantê-los por enquanto para fins de compatibilidade com versões anteriores.
find.compile = compilar;
find.select = selecionar;
encontrar.setDocument = definirDocumento;
find.tokenize = tokenizar;

encontrar.escape = jQuery.escapeSelector;
encontrar.obterTexto = jQuery.text;
encontrar.isXML = jQuery.isXMLDoc;
encontrar.seletores = jQuery.expr;
encontrar.suporte = jQuery.suporte;
encontrar.uniqueSort = jQuery.uniqueSort;

	/* eslint-habilitar */

} )();


var dir = function(elem, dir, até) {
	var correspondido = [],
		truncar = até !== indefinido;

	enquanto ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		se (elem.nodeType === 1) {
			se ( truncar && jQuery( elem ).is( até ) ) {
				quebrar;
			}
			correspondido.push(elem);
		}
	}
	retorno correspondido;
};


var irmãos = função(n, elem) {
	var correspondido = [];

	para ( ; n; n = n.nextSibling ) {
		se (n.nodeType === 1 && n !== elem) {
			correspondido.push(n);
		}
	}

	retorno correspondido;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implementar a mesma funcionalidade para filtro e não
função winnow(elementos, qualificador, não) {
	se (isFunction( qualificador ) ) {
		retornar jQuery.grep( elementos, função( elem, i ) {
			retornar !!qualificador.call( elem, i, elem ) !== não;
		} );
	}

	// Elemento único
	se ( qualificador.nodeType ) {
		retornar jQuery.grep( elementos, função( elem ) {
			retornar (elem === qualificador) !== não;
		} );
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	se ( qualificador typeof !== "string" ) {
		retornar jQuery.grep( elementos, função( elem ) {
			retornar (indexOf.call(qualificador, elem) > -1) !== não;
		} );
	}

	// Filtrado diretamente para seletores simples e complexos
	retornar jQuery.filter( qualificador, elementos, não );
}

jQuery.filter = função( expr, elems, não ) {
	var elem = elems[ 0 ];

	se não ) {
		expr = ":não(" + expr + ")";
	}

	se (elems.length === 1 && elem.nodeType === 1) {
		retornar jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
	}

	retornar jQuery.find.matches( expr, jQuery.grep( elems, função( elem ) {
		retornar elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	encontrar: função(seletor) {
		var i, ret,
			len = este.comprimento,
			self = isto;

		se (seletor typeof !== "string") {
			retornar this.pushStack( jQuery( seletor ).filter( função() {
				para ( i = 0; i < len; i++ ) {
					se ( jQuery.contains( self[ i ], isto ) ) {
						retornar verdadeiro;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		para ( i = 0; i < len; i++ ) {
			jQuery.find( seletor, self[ i ], ret );
		}

		retornar len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filtro: função(seletor) {
		retornar this.pushStack( winnow( this, seletor || [], falso ) );
	},
	não: função(seletor) {
		retornar this.pushStack( winnow( this, seletor || [], verdadeiro ) );
	},
	é: função(seletor) {
		retornar !!winnow(
			esse,

			// Se este for um seletor posicional/relativo, verifique a associação no conjunto retornado
			// então $("p:first").is("p:last") não retornará true para um documento com dois "p".
			seletor typeof === "string" && rneedsContext.test( seletor ) ?
				jQuery( seletor ) :
				seletor || [],
			falso
		).comprimento;
	}
} );


// Inicializar um objeto jQuery


// Uma referência central à raiz jQuery(document)
var rootjQuery,

	// Uma maneira simples de verificar strings HTML
	// Priorize #id sobre <tag> para evitar XSS via location.hash (trac-9521)
	// Reconhecimento estrito de HTML (trac-11290: deve começar com <)
	// Atalho simples #id case para velocidade
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( seletor, contexto, raiz ) {
		var correspondência, elem;

		// MANIPULADOR: $(""), $(null), $(undefined), $(false)
		se ( !seletor ) {
			devolva isto;
		}

		// O método init() aceita uma raiz alternativajQuery
		// então o migrate pode suportar jQuery.sub (gh-2101)
		raiz = raiz || raizjQuery;

		// Manipular strings HTML
		se (seletor typeof === "string") {
			se ( seletor [ 0 ] === "<" &&
				seletor[ seletor.length - 1 ] === ">" &&
				seletor.length >= 3 ) {

				// Suponha que as strings que começam e terminam com <> são HTML e ignore a verificação de regex
				correspondência = [ nulo, seletor, nulo ];

			} outro {
				match = rquickExpr.exec( seletor );
			}

			// Corresponde ao html ou garante que nenhum contexto seja especificado para #id
			se (corresponder && (corresponder[ 1 ] || !contexto ) ) {

				// MANIPULADOR: $(html) -> $(array)
				se (corresponder[ 1 ] ) {
					contexto = contexto instância de jQuery ? contexto[ 0 ] : contexto;

					// A opção para executar scripts é verdadeira para compatibilidade retroativa
					// Deixe intencionalmente que o erro seja lançado se parseHTML não estiver presente
					jQuery.merge( isto, jQuery.parseHTML(
						partida[ 1 ],
						contexto && contexto.nodeType ? contexto.ownerDocument || contexto : documento,
						verdadeiro
					) );

					// MANIPULADOR: $(html, props)
					se ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( contexto ) ) {
						para (correspondência no contexto) {

							// As propriedades do contexto são chamadas como métodos, se possível
							se (isFunction(este[correspondência])) {
								isto[ correspondência ]( contexto[ correspondência ] );

							// ...e de outra forma definidos como atributos
							} outro {
								this.attr(correspondência, contexto[correspondência]);
							}
						}
					}

					devolva isto;

				// MANIPULADOR: $(#id)
				} outro {
					elem = document.getElementById(correspondência[ 2 ] );

					se (elemento) {

						// Injetar o elemento diretamente no objeto jQuery
						isto[ 0 ] = elem;
						este.comprimento = 1;
					}
					devolva isto;
				}

			// MANIPULADOR: $(expr, $(...))
			} senão se ( !contexto || contexto.jquery ) {
				retornar (contexto || raiz).encontrar(seletor);

			// MANIPULADOR: $(expr, contexto)
			// (que é equivalente a: $(context).find(expr)
			} outro {
				retornar this.constructor(contexto).find(seletor);
			}

		// MANIPULADOR: $(DOMElement)
		} senão se ( seletor.nodeType ) {
			este[ 0 ] = seletor;
			este.comprimento = 1;
			devolva isto;

		// MANIPULADOR: $(função)
		// Atalho para documento pronto
		} senão if ( isFunction( seletor ) ) {
			retornar root.ready !== indefinido ?
				root.ready( seletor ) :

				// Executar imediatamente se ready não estiver presente
				seletor( jQuery );
		}

		retornar jQuery.makeArray( seletor, this );
	};

// Dê à função init o protótipo jQuery para posterior instanciação
init.prototype = jQuery.fn;

// Inicializar referência central
rootjQuery = jQuery( documento );


var rparentsprev = /^(?:pais|prev(?:Até|Todos))/,

	// Métodos garantidos para produzir um conjunto único ao iniciar a partir de um conjunto único
	garantidoÚnico = {
		crianças: verdade,
		conteúdo: verdadeiro,
		próximo: verdadeiro,
		anterior: verdadeiro
	};

jQuery.fn.extend( {
	tem: função(alvo) {
		var targets = jQuery( alvo, isto ),
			l = alvos.comprimento;

		retornar this.filter( função() {
			var i = 0;
			para ( ; i < l; i++ ) {
				se ( jQuery.contains( isto, alvos[ i ] ) ) {
					retornar verdadeiro;
				}
			}
		} );
	},

	mais próximo: função(seletores, contexto) {
		var cur,
			eu = 0,
			l = este.comprimento,
			correspondido = [],
			alvos = tipo de seletores !== "string" && jQuery( seletores );

		// Os seletores posicionais nunca correspondem, pois não há contexto de _seleção_
		se ( !rneedsContext.test( seletores ) ) {
			para ( ; i < l; i++ ) {
				para (cur = este[i]; cur && cur !== contexto; cur = cur.parentNode) {

					// Sempre pule fragmentos de documentos
					se (cur.nodeType < 11 && (alvos?
						targets.index(cur) > -1:

						// Não passe elementos não-jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, seletores ) ) ) {

						correspondido.push(cur);
						quebrar;
					}
				}
			}
		}

		retornar this.pushStack(correspondido.length > 1 ? jQuery.uniqueSort(correspondido) : correspondido);
	},

	// Determina a posição de um elemento dentro do conjunto
	índice: função(elem) {

		// Sem argumento, retorna índice no pai
		se ( !elem ) {
			retornar (este[0] &&este[0].parentNode) ? este.primeiro().prevAll().comprimento : -1;
		}

		// Índice no seletor
		se ( tipo de elemento === "string" ) {
			retornar indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Localize a posição do elemento desejado
		retornar indexOf.call( isto,

			// Se receber um objeto jQuery, o primeiro elemento é usado
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	adicionar: função(seletor, contexto) {
		retornar isto.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( seletor, contexto ) )
			)
		);
	},

	addBack: função(seletor) {
		retornar isto.add( seletor == nulo ?
			this.prevObject : this.prevObject.filter( seletor )
		);
	}
} );

função irmão(cur, dir) {
	enquanto ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	retornar corrente;
}

jQuery.cada( {
	pai: função(elem) {
		var pai = elem.parentNode;
		retornar pai && parent.nodeType !== 11 ? parent : null;
	},
	pais: função(elem) {
		retornar dir(elem, "parentNode" );
	},
	paisAté: função(elem, _i, até) {
		retornar dir(elem, "parentNode", até);
	},
	próximo: função(elem) {
		retornar irmão(elem, "nextSibling");
	},
	anterior: função(elem) {
		retornar irmão(elem, "irmãoanterior");
	},
	nextAll: função(elem) {
		retornar dir(elem, "nextSibling" );
	},
	prevAll: função( elem ) {
		retornar dir(elem, "irmãoanterior");
	},
	nextUntil: função(elem, _i, até) {
		retornar dir(elem, "nextSibling", até);
	},
	prevUntil: função(elem, _i, até) {
		retornar dir(elem, "irmãoanterior", até);
	},
	irmãos: função(elem) {
		retornar irmãos((elem.parentNode || {}).firstChild, elem);
	},
	crianças: função(elem) {
		retornar irmãos(elem.firstChild);
	},
	conteúdo: função(elem) {
		se (elem.contentDocument != nulo &&

			// Suporte: IE 11+
			// elementos <object> sem atributo `data` tem um objeto
			// `contentDocument` com um protótipo `null`.
			getProto(elem.contentDocument)) {

			retornar elem.contentDocument;
		}

		// Suporte: somente IE 9 - 11, somente iOS 7, somente navegador Android <=4.3
		// Trate o elemento do modelo como um elemento regular em navegadores que
		// não o suporte.
		se ( nodeName( elem, "modelo") ) {
			elem = elem.content || elem;
		}

		retornar jQuery.merge( [], elem.childNodes );
	}
}, função(nome, fn) {
	jQuery.fn[ nome ] = função( até, seletor ) {
		var correspondido = jQuery.map( isto, fn, até );

		se ( nome.slice( -5 ) !== "Até" ) {
			seletor = até;
		}

		se (seletor && seletor typeof === "string") {
			correspondido = jQuery.filter( seletor, correspondido );
		}

		se ( this.length > 1 ) {

			// Remover duplicatas
			se (!guaranteedUnique[ nome ] ) {
				jQuery.uniqueSort(correspondido);
			}

			// Ordem inversa para pais* e prev-derivatives
			se ( rparentsprev.test( nome ) ) {
				correspondido.reverso();
			}
		}

		retornar this.pushStack(correspondido);
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Converte opções formatadas em String em opções formatadas em Object
função createOptions(opções) {
	var objeto = {};
	jQuery.each(opções.match(rnothtmlwhite) || [], função(_, sinalizador) {
		objeto[ sinalizador ] = verdadeiro;
	} );
	retornar objeto;
}

/*
 * Crie uma lista de retorno de chamada usando os seguintes parâmetros:
 *
 * opções: uma lista opcional de opções separadas por espaços que mudarão como
 * a lista de retorno de chamada se comporta como um objeto de opção mais tradicional
 *
 * Por padrão, uma lista de retorno de chamada agirá como uma lista de retorno de chamada de evento e pode ser
 * "disparado" várias vezes.
 *
 * Opções possíveis:
 *
 * once: garantirá que a lista de retorno de chamada só possa ser disparada uma vez (como um Deferred)
 *
 * memória: manterá o controle dos valores anteriores e chamará qualquer retorno de chamada adicionado
 * depois que a lista foi disparada imediatamente com o último "memorizado"
 * valores (como um Diferido)
 *
 * exclusivo: garantirá que um retorno de chamada só possa ser adicionado uma vez (sem duplicatas na lista)
 *
 * stopOnFalse: interromper chamadas quando um retorno de chamada retornar falso
 *
 */
jQuery.Callbacks = função(opções) {

	// Converta opções de formato String para formato Object, se necessário
	// (primeiro verificamos o cache)
	opções = tipo de opções === "string" ?
		createOptions(opções) :
		jQuery.extend( {}, opções );

	var // Sinalizador para saber se a lista está sendo disparada no momento
		atirando,

		// Último valor de fogo para listas não esquecíveis
		memória,

		// Sinalizador para saber se a lista já foi disparada
		despedido,

		// Sinalizador para evitar disparos
		trancado,

		// Lista de retorno de chamada real
		lista = [],

		// Fila de dados de execução para listas repetíveis
		fila = [],

		// Índice do retorno de chamada atualmente disparado (modificado por adicionar/remover conforme necessário)
		Índice de disparo = -1,

		// Chamadas de retorno de fogo
		fogo = função() {

			// Aplicar disparo único
			bloqueado = bloqueado || opções.uma vez;

			// Executar retornos de chamada para todas as execuções pendentes,
			// respeitando substituições de firingIndex e alterações de tempo de execução
			demitido = disparando = verdadeiro;
			para ( ; fila.length; firingIndex = -1 ) {
				memória = queue.shift();
				enquanto ( ++firingIndex < lista.length ) {

					// Executar retorno de chamada e verificar término antecipado
					se (lista[índicededisparo].aplicar(memória[0], memória[1]) === falso &&
						opções.stopOnFalse ) {

						// Vá para o final e esqueça os dados para que .add não seja disparado novamente
						firingIndex = lista.comprimento;
						memória = falso;
					}
				}
			}

			// Esqueça os dados quando terminarmos de usá-los
			se ( !opções.memória ) {
				memória = falso;
			}

			disparo = falso;

			// Limpe se terminamos de atirar para sempre
			se (bloqueado) {

				// Mantenha uma lista vazia se tivermos dados para futuras chamadas add
				se ( memória ) {
					lista = [];

				// Caso contrário, este objeto é gasto
				} outro {
					lista = "";
				}
			}
		},

		// Objeto Callbacks reais
		eu = {

			// Adicione um retorno de chamada ou uma coleção de retornos de chamada à lista
			adicionar: função() {
				se (lista) {

					// Se tivermos memória de uma execução anterior, devemos disparar após adicionar
					se ( memória && ! disparo ) {
						firingIndex = lista.comprimento - 1;
						queue.push( memória );
					}

					(função add(args) {
						jQuery.each(argumentos, função(_, argumento) {
							se (isFunction(arg)) {
								se ( !opções.único || !self.tem( arg ) ) {
									lista.push(arg);
								}
							} senão se ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspecionar recursivamente
								adicionar(arg);
							}
						} );
					} )( argumentos );

					se ( memória && ! disparo ) {
						fogo();
					}
				}
				devolva isto;
			},

			// Remove um retorno de chamada da lista
			remover: função() {
				jQuery.each(argumentos, função(_, arg) {
					índice var;
					enquanto ( ( índice = jQuery.inArray( arg, lista, índice ) ) > -1 ) {
						lista.splice(índice, 1);

						// Manipular índices de disparo
						se (índice <=índiceDeDisparo) {
							Índice de disparo--;
						}
					}
				} );
				devolva isto;
			},

			// Verifica se um determinado retorno de chamada está na lista.
			// Se nenhum argumento for fornecido, retorna se a lista tem ou não retornos de chamada anexados.
			tem: função(fn) {
				retornar fn ?
					jQuery.inArray(fn, lista) > -1 :
					lista.comprimento > 0;
			},

			// Remove todos os retornos de chamada da lista
			vazio: função() {
				se (lista) {
					lista = [];
				}
				devolva isto;
			},

			// Desabilitar .fire e .add
			// Abortar qualquer execução atual/pendente
			// Limpa todos os retornos de chamada e valores
			desabilitar: função() {
				bloqueado = fila = [];
				lista = memória = "";
				devolva isto;
			},
			desabilitado: função() {
				retornar !lista;
			},

			// Desabilitar .fire
			// Também desabilite .add a menos que tenhamos memória (pois não teria efeito)
			// Abortar quaisquer execuções pendentes
			bloqueio: função() {
				bloqueado = fila = [];
				se (!memória &&!disparo) {
					lista = memória = "";
				}
				devolva isto;
			},
			bloqueado: função() {
				retornar !!bloqueado;
			},

			// Chame todos os retornos de chamada com o contexto e os argumentos fornecidos
			fireWith: função(contexto, argumentos) {
				se ( !bloqueado ) {
					argumentos = argumentos || [];
					args = [ contexto, args.slice ? args.slice() : args ];
					fila.push(args);
					se ( !disparando ) {
						fogo();
					}
				}
				devolva isto;
			},

			// Chame todos os retornos de chamada com os argumentos fornecidos
			fogo: função() {
				self.fireWith(isto, argumentos);
				devolva isto;
			},

			// Para saber se os callbacks já foram chamados pelo menos uma vez
			disparado: função() {
				retornar !!disparado;
			}
		};

	retornar a si mesmo;
};


função Identidade( v ) {
	retornar v;
}
função Thrower( ex ) {
	jogar ex;
}

função adoptValue( valor, resolver, rejeitar, noValue ) {
	método var;

	tentar {

		// Verifique primeiro o aspecto de promessa para privilegiar o comportamento síncrono
		se (valor && isFunction((método = valor.promessa))) {
			método.call(valor).done(resolver).fail(rejeitar);

		// Outros thenables
		} senão se ( valor && isFunction( ( método = valor.then ) ) ) {
			método.call(valor, resolver, rejeitar);

		// Outros não-thenables
		} outro {

			// Controle os argumentos `resolve` permitindo que Array#slice converta o booleano `noValue` para inteiro:
			// * falso: [ valor ].slice( 0 ) => resolve( valor )
			// * true: [ valor ].slice( 1 ) => resolve()
			resolve.apply( indefinido, [ valor ].slice( noValue ) );
		}

	// Para Promises/A+, converta exceções em rejeições
	// Como jQuery.when não desembrulha thenables, podemos pular as verificações extras que aparecem em
	// Adiado#então para suprimir condicionalmente a rejeição.
	} catch ( valor ) {

		// Suporte: somente Android 4.0
		// Funções de modo estrito invocadas sem .call/.apply obtêm contexto de objeto global
		rejeitar.aplicar(indefinido, [valor]);
	}
}

jQuery.extend( {

	Adiado: função(func) {
		var tuplas = [

				// ação, adicionar ouvinte, retornos de chamada,
				// ... .then manipuladores, índice de argumento, [estado final]
				[ "notificar", "progresso", jQuery.Callbacks( "memória" ),
					jQuery.Callbacks( "memória" ), 2 ],
				[ "resolver", "feito", jQuery.Callbacks( "uma vez memória" ),
					jQuery.Callbacks( "uma vez memória" ), 0, "resolvido" ],
				[ "rejeitar", "falhar", jQuery.Callbacks( "uma vez memória" ),
					jQuery.Callbacks( "uma vez memória" ), 1, "rejeitado" ]
			],
			estado = "pendente",
			promessa = {
				estado: função() {
					estado de retorno;
				},
				sempre: função() {
					adiado.feito(argumentos).falha(argumentos);
					devolva isto;
				},
				"pegar": função(fn) {
					retornar promessa.then(nulo, fn);
				},

				// Manter pipe para compatibilidade retroativa
				pipe: função( /* fnConcluído, fnFalha, fnProgresso */ ) {
					var fns = argumentos;

					retornar jQuery.Deferred( função( newDefer ) {
						jQuery.each( tuplas, função( _i, tupla ) {

							// Mapear tuplas (progresso, concluído, falha) para argumentos (concluído, falha, progresso)
							var fn = isFunction( fns[ tupla[ 4 ] ] ) && fns[ tupla[ 4 ] ];

							// deferred.progress(function() { vincular a newDefer ou newDefer.notify })
							// deferred.done(function() { vincular a newDefer ou newDefer.resolve })
							// deferred.fail(function() { vincular a newDefer ou newDefer.reject })
							adiado[ tupla[ 1 ] ]( função() {
								var retornado = fn && fn.apply( this, argumentos );
								se (retornou && isFunction(retornou.promessa)) {
									retornado.promessa()
										.progresso( novoAdiar.notificar )
										.feito( novoDefer.resolver )
										.fail( novoDefer. rejeitar );
								} outro {
									newDefer[ tupla[ 0 ] + "Com" ](
										esse,
										fn ? [ retornado ] : argumentos
									);
								}
							} );
						} );
						fns = nulo;
					} ).promessa();
				},
				então: função(onFulfilled, onRejected, onProgress) {
					var profundidade máxima = 0;
					função resolve(profundidade, adiado, manipulador, especial) {
						retornar função() {
							var que = isto,
								args = argumentos,
								mightThrow = função() {
									var retornou, então;

									// Suporte: Promessas/A+ seção 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorar tentativas de dupla resolução
									se ( profundidade < maxDepth ) {
										retornar;
									}

									retornado = handler.apply( that, args );

									// Suporte: Promessas/A+ seção 2.3.1
									// https://promisesaplus.com/#point-48
									se ( retornou === deferred.promise() ) {
										throw new TypeError( "Então habilitar auto-resolução" );
									}

									// Suporte: Promessas/A+ seções 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recuperar `then` apenas uma vez
									então = retornou &&

										// Suporte: Promessas/A+ seção 2.3.4
										// https://promisesaplus.com/#point-64
										// Verifique apenas objetos e funções para sua viabilidade
										( typeof retornou === "objeto" ||
											typeof retornou === "função" ) &&
										retornou.então;

									// Manipular um thenable retornado
									se (isFunction(então)) {

										// Processadores especiais (notificar) apenas aguardam resolução
										se (especial) {
											então.chame(
												retornou,
												resolve( maxDepth, adiado, Identidade, especial ),
												resolve( maxDepth, adiado, Thrower, especial )
											);

										// Processadores normais (resolve) também se conectam ao progresso
										} outro {

											// ...e desconsidere valores de resolução mais antigos
											profundidademáxima++;

											então.chame(
												retornou,
												resolve( maxDepth, adiado, Identidade, especial ),
												resolve( maxDepth, adiado, Thrower, especial ),
												resolve( maxDepth, adiado, Identidade,
													adiado.notificarCom )
											);
										}

									// Lidar com todos os outros valores retornados
									} outro {

										// Somente manipuladores substitutos passam o contexto
										// e valores múltiplos (comportamento não especificado)
										se ( manipulador !== Identidade ) {
											que = indefinido;
											args = [ retornado ];
										}

										// Processar o(s) valor(es)
										// O processo padrão é resolver
										( especial || adiado.resolveWith )( isso, args );
									}
								},

								// Somente processadores normais (resolve) capturam e rejeitam exceções
								processo = especial?
									pode lançar:
									função() {
										tentar {
											podeLançar();
										} pegar ( e ) {

											se ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													processo.erro );
											}

											// Suporte: Promessas/A+ seção 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorar exceções pós-resolução
											se ( profundidade + 1 >= maxDepth ) {

												// Somente manipuladores substitutos passam o contexto
												// e valores múltiplos (comportamento não especificado)
												se ( manipulador !== Lançador ) {
													que = indefinido;
													args = [ e ];
												}

												adiado.rejectWith(isso, argumentos);
											}
										}
									};

							// Suporte: Promessas/A+ seção 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Resolva as promessas imediatamente para evitar falsas rejeições de
							// erros subsequentes
							se (profundidade) {
								processo();
							} outro {

								// Chame um gancho opcional para registrar o erro, em caso de exceção
								// pois caso contrário, ele será perdido quando a execução for assíncrona
								se ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// O alias obsoleto do acima. Embora o nome sugira
								// retornando a pilha, não uma instância de erro, jQuery apenas passa
								// diretamente para `console.warn` para que ambos funcionem; uma instância
								// apenas coopera melhor com mapas de origem.
								} senão se ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( processo );
							}
						};
					}

					retornar jQuery.Deferred( função( newDefer ) {

						// progress_handlers.add( ... )
						tuplas[ 0 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction( onProgress ) ?
									emProgresso:
									Identidade,
								novoDefer.notificarCom
							)
						);

						// fulfillment_handlers.add( ... )
						tuplas[ 1 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction( onFulfilled ) ?
									emFulfilled:
									Identidade
							)
						);

						// reject_handlers.add( ... )
						tuplas[ 2 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction( onRejected ) ?
									emRejeitado:
									Atirador
							)
						);
					} ).promessa();
				},

				// Obtenha uma promessa para este diferido
				// Se obj for fornecido, o aspecto de promessa será adicionado ao objeto
				promessa: função( obj ) {
					retornar obj != null ? jQuery.extend( obj, promessa ) : promessa;
				}
			},
			diferido = {};

		// Adicionar métodos específicos de lista
		jQuery.each( tuplas, função( i, tupla ) {
			var lista = tupla[ 2 ],
				stateString = tupla[ 5 ];

			// promessa.progresso = lista.adicionar
			// promessa.feito = lista.adicionar
			// promessa.falha = lista.adicionar
			promessa[ tupla[ 1 ] ] = lista.adicionar;

			// Manipular estado
			se (estadoString) {
				lista.adicionar(
					função() {

						// estado = "resolvido" (ou seja, cumprido)
						// estado = "rejeitado"
						estado = estadoString;
					},

					// rejeitado_callbacks.desabilitar
					// completed_callbacks.disable
					tuplas[ 3 - i ][ 2 ].desabilitar,

					// manipuladores_rejeitados.desabilitar
					// fulfillment_handlers.disable
					tuplas[ 3 - i ][ 3 ].desabilitar,

					// progress_callbacks.lock
					tuplas[ 0 ][ 2 ].bloqueio,

					// manipuladores_de_progresso.lock
					tuplas[ 0 ][ 3 ].bloqueio
				);
			}

			// manipuladores_de_progresso.fogo
			// done_handlers.fire
			// rejected_handlers.fire (manipuladores_rejeitados.fogo)
			lista.add( tupla[ 3 ].fogo );

			// adiado.notificar = função() { adiado.notificarCom(...) }
			// adiado.resolve = function() { adiado.resolveWith(...) }
			// adiado.reject = function() { adiado.rejectWith(...) }
			adiado[ tupla[ 0 ] ] = função() {
				adiado[ tupla[ 0 ] + "Com" ]( isto === adiado ? indefinido : isto, argumentos );
				devolva isto;
			};

			// adiado.notifyWith = lista.fireWith
			// adiado.resolveWith = lista.fireWith
			// adiado.rejectWith = lista.fireWith
			adiado[ tupla[ 0 ] + "Com" ] = lista.fireWith;
		} );

		// Faça do adiado uma promessa
		promessa.promessa(adiado);

		// Chamar a função fornecida se houver alguma
		se (função) {
			func.call(adiado, adiado);
		}

		// Tudo pronto!
		retorno diferido;
	},

	// Auxiliar diferido
	quando: função( singleValue ) {
		var

			// contagem de subordinados incompletos
			restante = argumentos.comprimento,

			// contagem de argumentos não processados
			i = restante,

			// dados de atendimento subordinados
			resolveContexts = Matriz(i),
			resolveValues ​​= slice.call(argumentos),

			// o diferido primário
			primário = jQuery.Deferred(),

			// fábrica de retorno de chamada subordinada
			updateFunc = função(i) {
				retornar função(valor) {
					resolveContexts[ i ] = isto;
					resolveValues[ i ] = argumentos.length > 1 ? slice.call( argumentos ) : valor;
					se ( !( --restante ) ) {
						primary.resolveWith(resolveContexts, resolveValues);
					}
				};
			};

		// Argumentos simples e vazios são adotados como Promise.resolve
		se ( restante <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!restante );

			// Use .then() para desembrulhar thenables secundários (cf. gh-3000)
			se ( primary.state() === "pendente" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				retornar primário.then();
			}
		}

		// Vários argumentos são agregados como elementos do array Promise.all
		enquanto (i--) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		retornar primary.promise();
	}
} );


// Geralmente indicam um erro do programador durante o desenvolvimento,
// avise sobre eles o mais rápido possível em vez de engoli-los por padrão.
var rerrorNames = /^(Eval|Interno|Intervalo|Referência|Sintaxe|Tipo|URI)Error$/;

// Se `jQuery.Deferred.getErrorHook` for definido, `asyncError` é um erro
// capturado antes da barreira assíncrona para obter a causa do erro original
// que de outra forma poderiam estar ocultos.
jQuery.Deferred.exceptionHook = função(erro, asyncError) {

	// Suporte: somente IE 8 - 9
	// O console existe quando as ferramentas de desenvolvimento estão abertas, o que pode acontecer a qualquer momento
	se ( janela.console && janela.console.warn && erro && rerrorNames.test( erro.nome ) ) {
		window.console.warn( "jQuery.Deferred exception: " + erro.mensagem,
			erro.stack, asyncError );
	}
};




jQuery.readyException = função(erro) {
	janela.setTimeout( função() {
		erro de lançamento;
	} );
};




// O diferido usado no DOM pronto
var readyList = jQuery.Deferred();

jQuery.fn.ready = função(fn) {

	lista pronta
		.então(fn)

		// Envolva jQuery.readyException em uma função para que a pesquisa
		// acontece no momento do tratamento de erros em vez do retorno de chamada
		// registro.
		.catch( função( erro ) {
			jQuery.readyException( erro );
		} );

	devolva isto;
};

jQuery.extend( {

	// O DOM está pronto para ser usado? Defina como true quando isso ocorrer.
	isReady: falso,

	// Um ​​contador para rastrear quantos itens esperar antes
	// o evento pronto dispara. Veja trac-6781
	prontoEspera: 1,

	// Manipule quando o DOM estiver pronto
	pronto: função(espera) {

		// Abortar se houver retenções pendentes ou se já estivermos prontos
		se ( esperar === verdadeiro ? --jQuery.readyWait : jQuery.isReady ) {
			retornar;
		}

		// Lembre-se que o DOM está pronto
		jQuery.isReady = verdadeiro;

		// Se um evento DOM Ready normal for disparado, diminua e aguarde se necessário
		se (esperar !== verdadeiro && --jQuery.readyWait > 0 ) {
			retornar;
		}

		// Se houver funções vinculadas, para executar
		readyList.resolveWith( documento, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// O manipulador de eventos pronto e o método de autolimpeza
função concluída() {
	document.removeEventListener( "DOMContentLoaded", concluído );
	window.removeEventListener( "carregar", concluído );
	jQuery.ready();
}

// Capturar casos em que $(document).ready() é chamado
// depois que o evento do navegador já ocorreu.
// Suporte: IE <=9 - 10 apenas
// O IE mais antigo às vezes sinaliza "interativo" muito cedo
se ( document.readyState === "completo" ||
	( document.readyState !== "carregando" && !document.documentElement.doScroll ) ) {

	// Manipule-o de forma assíncrona para permitir que os scripts tenham a oportunidade de atrasar a preparação
	janela.setTimeout( jQuery.ready );

} outro {

	// Use o retorno de chamada de evento prático
	document.addEventListener( "DOMContentLoaded", concluído );

	// Um ​​fallback para window.onload, que sempre funcionará
	window.addEventListener( "carregar", concluído );
}




// Método multifuncional para obter e definir valores de uma coleção
// O(s) valor(es) pode(m) ser executado(s) opcionalmente se for uma função
var access = function(elems, fn, chave, valor, encadeável, emptyGet, raw) {
	var i = 0,
		len = elems.comprimento,
		volume = chave == nulo;

	// Define muitos valores
	se ( toType( chave ) === "objeto" ) {
		encadeável = verdadeiro;
		para (i na chave) {
			acesso(elems, fn, i, chave[i], verdadeiro, emptyGet, bruto);
		}

	// Define um valor
	} senão se ( valor !== indefinido ) {
		encadeável = verdadeiro;

		se ( !isFunction( valor ) ) {
			bruto = verdadeiro;
		}

		se ( massa ) {

			// Operações em massa são executadas em todo o conjunto
			se (bruto) {
				fn.call(elementos, valor);
				fn = nulo;

			// ...exceto ao executar valores de função
			} outro {
				volume = fn;
				fn = função(elem, _chave, valor) {
					retornar bulk.call( jQuery( elem ), valor );
				};
			}
		}

		se (fn) {
			para ( ; i < len; i++ ) {
				fn(
					elems[ i ], chave, bruto ?
						valor :
						valor.call(elems[i], i, fn(elems[i], chave))
				);
			}
		}
	}

	se (encadeável) {
		retornar elementos;
	}

	// Obtém
	se ( massa ) {
		retornar fn.call(elems);
	}

	retornar len ? fn(elems[ 0 ], chave ) : emptyGet;
};


// Corresponde à string tracejada para camelização
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([az])/g;

// Usado por camelCase como retorno de chamada para replace()
função fcamelCase( _all, letra ) {
	retornar letra.toUpperCase();
}

// Converte dashed para camelCase; usado pelos módulos css e data
// Suporte: IE <=9 - 11, Edge 12 - 15
// A Microsoft esqueceu de aumentar o prefixo do fornecedor (trac-9572)
função camelCase( string ) {
	retornar string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
}
var acceptData = função(proprietário) {

	// Aceita apenas:
	// - Nó
	// - Nó.ELEMENT_NODE
	// - Nó.DOCUMENT_NODE
	// - Objeto
	// - Qualquer
	retornar proprietário.nodeType === 1 || proprietário.nodeType === 9 || !( +proprietário.nodeType );
};




função Dados() {
	this.expando = jQuery.expando + Data.uid++;
}

Dados.uid = 1;

Dados.protótipo = {

	cache: função(proprietário) {

		// Verifique se o objeto proprietário já possui um cache
		var valor = proprietário[ this.expando ];

		// Se não, crie um
		se ( !valor ) {
			valor = {};

			// Podemos aceitar dados para nós não-elementares em navegadores modernos,
			// mas não deveríamos, veja trac-8335.
			// Sempre retorna um objeto vazio.
			se ( aceitarDados( proprietário ) ) {

				// Se for um nó com pouca probabilidade de ser transformado em string ou passado em loop
				// usar atribuição simples
				se (proprietário.nodeType) {
					proprietário[ this.expando ] = valor;

				// Caso contrário, proteja-o em uma propriedade não enumerável
				// configurável deve ser verdadeiro para permitir que a propriedade seja
				// excluído quando os dados são removidos
				} outro {
					Object.defineProperty( proprietário, this.expando, {
						valor: valor,
						configurável: verdadeiro
					} );
				}
			}
		}

		valor de retorno;
	},
	conjunto: função(proprietário, dados, valor) {
		var prop,
			cache = this.cache(proprietário);

		// Handle: [proprietário, chave, valor] argumentos
		// Sempre use a chave camelCase (gh-2257)
		se (tipo de dados === "string") {
			cache[ camelCase( dados ) ] = valor;

		// Handle: [proprietário, {propriedades}] argumentos
		} outro {

			// Copie as propriedades uma por uma para o objeto de cache
			para (prop em dados) {
				cache[ camelCase( prop ) ] = dados[ prop ];
			}
		}
		retornar cache;
	},
	obter: função(proprietário, chave) {
		tecla de retorno === indefinido?
			this.cache(proprietário) :

			// Sempre use a chave camelCase (gh-2257)
			proprietário[ isto.expando ] && proprietário[ isto.expando ][ camelCase( chave ) ];
	},
	acesso: função(proprietário, chave, valor) {

		// Nos casos em que:
		//
		// 1. Nenhuma chave foi especificada
		// 2. Uma chave de string foi especificada, mas nenhum valor foi fornecido
		//
		// Pegue o caminho "read" e permita que o método get determine
		// qual valor retornar, respectivamente:
		//
		// 1. O objeto de cache inteiro
		// 2. Os dados armazenados na chave
		//
		se ( chave === indefinido ||
				( ( chave && tipo de chave === "string" ) && valor === indefinido ) ) {

			retornar this.get(proprietário, chave);
		}

		// Quando a chave não é uma string, ou uma chave e um valor
		// são especificados, definidos ou estendidos (objetos existentes) com:
		//
		// 1. Um objeto de propriedades
		// 2. Uma chave e valor
		//
		this.set(proprietário, chave, valor);

		// Como o caminho "set" pode ter dois pontos de entrada possíveis
		// retorna os dados esperados com base no caminho que foi tomado[*]
		valor de retorno !== indefinido ? valor : chave;
	},
	remover: função(proprietário, chave) {
		var eu,
			cache = proprietário[ this.expando ];

		se ( cache === indefinido ) {
			retornar;
		}

		se (chave !== indefinido) {

			// Suporta array ou sequência de chaves separadas por espaços
			se ( Array.isArray( chave ) ) {

				// Se key for um array de chaves...
				// Sempre definimos chaves camelCase, então remova isso.
				chave = chave.map(camelCase);
			} outro {
				chave = camelCase(chave);

				// Se existir uma chave com espaços, use-a.
				// Caso contrário, crie uma matriz correspondendo a espaços não brancos
				chave = chave no cache?
					[ chave ] :
					( chave.match( rnothtmlwhite ) || [] );
			}

			i = chave.comprimento;

			enquanto (i--) {
				excluir cache[ chave[ i ] ];
			}
		}

		// Remova o expando se não houver mais dados
		se (chave === indefinido || jQuery.isEmptyObject( cache ) ) {

			// Suporte: Chrome <=35 - 45
			// O desempenho do Webkit e do Blink sofre ao excluir propriedades
			// de nós DOM, então defina como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restrito)
			se (proprietário.nodeType) {
				proprietário[ this.expando ] = indefinido;
			} outro {
				excluir proprietário[ this.expando ];
			}
		}
	},
	hasData: função(proprietário) {
		var cache = proprietário[ this.expando ];
		retornar cache !== indefinido && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = novo Dados();

var dataUser = novo Dados();



// Resumo da implementação
//
// 1. Aplicar a superfície da API e a compatibilidade semântica com a ramificação 1.9.x
// 2. Melhore a manutenibilidade do módulo reduzindo o armazenamento
// caminhos para um único mecanismo.
// 3. Use o mesmo mecanismo único para dar suporte a dados "privados" e "de usuário".
// 4. _Nunca_ exponha dados "privados" ao código do usuário (TODO: Drop _data, _removeData)
// 5. Evite expor detalhes de implementação em objetos de usuário (por exemplo, propriedades expando)
// 6. Fornecer um caminho claro para a implementação da atualização do WeakMap em 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[AZ]/g;

função getData(dados) {
	se (dados === "verdadeiro") {
		retornar verdadeiro;
	}

	se (dados === "falso") {
		retornar falso;
	}

	se (dados === "nulo") {
		retornar nulo;
	}

	// Converta para um número somente se isso não alterar a string
	se (dados === +dados + "" ) {
		retornar +dados;
	}

	se ( rbrace.test( dados ) ) {
		retornar JSON.parse( dados );
	}

	retornar dados;
}

função dataAttr(elem, chave, dados) {
	nome da variável;

	// Se nada foi encontrado internamente, tente buscar qualquer
	// dados do atributo HTML5 data-*
	se ( dados === indefinido && elem.nodeType === 1 ) {
		nome = "dados-" + chave.replace( rmultiDash, "-$&" ).toLowerCase();
		dados = elem.getAttribute(nome);

		se (tipo de dados === "string") {
			tentar {
				dados = getData(dados);
			} pegar ( e ) {}

			// Certifique-se de que definimos os dados para que não sejam alterados posteriormente
			dataUser.set(elem, chave, dados);
		} outro {
			dados = indefinido;
		}
	}
	retornar dados;
}

jQuery.extend( {
	hasData: função(elem) {
		retornar dataUser.hasData(elem) || dataPriv.hasData(elem);
	},

	dados: função(elem, nome, dados) {
		retornar dataUser.access(elem, nome, dados);
	},

	removeData: função(elem, nome) {
		dataUser.remove(elem, nome);
	},

	// TODO: Agora que todas as chamadas para _data e _removeData foram substituídas
	// com chamadas diretas aos métodos dataPriv, eles podem ser descontinuados.
	_data: função(elem, nome, dados) {
		retornar dataPriv.access(elem, nome, dados);
	},

	_removeData: função(elem, nome) {
		dataPriv.remove(elem, nome);
	}
} );

jQuery.fn.extend( {
	dados: função(chave, valor) {
		var i, nome, dados,
			elem = isto[ 0 ],
			atributos = elem && elem.attributes;

		// Obtém todos os valores
		se (chave === indefinido) {
			se ( este. comprimento ) {
				dados = dataUser.get(elem);

				se (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs" ) ) {
					i = comprimento.attrs;
					enquanto (i--) {

						// Suporte: somente IE 11
						// Os elementos attrs podem ser nulos (trac-14894)
						se (attrs[i]) {
							nome = attrs[ i ].nome;
							se ( nome.indexOf( "dados-" ) === 0 ) {
								nome = camelCase( nome.slice( 5 ) );
								dataAttr(elem, nome, data[ nome ] );
							}
						}
					}
					dataPriv.set(elem, "hasDataAttrs", true);
				}
			}

			retornar dados;
		}

		// Define vários valores
		se (tipo de chave === "objeto") {
			retornar this.each( função() {
				dataUser.set( isto, chave );
			} );
		}

		retornar acesso(isto, função(valor) {
			dados var;

			// O objeto jQuery de chamada (elemento corresponde) não está vazio
			// (e portanto tem um elemento aparece neste[ 0 ]) e o
			// parâmetro `value` não foi indefinido. Um objeto jQuery vazio
			// resultará em `indefinido` para elem = this[ 0 ] que irá
			// lança uma exceção se for feita uma tentativa de ler um cache de dados.
			se (elem && valor === indefinido) {

				// Tenta obter dados do cache
				// A chave sempre será camelCased em Data
				dados = dataUser.get(elem, chave);
				se (dados !== indefinido) {
					retornar dados;
				}

				// Tentar "descobrir" os dados em
				// HTML5 dados personalizados-* attrs
				dados = dataAttr(elem, chave);
				se (dados !== indefinido) {
					retornar dados;
				}

				// Nós tentamos muito, mas os dados não existem.
				retornar;
			}

			// Defina os dados...
			isto.cada( função() {

				// Sempre armazenamos a chave camelCased
				dataUser.set( this, chave, valor );
			} );
		}, nulo, valor, argumentos.length > 1, nulo, verdadeiro );
	},

	removeData: função(chave) {
		retornar this.each( função() {
			dataUser.remove( this, chave );
		} );
	}
} );


jQuery.extend( {
	fila: função(elem, tipo, dados) {
		var fila;

		se (elemento) {
			tipo = ( tipo || "fx" ) + "fila";
			fila = dataPriv.get( elem, tipo );

			// Acelere a dequeue saindo rapidamente se for apenas uma consulta
			se (dados) {
				se ( !fila || Array.isArray( dados ) ) {
					fila = dataPriv.access( elem, tipo, jQuery.makeArray( dados ) );
				} outro {
					fila.push(dados);
				}
			}
			fila de retorno || [];
		}
	},

	dequeue: função(elem, tipo) {
		tipo = tipo || "fx";

		var queue = jQuery.queue( elem, tipo ),
			startLength = comprimento.fila,
			fn = fila.shift(),
			ganchos = jQuery._queueHooks(elem, tipo),
			próximo = função() {
				jQuery.dequeue(elem, tipo);
			};

		// Se a fila fx for retirada da fila, sempre remova o progress sentinela
		se (fn === "em andamento") {
			fn = fila.shift();
			startLength--;
		}

		se (fn) {

			// Adicione uma sentinela de progresso para evitar que a fila fx seja
			// automaticamente desenfileirado
			se (tipo === "fx") {
				queue.unshift( "em andamento" );
			}

			// Limpa a última função de parada da fila
			excluir hooks.stop;
			fn.call(elem, próximo, ganchos);
		}

		se ( !startLength && ganchos ) {
			ganchos.vazio.fogo();
		}
	},

	// Não público - gera um objeto queueHooks ou retorna o atual
	_queueHooks: função(elemento, tipo) {
		var chave = tipo + "queueHooks";
		retornar dataPriv.get(elem, chave) || dataPriv.access(elem, chave, {
			vazio: jQuery.Callbacks( "uma vez memória" ).add( function() {
				dataPriv.remove( elem, [ tipo + "fila", chave ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	fila: função(tipo, dados) {
		var setter = 2;

		se ( tipo de tipo !== "string" ) {
			dados = tipo;
			tipo = "fx";
			setter--;
		}

		se (argumentos.length < setter) {
			retornar jQuery.queue( this[ 0 ], tipo );
		}

		retornar dados === indefinido?
			esse :
			isto.cada( função() {
				var queue = jQuery.queue( this, tipo, dados );

				// Garanta um gancho para esta fila
				jQuery._queueHooks(este, tipo);

				se (tipo === "fx" && fila[ 0 ] !== "em andamento") {
					jQuery.dequeue(este, tipo);
				}
			} );
	},
	dequeue: função(tipo) {
		retornar this.each( função() {
			jQuery.dequeue(este, tipo);
		} );
	},
	clearQueue: função(tipo) {
		retornar this.queue( tipo || "fx", [] );
	},

	// Obter uma promessa resolvida quando filas de um determinado tipo
	// são esvaziados (fx é o tipo padrão)
	promessa: função(tipo, obj) {
		var tmp,
			contagem = 1,
			adiar = jQuery.Deferred(),
			elementos = isto,
			i = this.length,
			resolver = função() {
				se ( !( --contagem ) ) {
					defer.resolveWith(elementos, [elementos]);
				}
			};

		se ( tipo de tipo !== "string" ) {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		enquanto (i--) {
			tmp = dataPriv.get( elementos [ i ], tipo + "queueHooks" );
			se (tmp && tmp.empty) {
				contar++;
				tmp.empty.add(resolver);
			}
		}
		resolver();
		retornar defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).fonte;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = [ "Topo", "Direita", "Inferior", "Esquerda" ];

var documentElement = document.documentElement;



	var isAttached = função(elem) {
			retornar jQuery.contains(elem.ownerDocument, elem);
		},
		composto = { composto: verdadeiro };

	// Suporte: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 apenas
	// Verifique o anexo através dos limites do DOM de sombra quando possível (gh-3504)
	// Suporte: somente iOS 10.0-10.2
	// As primeiras versões do iOS 10 suportam `attachShadow`, mas não `getRootNode`,
	// levando a erros. Precisamos verificar `getRootNode`.
	if (documentElement.getRootNode) {
		isAttached = função(elem) {
			retornar jQuery.contains(elem.ownerDocument, elem) ||
				elem.getRootNode(composto) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = função(elem, el) {

		// isHiddenWithinTree pode ser chamado pela função jQuery#filter;
		// nesse caso, o elemento será o segundo argumento
		elem = el || elem;

		// O estilo inline supera tudo
		retornar elem.style.display === "nenhum" ||
			elem.style.display === "" &&

			// Caso contrário, verifique o estilo computado
			// Suporte: Firefox <=43 - 45
			// Elementos desconectados podem ter display computado: none, então primeiro confirme se elem é
			// no documento.
			isAttached(elemento) &&

			jQuery.css( elem, "display" ) === "nenhum";
	};



função adjustCSS(elem, prop, valueParts, tween) {
	var ajustado, escala,
		maxIterações = 20,
		valorAtual = interpolação?
			função() {
				retornar tween.cur();
			} :
			função() {
				retornar jQuery.css(elem, prop, "" );
			},
		inicial = valorAtual(),
		unidade = valorPartes && valorPartes[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// O cálculo do valor inicial é necessário para possíveis incompatibilidades de unidades
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unidade !== "px" && +inicial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	se ( initialInUnit && initialInUnit[ 3 ] !== unidade ) {

		// Suporte: Firefox <=54
		// Reduza pela metade o valor alvo da iteração para evitar interferência de limites superiores de CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades de confiança relatadas por jQuery.css
		unidade = unidade || initialInUnit[ 3 ];

		// Aproximação iterativa de um ponto de partida diferente de zero
		inicialInUnit = +inicial || 1;

		enquanto ( maxIterações-- ) {

			// Avaliar e atualizar nosso melhor palpite (duplicando palpites que zeram).
			// Terminar se a escala for igual ou superior a 1 (tornando o produto antigo*novo não positivo).
			jQuery.style( elem, prop, initialInUnit + unidade );
			se ( ( 1 - escala ) * ( 1 - ( escala = valorAtual() / inicial || 0,5 ) ) <= 0 ) {
				maxIterações = 0;
			}
			initialInUnit = initialInUnit / escala;

		}

		inicialInUnit = inicialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unidade );

		// Certifique-se de atualizar as propriedades do tween mais tarde
		PartesValor = PartesValor || [];
	}

	se (valorPartes) {
		inicialInUnit = +inicialInUnit || +inicial || 0;

		// Aplicar deslocamento relativo (+=/-=) se especificado
		ajustado = valorPartes[ 1 ] ?
			inicialInUnit + ( partes_do_valor [ 1 ] + 1 ) * partes_do_valor [ 2 ] :
			+valorPartes[ 2 ];
		se (interpolação) {
			tween.unit = unidade;
			tween.start = inicialNaUnidade;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var defaultDisplayMap = {};

função getDefaultDisplay(elem) {
	temperatura variável,
		doc = elem.ownerDocument,
		nomedono = elem.nomedono,
		display = defaultDisplayMap[ nome do nó ];

	se (exibir) {
		retornar exibição;
	}

	temp = doc.body.appendChild( doc.createElement( nome do nó ) );
	exibição = jQuery.css( temp, "exibição" );

	temp.parentNode.removeChild( temp );

	se ( exibir === "nenhum") {
		exibir = "bloco";
	}
	defaultDisplayMap[ nome do nó ] = exibição;

	retornar exibição;
}

função showHide(elementos, mostrar) {
	var display, elem,
		valores = [],
		índice = 0,
		comprimento = elementos.comprimento;

	// Determina novo valor de exibição para elementos que precisam mudar
	para ( ; índice < comprimento; índice++ ) {
		elem = elementos[ índice ];
		se ( !elem.estilo ) {
			continuar;
		}

		exibição = elem.estilo.exibição;
		se (mostrar) {

			// Como forçamos a visibilidade sobre elementos ocultos em cascata, uma ação imediata (e lenta)
			// a verificação é necessária neste primeiro loop, a menos que tenhamos um valor de exibição não vazio (ou
			// inline ou prestes a ser restaurado)
			se ( exibir === "nenhum") {
				valores[ índice ] = dataPriv.get( elem, "display" ) || nulo;
				se ( !valores[ índice ] ) {
					elem.style.display = "";
				}
			}
			se (elem.style.display === "" && isHiddenWithinTree(elem)) {
				valores[ índice ] = getDefaultDisplay( elem );
			}
		} outro {
			se ( exibir !== "nenhum") {
				valores[ índice ] = "nenhum";

				// Lembre-se do que estamos sobrescrevendo
				dataPriv.set(elem, "exibir", exibir);
			}
		}
	}

	// Defina a exibição dos elementos em um segundo loop para evitar refluxo constante
	para (índice = 0; índice < comprimento; índice++) {
		se ( valores [ índice ] ! = nulo ) {
			elementos[ índice ].estilo.display = valores[ índice ];
		}
	}

	retornar elementos;
}

jQuery.fn.extend( {
	mostrar: função() {
		retornar showHide(isto, verdadeiro);
	},
	ocultar: função() {
		retornar showHide(este);
	},
	alternar: função(estado) {
		se (tipo de estado === "booleano") {
			retornar estado ? this.show() : this.hide();
		}

		retornar this.each( função() {
			se (isHiddenWithinTree(este)) {
				jQuery(este).mostrar();
			} outro {
				jQuery( isto ).ocultar();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( função() {
	var fragmento = document.createDocumentFragment(),
		div = fragmento.appendChild(documento.createElement( "div" ) ),
		entrada = document.createElement( "entrada" );

	// Suporte: somente Android 4.0 - 4.3
	// Verificar estado perdido se o nome estiver definido (trac-11217)
	// Suporte: Windows Web Apps (WWA)
	// `name` e `type` devem usar .setAttribute para WWA (trac-14901)
	input.setAttribute( "tipo", "rádio" );
	input.setAttribute( "verificado", "verificado" );
	input.setAttribute( "nome", "t" );

	div.appendChild(entrada);

	// Suporte: somente Android <=4.1
	// O WebKit mais antigo não clona o estado verificado corretamente em fragmentos
	suporte.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

	// Suporte: somente IE <=11
	// Certifique-se de que o textarea (e a caixa de seleção) defaultValue esteja clonado corretamente
	div.innerHTML = "<textarea>x</textarea>";
	suporte.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Suporte: IE <=9 apenas
	// IE <=9 substitui as tags <option> por seus conteúdos quando inseridas fora de
	// o elemento selecionado.
	div.innerHTML = "<opção></opção>";
	suporte.opção = !!div.lastChild;
} )();


// Temos que fechar essas tags para oferecer suporte a XHTML (trac-13200)
var wrapMap = {

	// Os analisadores XHTML não inserem elementos magicamente no
	// da mesma forma que os analisadores de sopa de tags fazem. Então não podemos encurtar
	// isso omitindo <tbody> ou outros elementos necessários.
	cabeçalho: [ 1, "<tabela>", "</tabela>" ],
	col: [ 2, "<tabela><colgroup>", "</colgroup></tabela>" ],
	tr: [ 2, "<tabela><tbody>", "</tbody></tabela>" ],
	td: [ 3, "<tabela><tbody><tr>", "</tr></tbody></tabela>" ],

	_padrão: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Suporte: IE <=9 apenas
se ( !suporte.opção ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<selecionar múltiplo='múltiplo'>", "</selecionar>" ];
}


função getAll(contexto, tag) {

	// Suporte: IE <=9 - 11 apenas
	// Use typeof para evitar invocação de método de argumento zero em objetos host (trac-15151)
	var ret;

	se (tipo de contexto.getElementsByTagName !== "indefinido") {
		ret = contexto.getElementsByTagName( tag || "*" );

	} senão se ( tipo de contexto.querySelectorAll !== "indefinido" ) {
		ret = contexto.querySelectorAll( tag || "*" );

	} outro {
		ret = [];
	}

	se (tag === indefinido || tag && nodeName( contexto, tag ) ) {
		retornar jQuery.merge( [ contexto ], ret );
	}

	retornar ret;
}


// Marcar scripts como já tendo sido avaliados
função setGlobalEval(elementos, refElementos) {
	var i = 0,
		l = elems.length;

	para ( ; i < l; i++ ) {
		dataPriv.set(
			elementos[ i ],
			"avaliação global",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

função buildFragment(elems, contexto, scripts, seleção, ignorado) {
	var elem, tmp, tag, wrap, anexado, j,
		fragmento = contexto.createDocumentFragment(),
		nós = [],
		eu = 0,
		l = elems.length;

	para ( ; i < l; i++ ) {
		elem = elems[ i ];

		se (elem || elem === 0 ) {

			// Adicionar nós diretamente
			se ( toType( elem ) === "objeto" ) {

				// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
				// push.apply(_, arraylike) é lançado no WebKit antigo
				jQuery.merge( nós, elem.nodeType ? [ elem ] : elem );

			// Converte um nó não HTML em um nó de texto
			} senão se ( !rhtml.test( elem ) ) {
				nós.push( contexto.createTextNode( elem ) );

			// Converte html em nós DOM
			} outro {
				tmp = tmp || fragmento.appendChild( contexto.createElement( "div" ) );

				// Desserializar uma representação padrão
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ etiqueta ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Desça pelos wrappers até o conteúdo correto
				j = envolver[ 0 ];
				enquanto ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
				// push.apply(_, arraylike) é lançado no WebKit antigo
				jQuery.merge( nós, tmp.childNodes );

				// Lembre-se do contêiner de nível superior
				tmp = fragmento.primeiroFilho;

				// Garanta que os nós criados sejam órfãos (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remover wrapper do fragmento
	fragment.textContent = "";

	eu = 0;
	enquanto ( ( elem = nós [ i++ ] ) ) {

		// Ignorar elementos já existentes na coleção de contexto (trac-4087)
		se (seleção && jQuery.inArray(elem, seleção) > -1) {
			se (ignorado) {
				ignorado.push(elem);
			}
			continuar;
		}

		anexado = isAttached( elem );

		// Acrescentar ao fragmento
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preservar histórico de avaliação de script
		se ( anexado ) {
			definirEvalGlobal( tmp );
		}

		// Capturar executáveis
		se (scripts) {
			j = 0;
			enquanto ( ( elem = tmp[ j++ ] ) ) {
				se ( rscriptType.test( elem.type || "" ) ) {
					scripts.push(elem);
				}
			}
		}
	}

	fragmento de retorno;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

função returnTrue() {
	retornar verdadeiro;
}

função returnFalse() {
	retornar falso;
}

função em(elem, tipos, seletor, dados, fn, um) {
	var origFn, tipo;

	// Os tipos podem ser um mapa de tipos/manipuladores
	se ( typeof tipos === "objeto") {

		// (tipos-Objeto, seletor, dados)
		se (seletor typeof !== "string") {

			// ( tipos-Objeto, dados )
			dados = dados || seletor;
			seletor = indefinido;
		}
		para (digite em tipos) {
			on(elem, tipo, seletor, dados, tipos[ tipo ], um );
		}
		retornar elemento;
	}

	se (dados == nulo && fn == nulo) {

		// ( tipos, fn )
		fn = seletor;
		dados = seletor = indefinido;
	} senão se ( fn == nulo ) {
		se (seletor typeof === "string") {

			// (tipos, seletor, fn)
			fn = dados;
			dados = indefinido;
		} outro {

			// (tipos, dados, fn)
			fn = dados;
			dados = seletor;
			seletor = indefinido;
		}
	}
	se (fn === falso) {
		fn = returnFalse;
	} senão se ( !fn ) {
		retornar elemento;
	}

	se ( um === 1 ) {
		origFn = fn;
		fn = função(evento) {

			// Pode usar um conjunto vazio, já que o evento contém a informação
			jQuery().off(evento);
			retornar origFn.apply( this, argumentos );
		};

		// Use o mesmo guid para que o chamador possa remover usando origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	retornar elem.each( função() {
		jQuery.event.add( this, tipos, fn, dados, seletor );
	} );
}

/*
 * Funções auxiliares para gerenciar eventos — não fazem parte da interface pública.
 * Parabéns à biblioteca addEvent de Dean Edwards por muitas das ideias.
 */
jQuery.evento = {

	global: {},

	adicionar: função(elem, tipos, manipulador, dados, seletor) {

		var handleObjIn, eventHandle, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.get(elem);

		// Anexar eventos somente a objetos que aceitam dados
		se ( !acceptData(elem ) ) {
			retornar;
		}

		// O chamador pode passar um objeto de dados personalizados no lugar do manipulador
		se ( manipulador.manipulador ) {
			handleObjIn = manipulador;
			manipulador = handleObjIn.handler;
			seletor = handleObjIn.selector;
		}

		// Garanta que seletores inválidos gerem exceções no momento da anexação
		// Avaliar em relação ao documentElement caso elem seja um nó não-elemento (por exemplo, documento)
		se (seletor) {
			jQuery.find.matchesSelector(documentElement, seletor);
		}

		// Certifique-se de que o manipulador tenha um ID exclusivo, usado para encontrá-lo/removê-lo posteriormente
		se ( !manipulador.guid ) {
			manipulador.guid = jQuery.guid++;
		}

		// Inicializa a estrutura de eventos do elemento e o manipulador principal, se este for o primeiro
		se ( !( eventos = elemData.events ) ) {
			eventos = elemData.events = Object.create( nulo l );
		}
		se ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = função( e ) {

				// Descarte o segundo evento de um jQuery.event.trigger() e
				// quando um evento é chamado após uma página ter sido descarregada
				retornar tipo de jQuery !== "indefinido" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, argumentos ) : indefinido;
			};
		}

		// Lidar com vários eventos separados por um espaço
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [ "" ];
		t = tipos.comprimento;
		enquanto ( t-- ) {
			tmp = rtypenamespace.exec( tipos[ t ] ) || [];
			tipo = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// *Deve* haver um tipo, sem anexar manipuladores somente de namespace
			se (!tipo) {
				continuar;
			}

			// Se o evento mudar seu tipo, use os manipuladores de eventos especiais para o tipo alterado
			especial = jQuery.event.special[ tipo ] || {};

			// Se o seletor for definido, determine o tipo de API de evento especial, caso contrário, o tipo fornecido
			tipo = ( seletor ? especial.delegateType : especial.bindType ) || tipo;

			// Atualização especial com base no tipo de redefinição recente
			especial = jQuery.event.special[ tipo ] || {};

			// handleObj é passado para todos os manipuladores de eventos
			handleObj = jQuery.extend( {
				tipo: tipo,
				Tipo de origem: Tipo de origem,
				dados: dados,
				manipulador: manipulador,
				guid: manipulador.guid,
				seletor: seletor,
				needsContext: seletor && jQuery.expr.match.needsContext.test( seletor ),
				espaço para nome: namespaces.join( "." )
			}, handleObjIn );

			// Inicia a fila do manipulador de eventos se formos os primeiros
			se ( !( manipuladores = eventos[ tipo ] ) ) {
				manipuladores = eventos[ tipo ] = [];
				manipuladores.delegateCount = 0;

				// Use addEventListener somente se o manipulador de eventos especiais retornar falso
				se ( !especial.setup ||
					special.setup.call(elem, dados, namespaces, eventHandle) === false) {

					se (elem.addEventListener) {
						elem.addEventListener( tipo, eventHandle );
					}
				}
			}

			se (especial.add) {
				especial.add.call(elem, handleObj);

				se ( !handleObj.handler.guid ) {
					handleObj.handler.guid = manipulador.guid;
				}
			}

			// Adicionar à lista de manipuladores do elemento, delegados na frente
			se (seletor) {
				manipuladores.splice( manipuladores.delegateCount++, 0, handleObj );
			} outro {
				manipuladores.push( handleObj );
			}

			// Mantenha o controle de quais eventos já foram usados, para otimização de eventos
			jQuery.event.global[ tipo ] = verdadeiro;
		}

	},

	// Desanexar um evento ou conjunto de eventos de um elemento
	remover: função(elem, tipos, manipulador, seletor, mappedTypes) {

		var j, origCount, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

		se ( !elemData || !( eventos = elemData.events ) ) {
			retornar;
		}

		// Uma vez para cada tipo.namespace em tipos; o tipo pode ser omitido
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [ "" ];
		t = tipos.comprimento;
		enquanto ( t-- ) {
			tmp = rtypenamespace.exec( tipos[ t ] ) || [];
			tipo = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Desvincular todos os eventos (neste namespace, se fornecido) para o elemento
			se (!tipo) {
				para (digite em eventos) {
					jQuery.event.remove( elem, tipo + tipos[ t ], manipulador, seletor, verdadeiro );
				}
				continuar;
			}

			especial = jQuery.event.special[ tipo ] || {};
			tipo = ( seletor ? especial.delegateType : especial.bindType ) || tipo;
			manipuladores = eventos[ tipo ] || [];
			tmp = tmp[ 2 ] &&
				novo RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remover eventos correspondentes
			origCount = j = manipuladores.length;
			enquanto ( j-- ) {
				handleObj = manipuladores[ j ];

				se ( ( mappedTypes || origType === handleObj.origType ) &&
					( !manipulador || manipulador.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !seletor || seletor === handleObj.selector ||
						seletor === "**" && handleObj.selector ) ) {
					manipuladores.splice( j, 1 );

					se ( handleObj.selector ) {
						manipuladores.delegateCount--;
					}
					se (especial.remover) {
						especial.remove.call(elem, handleObj);
					}
				}
			}

			// Remover manipulador de eventos genérico se removemos algo e não existirem mais manipuladores
			// (evita potencial de recursão infinita durante a remoção de manipuladores de eventos especiais)
			se ( origCount && !handlers.length ) {
				se ( !especial.teardown ||
					especial.teardown.call(elem, namespaces, elemData.handle) === falso) {

					jQuery.removeEvent( elem, tipo, elemData.handle );
				}

				excluir eventos[ tipo ];
			}
		}

		// Remove os dados e o expando se não forem mais usados
		se ( jQuery.isEmptyObject( eventos ) ) {
			dataPriv.remove( elem, "manipular eventos" );
		}
	},

	despacho: função(nativeEvent) {

		var i, j, ret, correspondente, handleObj, handlerQueue,
			args = novo Array( argumentos.length ),

			// Crie um jQuery.Event gravável a partir do objeto de evento nativo
			evento = jQuery.event.fix(nativeEvent),

			manipuladores = (
				dataPriv.get( this, "eventos" ) || Objeto.create( null )
			)[ tipo.evento ] || [],
			especial = jQuery.event.special[evento.tipo] || {};

		// Use o jQuery.Event corrigido em vez do evento nativo (somente leitura)
		args[ 0 ] = evento;

		para ( i = 1; i < argumentos.length; i++ ) {
			args[ i ] = argumentos[ i ];
		}

		evento.delegateTarget = isto;

		// Chame o gancho preDispatch para o tipo mapeado e deixe-o escapar se desejar
		se (especial.preDispatch && especial.preDispatch.call(este, evento) === falso) {
			retornar;
		}

		// Determinar manipuladores
		handlerQueue = jQuery.event.handlers.call( this, evento, manipuladores );

		// Execute os delegados primeiro; eles podem querer parar a propagação abaixo de nós
		eu = 0;
		enquanto ( (correspondido = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			evento.currentTarget = correspondido.elem;

			j = 0;
			enquanto ((handleObj = matched.handlers[ j++ ]) &&
				!event.isImmediatePropagationStopped() ) {

				// Se o evento for namespaced, cada manipulador será invocado somente se for
				// especialmente universal ou seus namespaces são um superconjunto dos eventos.
				se ( !event.rnamespace || handleObj.namespace === falso ||
					evento.rnamespace.teste( handleObj.namespace ) ) {

					evento.handleObj = handleObj;
					evento.dados = handleObj.dados;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply(correspondido.elem, args );

					se ( ret !== indefinido ) {
						se ( (evento.resultado = ret) === falso) {
							evento.preventDefault();
							evento.stopPropagation();
						}
					}
				}
			}
		}

		// Chame o gancho postDispatch para o tipo mapeado
		se (especial.postDispatch) {
			especial.postDispatch.call(este, evento);
		}

		retornar evento.resultado;
	},

	manipuladores: função(evento, manipuladores) {
		var i, handleObj, sel, manipuladores correspondentes, seletores correspondentes,
			handlerQueue = [],
			delegateCount = manipuladores.delegateCount,
			cur = evento.alvo;

		// Encontre manipuladores delegados
		se (delegadoCount &&

			// Suporte: IE <=9
			// Árvores de instância SVG <use> de buraco negro (trac-13180)
			cur.nodeType &&

			// Suporte: Firefox <=42
			// Suprimir cliques que violam especificações indicando um botão de ponteiro não primário (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Suporte: somente IE 11
			// ...mas não os "cliques" das teclas de seta das entradas de rádio, que podem ter `botão` -1 (gh-2343)
			!( tipo de evento === "clique" && botão de evento >= 1 ) ) {

			para ( ; cur !== isto; cur = cur.parentNode || isto ) {

				// Não verificar não-elementos (trac-13208)
				// Não processar cliques em elementos desabilitados (trac-6911, trac-8165, trac-11382, trac-11764)
				se ( cur.nodeType === 1 && !( event.type === "clique" && cur.disabled === true ) ) {
					manipuladores correspondentes = [];
					Seletores correspondentes = {};
					para ( i = 0; i < delegateCount; i++ ) {
						handleObj = manipuladores[ i ];

						// Não entre em conflito com propriedades Object.prototype (trac-13203)
						sel = handleObj.selector + " ";

						se (matchedSelectors[ sel ] === indefinido ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery(sel, isto).index(cur) > -1 :
								jQuery.find(sel, this, nulo, [cur]).length;
						}
						se (matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					se (matchedHandlers.length) {
						handlerQueue.push( { elem: cur, manipuladores: matchedHandlers } );
					}
				}
			}
		}

		// Adicione os manipuladores restantes (diretamente vinculados)
		cur = isto;
		se (delegateCount < manipuladores.length) {
			handlerQueue.push( { elem: cur, manipuladores: manipuladores.slice( delegateCount ) } );
		}

		retornar handlerQueue;
	},

	addProp: function(nome, gancho) {
		Objeto.defineProperty( jQuery.Event.prototype, nome, {
			enumerável: verdadeiro,
			configurável: verdadeiro,

			obter: isFunction(gancho) ?
				função() {
					se (este.originalEvent) {
						retornar gancho( this.originalEvent );
					}
				} :
				função() {
					se (este.originalEvent) {
						retornar this.originalEvent[ nome ];
					}
				},

			conjunto: função(valor) {
				Object.defineProperty( este, nome, {
					enumerável: verdadeiro,
					configurável: verdadeiro,
					gravável: verdadeiro,
					valor: valor
				} );
			}
		} );
	},

	correção: função(originalEvent) {
		retornar originalEvent[ jQuery.expando ] ?
			originalEvento:
			novo jQuery.Event(originalEvent);
	},

	especial: {
		carregar: {

			// Evita que eventos image.load disparados sejam exibidos em window.load
			noBubble: verdadeiro
		},
		clique: {

			// Utilize o evento nativo para garantir o estado correto para entradas verificáveis
			configuração: função(dados) {

				// Para compressibilidade mútua com _default, substitua o acesso `this` por uma var local.
				// `|| data` é um código morto que serve apenas para preservar a variável por meio de minificação.
				var el = este || dados;

				// Reivindicar o primeiro manipulador
				se (rcheckableType.test(el.type) &&
					el.click && nodeName( el, "entrada" ) ) {

					//dataPriv.set(el, "clique", ... )
					alavancagemNativa( el, "clique", verdadeiro );
				}

				// Retorna falso para permitir o processamento normal no chamador
				retornar falso;
			},
			gatilho: função(dados) {

				// Para compressibilidade mútua com _default, substitua o acesso `this` por uma var local.
				// `|| data` é um código morto que serve apenas para preservar a variável por meio de minificação.
				var el = este || dados;

				// Forçar configuração antes de disparar um clique
				se (rcheckableType.test(el.type) &&
					el.click && nodeName( el, "entrada" ) ) {

					alavancagemNativa( el, "clique" );
				}

				// Retorna não falso para permitir a propagação normal do caminho do evento
				retornar verdadeiro;
			},

			// Para consistência entre navegadores, suprima .click() nativo em links
			// Também evite isso se estivermos atualmente dentro de uma pilha de eventos nativos alavancada
			_default: função(evento) {
				var alvo = evento.alvo;
				retornar rcheckableType.test( alvo. tipo ) &&
					target.click && nodeName( alvo, "entrada" ) &&
					dataPriv.get( alvo, "clique" ) ||
					nodeName(alvo, "a");
			}
		},

		antes de descarregar: {
			postDispatch: função(evento) {

				// Suporte: Firefox 20+
				// O Firefox não alerta se o campo returnValue não estiver definido.
				se (evento.resultado !== indefinido && evento.originalEvent) {
					evento.originalEvent.returnValue = evento.resultado;
				}
			}
		}
	}
};

// Garanta a presença de um ouvinte de eventos que lide com eventos acionados manualmente
// eventos sintéticos interrompendo o progresso até serem reinvocados em resposta a
// eventos *nativos* que ele dispara diretamente, garantindo que as mudanças de estado tenham
// já ocorreu antes que outros ouvintes sejam invocados.
função alavancagemNativa(el, tipo, isSetup) {

	// A ausência de `isSetup` indica uma chamada de gatilho, que deve forçar a configuração por meio de jQuery.event.add
	se ( !isSetup ) {
		se ( dataPriv.get( el, tipo ) === indefinido ) {
			jQuery.event.add( el, tipo, returnTrue );
		}
		retornar;
	}

	// Registre o controlador como um manipulador universal especial para todos os namespaces de eventos
	dataPriv.set(el, tipo, falso);
	jQuery.event.add( el, tipo, {
		namespace: falso,
		manipulador: função(evento) {
			var resultado,
				salvo = dataPriv.get( this, tipo );

			se ( (evento.isTrigger & 1) && este[tipo]) {

				// Interromper o processamento do evento sintético externo .trigger()ed
				se ( !salvo ) {

					// Armazena argumentos para uso ao manipular o evento nativo interno
					// Sempre haverá pelo menos um argumento (um objeto de evento), então esta matriz
					// não será confundido com um objeto de captura restante.
					salvo = slice.call( argumentos );
					dataPriv.set(este, tipo, salvo);

					// Dispara o evento nativo e captura seu resultado
					este[ tipo ]();
					resultado = dataPriv.get( this, tipo );
					dataPriv.set(este, tipo, falso);

					se ( salvo !== resultado ) {

						// Cancela o evento sintético externo
						evento.stopImmediatePropagation();
						evento.preventDefault();

						retornar resultado;
					}

				// Se este for um evento sintético interno para um evento com um substituto borbulhante
				// (foco ou desfoque), suponha que o substituto já tenha se propagado do gatilho
				// o evento nativo e evitar que isso aconteça novamente aqui.
				// Isso tecnicamente faz com que a ordenação seja errada em relação a `.trigger()` (no qual o
				// o substituto borbulhante se propaga *depois* da base não borbulhante), mas isso parece
				// menos ruim que duplicação.
				} senão se ( ( jQuery.event.special[ tipo ] || {} ).delegateType ) {
					evento.stopPropagation();
				}

			// Se este for um evento nativo disparado acima, tudo está em ordem agora
			// Dispara um evento sintético interno com os argumentos originais
			} senão se ( salvo ) {

				// ...e capturar o resultado
				dataPriv.set( este, tipo, jQuery.event.trigger(
					salvo[ 0 ],
					salvo.slice( 1 ),
					esse
				) );

				// Abortar a manipulação do evento nativo por todos os manipuladores jQuery, permitindo
				// manipuladores nativos no mesmo elemento para executar. No alvo, isso é alcançado
				// parando a propagação imediata apenas no evento jQuery. No entanto,
				// o evento nativo é reembalado por um jQuery em cada nível do
				// propagação, então a única maneira de pará-la para jQuery é pará-la para
				// todos via `stopPropagation()` nativo. Isso não é um problema para
				// foco/desfoque que não borbulha, mas também impede cliques em caixas de seleção
				// e rádios. Aceitamos essa limitação.
				evento.stopPropagation();
				evento.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function(elem, tipo, identificador) {

	// Este "if" é necessário para objetos simples
	se (elem.removeEventListener) {
		elem.removeEventListener(tipo, identificador);
	}
};

jQuery.Event = função(origem, adereços) {

	// Permitir instanciação sem a palavra-chave 'new'
	se ( !( esta instância de jQuery.Event ) ) {
		retornar novo jQuery.Event(origem, props);
	}

	// Objeto de evento
	se (origem && tipo de origem) {
		este.originalEvent = fonte;
		este.tipo = src.tipo;

		// Eventos que aparecem no documento podem ter sido marcados como impedidos
		// por um manipulador mais abaixo na árvore; reflete o valor correto.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === indefinido &&

				// Suporte: somente Android <=2.3
				src.returnValue === falso ?
			retornarVerdadeiro:
			retornarFalso;

		// Criar propriedades de destino
		// Suporte: Safari <=6 - 7 apenas
		// O alvo não deve ser um nó de texto (trac-504, trac-13143)
		este.alvo = (origem.alvo && src.alvo.tipo de nó === 3) ?
			origem.target.parentNode :
			origem.alvo;

		este.alvo atual = src.alvo atual;
		isto.relatedTarget = src.relatedTarget;

	// Tipo de evento
	} outro {
		este.tipo = src;
	}

	// Coloque propriedades fornecidas explicitamente no objeto de evento
	se (adereços) {
		jQuery.extend( isto, adereços );
	}

	// Cria um timestamp se o evento de entrada não tiver um
	this.timeStamp = src && src.timeStamp || Data.agora();

	// Marque como corrigido
	isto[ jQuery.expando ] = verdadeiro;
};

// jQuery.Event é baseado em eventos DOM3 conforme especificado pela ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	construtor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: retornarFalso,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: falso,

	preventDefault: função() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		se ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: função() {
		var e = this.originalEvent;

		this.isPropagationStopped = retornarVerdadeiro;

		se ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: função() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		se ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		isto.stopPropagation();
	}
};

// Inclui todos os adereços de eventos comuns, incluindo adereços específicos de KeyEvent e MouseEvent
jQuery.cada( {
	altKey: verdadeiro,
	bolhas: verdadeiro,
	cancelável: verdadeiro,
	changedTouches: verdadeiro,
	ctrlKey: verdadeiro,
	detalhe: verdadeiro,
	eventPhase: verdadeiro,
	metaKey: verdadeiro,
	páginaX: verdadeiro,
	pageY: verdadeiro,
	shiftKey: verdadeiro,
	visão: verdadeiro,
	"char": verdadeiro,
	código: verdadeiro,
	charCode: verdadeiro,
	chave: verdadeiro,
	keyCode: verdadeiro,
	botão: verdadeiro,
	botões: verdadeiro,
	clienteX: verdadeiro,
	clientY: verdadeiro,
	offsetX: verdadeiro,
	offsetY: verdadeiro,
	pointerId: verdadeiro,
	pointerType: verdadeiro,
	screenX: verdadeiro,
	screenY: verdadeiro,
	targetTouches: verdadeiro,
	toElement: verdadeiro,
	toques: verdadeiro,
	qual: verdadeiro
}, jQuery.event.addProp );

jQuery.each( { foco: "focoentrada", desfoque: "focofora" }, função( tipo, delegateType ) {

	função focusMappedHandler(nativeEvent) {
		se (documento.documentMode) {

			// Suporte: IE 11+
			// Anexe um único manipulador de foco/foco no documento enquanto alguém quiser
			// foco/desfoque. Isso ocorre porque os primeiros são síncronos no IE, enquanto os últimos
			// são assíncronos. Em outros navegadores, todos esses manipuladores são invocados de forma síncrona.

			// `handle` de dados privados já envolveria o evento, mas precisamos
			// para alterar o `tipo` aqui.
			var handle = dataPriv.get(este, "handle" ),
				evento = jQuery.event.fix(nativeEvent);
			event.type = nativeEvent.type === "foco" ? "foco" : "desfoque";
			event.isSimulated = verdadeiro;

			// Primeiro, manipule o foco/desfoque
			manipular(nativeEvent);

			// ...então, lidar com foco/desfoque
			//
			// foco/desfoque não borbulham enquanto foco/desfoque sim; simula o primeiro apenas
			// invocando o manipulador no nível inferior.
			se (evento.alvo === evento.alvoatual) {

				// A parte de configuração chama `leverageNative`, que, por sua vez, chama
				// `jQuery.event.add`, então o identificador do evento já terá sido definido
				// neste ponto.
				manipular(evento);
			}
		} outro {

			// Para navegadores que não sejam IE, anexe um único manipulador de captura no documento
			// enquanto alguém quer focar/desfocar.
			jQuery.event.simulate(delegateType, nativeEvent.target,
				jQuery.event.fix(nativeEvent));
		}
	}

	jQuery.event.special[ tipo ] = {

		// Utilize o evento nativo se possível para que a sequência de desfoque/foco fique correta
		configuração: função() {

			var anexa;

			// Reivindicar o primeiro manipulador
			// dataPriv.set( isto, "foco", ... )
			// dataPriv.set( this, "desfoque", ... )
			alavancagemNativa(este, tipo, verdadeiro);

			se (documento.documentMode) {

				// Suporte: IE 9 - 11+
				// Usamos o mesmo manipulador nativo para focusin e focus (e focusout e blur)
				// então precisamos coordenar as partes de configuração e desmontagem entre esses eventos.
				// Use `delegateType` como chave, pois `type` já está sendo usado por `leverageNative`.
				anexa = dataPriv.get( this, delegateType );
				se (! anexa ) {
					this.addEventListener(delegateType, focusMappedHandler);
				}
				dataPriv.set( this, delegateType, ( anexa || 0 ) + 1 );
			} outro {

				// Retorna falso para permitir o processamento normal no chamador
				retornar falso;
			}
		},
		gatilho: função() {

			// Forçar configuração antes do gatilho
			alavancagemNativa(este, tipo);

			// Retorna não falso para permitir a propagação normal do caminho do evento
			retornar verdadeiro;
		},

		desmontagem: função() {
			var anexa;

			se (documento.documentMode) {
				anexa = dataPriv.get( this, delegateType ) - 1;
				se (! anexa ) {
					this.removeEventListener(delegateType, focusMappedHandler);
					dataPriv.remove( this, delegateType );
				} outro {
					dataPriv.set( this, delegateType, anexa );
				}
			} outro {

				// Retorna falso para indicar que a desmontagem padrão deve ser aplicada
				retornar falso;
			}
		},

		// Suprimir foco nativo ou desfoque se estivermos dentro
		// uma pilha de eventos nativos alavancada
		_default: função(evento) {
			retornar dataPriv.get(evento.alvo, tipo);
		},

		delegateType: Tipo de delegado
	};

	// Suporte: Firefox <=44
	// O Firefox não tem eventos focus(in | out)
	// Ticket relacionado - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Suporte: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// eventos focus(in | out) disparam após eventos focus e blur,
	// que é uma violação de especificação - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Ticket relacionado - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Suporte: IE 9 - 11+
	// Para preservar a ordem relativa dos eventos focusin/focus & focusout/blur garantida na ramificação 3.x,
	// anexa um único manipulador para ambos os eventos no IE.
	jQuery.event.special[delegateType] = {
		configuração: função() {

			// Manipulador: nós regulares (via `this.ownerDocument`), janela
			// (via `this.document`) & documento (via `this`).
			var doc = este.ownerDocument || este.documento || este,
				dataHolder = document.documentMode ? isto : doc,
				anexa = dataPriv.get(dataHolder, delegadoType);

			// Suporte: IE 9 - 11+
			// Usamos o mesmo manipulador nativo para focusin e focus (e focusout e blur)
			// então precisamos coordenar as partes de configuração e desmontagem entre esses eventos.
			// Use `delegateType` como chave, pois `type` já está sendo usado por `leverageNative`.
			se (! anexa ) {
				se (documento.documentMode) {
					this.addEventListener(delegateType, focusMappedHandler);
				} outro {
					doc.addEventListener(tipo, focusMappedHandler, verdadeiro);
				}
			}
			dataPriv.set(dataHolder, delegadoType, (anexa || 0) + 1);
		},
		desmontagem: função() {
			var doc = este.ownerDocument || este.documento || este,
				dataHolder = document.documentMode ? isto : doc,
				anexa = dataPriv.get(dataHolder, delegadoType) - 1;

			se (! anexa ) {
				se (documento.documentMode) {
					this.removeEventListener(delegateType, focusMappedHandler);
				} outro {
					doc.removeEventListener(tipo, focusMappedHandler, verdadeiro);
				}
				dataPriv.remove(dataHolder, delegadoType);
			} outro {
				dataPriv.set(dataHolder, delegadoType, anexa);
			}
		}
	};
} );

// Crie eventos mouseenter/leave usando mouseover/out e verificações de tempo de evento
// para que a delegação de eventos funcione no jQuery.
// Faça o mesmo para pointerenter/pointerleave e pointerover/pointerout
//
// Suporte: somente Safari 7
// O Safari envia o mouseenter com muita frequência; veja:
//https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// para a descrição do bug (ele também existia em versões mais antigas do Chrome).
jQuery.cada( {
	mouseenter: "passar o mouse",
	mouseleave: "mouseout",
	pointerenter: "ponteirosobre",
	pointerleave: "apontador para fora"
}, função(orig, correção) {
	jQuery.event.special[ origem ] = {
		delegateType: correção,
		bindType: correção,

		handle: função(evento) {
			var ret,
				alvo = isto,
				relacionado = evento.relatedTarget,
				handleObj = evento.handleObj;

			// Para mouseenter/leave, chame o manipulador se related estiver fora do alvo.
			// NB: Nenhum relatedTarget se o mouse saiu/entrou na janela do navegador
			se ( !relacionado || (relacionado !== alvo && !jQuery.contains( alvo, relacionado ) ) ) {
				evento.tipo = handleObj.origType;
				ret = handleObj.handler.apply( this, argumentos );
				tipo de evento = correção;
			}
			retornar ret;
		}
	};
} );

jQuery.fn.extend( {

	em: função(tipos, seletor, dados, fn) {
		retornar em(isto, tipos, seletor, dados, fn);
	},
	um: função(tipos, seletor, dados, fn) {
		retornar em(este, tipos, seletor, dados, fn, 1);
	},
	off: função(tipos, seletor, fn) {
		var handleObj, tipo;
		se ( tipos && tipos.preventDefault && tipos.handleObj ) {

			// (evento) despachou jQuery.Event
			handleObj = tipos.handleObj;
			jQuery( tipos.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.seletor,
				handleObj.manipulador
			);
			devolva isto;
		}
		se ( typeof tipos === "objeto") {

			// ( tipos-objeto [, seletor] )
			para (digite em tipos) {
				this.off(tipo, seletor, tipos[tipo]);
			}
			devolva isto;
		}
		se ( seletor === falso || seletor typeof === "função") {

			// ( tipos [, fn] )
			fn = seletor;
			seletor = indefinido;
		}
		se (fn === falso) {
			fn = returnFalse;
		}
		retornar this.each( função() {
			jQuery.event.remove( this, tipos, fn, seletor );
		} );
	}
} );


var

	// Suporte: IE <=10 - 11, Edge 12 - 13 apenas
	// No IE/Edge, usar grupos regex aqui causa lentidão severa.
	// Consulte https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<estilo|<link/i,

	// checked="checked" ou verificado
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefira um tbody em vez de sua tabela pai para conter novas linhas
função manipulaçãoTarget(elem, content) {
	se ( nodeName( elem, "tabela") &&
		nodeName( conteúdo.nodeType !== 11 ? conteúdo : conteúdo.firstChild, "tr" ) ) {

		retornar jQuery(elem).children( "tbody" )[ 0 ] || elem;
	}

	retornar elemento;
}

// Substituir/restaurar o atributo type dos elementos do script para manipulação segura do DOM
função disableScript(elem) {
	elem.type = ( elem.getAttribute( "tipo" ) !== null ) + "/" + elem.type;
	retornar elemento;
}
função restoreScript(elem) {
	se ( ( elem.type || "" ).slice( 0, 5 ) === "verdadeiro/" ) {
		elem.tipo = elem.tipo.fatia( 5 );
	} outro {
		elem.removeAttribute( "tipo" );
	}

	retornar elemento;
}

função cloneCopyEvent(origem, destino) {
	var i, l, tipo, pdataOld, udataOld, udataCur, eventos;

	se (dest.nodeType !== 1 ) {
		retornar;
	}

	// 1. Copie dados privados: eventos, manipuladores, etc.
	se ( dataPriv.hasData( fonte ) ) {
		pdataOld = dataPriv.get(src);
		eventos = pdataOld.events;

		se (eventos) {
			dataPriv.remove( dest, "manipular eventos" );

			para (digite em eventos) {
				para ( i = 0, l = eventos[ tipo ].length; i < l; i++ ) {
					jQuery.event.add( dest, tipo, eventos[ tipo ][ i ] );
				}
			}
		}
	}

	// 2. Copiar dados do usuário
	se (dataUser.hasData(origem)) {
		udataOld = dataUser.access( fonte );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set(dest, udataCur);
	}
}

// Corrigir bugs do IE, ver testes de suporte
função fixInput(origem, destino) {
	var nodeName = dest.nodeName.toLowerCase();

	// Falha ao persistir o estado marcado de uma caixa de seleção ou botão de opção clonado.
	se ( nome do nó === "entrada" && rcheckableType.test( fonte. tipo ) ) {
		dest.checked = origem.checked;

	// Falha ao retornar a opção selecionada ao estado selecionado padrão ao clonar opções
	} senão se ( nome do nó === "entrada" || nome do nó === "área de texto" ) {
		dest.defaultValue = origem.defaultValue;
	}
}

função domManip(coleção, argumentos, retorno de chamada, ignorado) {

	// Achatar quaisquer matrizes aninhadas
	args = plano( args );

	var fragment, primeiro, scripts, hasScripts, nó, doc,
		eu = 0,
		l = coleção.comprimento,
		iNoClone = l - 1,
		valor = args[ 0 ],
		valueIsFunction = isFunction( valor );

	// Não podemos clonar fragmentos Node que contenham checked, no WebKit
	se ( valorÉFunção ||
			( l > 1 && tipo de valor === "string" &&
				!support.checkClone && rchecked.test( valor ) ) ) {
		retornar coleção.cada(função(índice) {
			var self = coleção.eq(índice);
			se ( valorÉFunção ) {
				args[ 0 ] = valor.call( isto, índice, self.html() );
			}
			domManip(self, args, retorno de chamada, ignorado);
		} );
	}

	se ( l ) {
		fragmento = buildFragment(args, collection[ 0 ].ownerDocument, false, collection, ignorado );
		primeiro = fragmento.firstChild;

		se ( fragmento.childNodes.length === 1 ) {
			fragmento = primeiro;
		}

		// Exige novo conteúdo ou interesse em elementos ignorados para invocar o retorno de chamada
		se (primeiro || ignorado) {
			scripts = jQuery.map( getAll( fragmento, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use o fragmento original para o último item
			// em vez do primeiro porque pode acabar
			// sendo esvaziado incorretamente em certas situações (trac-8070).
			para ( ; i < l; i++ ) {
				nó = fragmento;

				se ( eu !== iNoClone ) {
					nó = jQuery.clone( nó, verdadeiro, verdadeiro );

					// Mantenha referências a scripts clonados para restauração posterior
					se (temScripts) {

						// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
						// push.apply(_, arraylike) é lançado no WebKit antigo
						jQuery.merge( scripts, getAll( nó, "script" ) );
					}
				}

				callback.call( coleção[ i ], nó, i );
			}

			se (temScripts) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reativar scripts
				jQuery.map( scripts, restoreScript );

				// Avaliar scripts executáveis ​​na primeira inserção de documento
				para ( i = 0; i < hasScripts; i++ ) {
					nó = scripts[ i ];
					se ( rscriptType.test( nó.type || "" ) &&
						!dataPriv.access( nó, "globalEval" ) &&
						jQuery.contains(doc, nó)) {

						se (node.src && (node.type || "" ).toLowerCase() !== "módulo" ) {

							// Dependência AJAX opcional, mas não executará scripts se não estiverem presentes
							se ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( nó.src, {
									nonce: nó.nonce || nó.getAttribute( "nonce" )
								}, documento );
							}
						} outro {

							// Desembrulhe uma seção CDATA contendo conteúdo de script. Isso não deveria ser
							// necessário porque em documentos XML eles já não são visíveis quando
							// inspecionando o conteúdo dos elementos e em documentos HTML eles não têm
							// significado, mas estamos preservando essa lógica para compatibilidade com versões anteriores.
							// Isso será removido completamente na versão 4.0. Veja gh-4904.
							DOMEval( nó.textContent.replace( rcleanScript, "" ), nó, doc );
						}
					}
				}
			}
		}
	}

	coleta de retorno;
}

função remove(elem, seletor, keepData) {
	nó var,
		nós = seletor ? jQuery.filter( seletor, elem ) : elem,
		eu = 0;

	para ( ; ( nó = nós [ i ] ) ! = nulo; i++ ) {
		se ( !keepData && nó.nodeType === 1 ) {
			jQuery.cleanData( getAll( nó ) );
		}

		se ( nó.parentNode ) {
			se ( keepData && isAttached( nó ) ) {
				setGlobalEval(getAll(nó, "script" ) );
			}
			nó.parentNode.removeChild( nó );
		}
	}

	retornar elemento;
}

jQuery.extend( {
	htmlPrefilter: função( html ) {
		retornar html;
	},

	clone: ​​função(elem, dadosEventos, dadosEventosProfundos) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode(verdadeiro),
			inPage = isAttached(elem);

		// Corrigir problemas de clonagem do IE
		se ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc(elemento)) {

			// Evitamos jQuery#find aqui por razões de desempenho:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = obterTodos(clone);
			srcElements = getAll(elem);

			para ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput(origemElementos[i],destinoElementos[i]);
			}
		}

		// Copie os eventos do original para o clone
		se ( dadosEventos ) {
			se ( deepDataAndEvents ) {
				srcElements = srcElements || getTodos(elem);
				destElements = destElements || obterTodos( clone );

				para ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent(origemElementos[i],destinoElementos[i]);
				}
			} outro {
				cloneCopyEvent(elem, clone);
			}
		}

		// Preservar histórico de avaliação de script
		destElements = getAll( clone, "script" );
		se ( destElements.length > 0 ) {
			setGlobalEval(destElements, !inPage && getAll( elem, "script" ) );
		}

		// Retorna o conjunto clonado
		retornar clone;
	},

	cleanData: função(elementos) {
		var dados, elem, tipo,
			especial = jQuery.event.special,
			eu = 0;

		para ( ; ( elem = elems[ i ] ) !== indefinido; i++ ) {
			se ( aceitarDados(elemento ) ) {
				se ( ( dados = elem[ dataPriv.expando ] ) ) {
					se ( dados. eventos ) {
						para (digite em data.events) {
							se (especial[tipo]) {
								jQuery.event.remove(elem, tipo);

							// Este é um atalho para evitar a sobrecarga do jQuery.event.remove
							} outro {
								jQuery.removeEvent(elem, tipo, dados.handle);
							}
						}
					}

					// Suporte: Chrome <=35 - 45+
					// Atribuir indefinido em vez de usar delete, veja Data#remove
					elem[ dataPriv.expando ] = indefinido;
				}
				se (elem[dataUser.expando]) {

					// Suporte: Chrome <=35 - 45+
					// Atribuir indefinido em vez de usar delete, veja Data#remove
					elem[ dataUser.expando ] = indefinido;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: função(seletor) {
		retornar remove( this, seletor, true );
	},

	remover: função(seletor) {
		retornar remove( this, seletor );
	},

	texto: função(valor) {
		retornar acesso(isto, função(valor) {
			valor de retorno === indefinido?
				jQuery.text( isto ) :
				isto.vazio().cada( função() {
					se ( este.nodeType === 1 || este.nodeType === 11 || este.nodeType === 9 ) {
						this.textContent = valor;
					}
				} );
		}, nulo, valor, argumentos.length );
	},

	anexar: função() {
		retornar domManip(isto, argumentos, função(elem) {
			se ( este.nodeType === 1 || este.nodeType === 11 || este.nodeType === 9 ) {
				var target = manipulaçãoTarget( this, elem );
				alvo.appendChild(elemento);
			}
		} );
	},

	prefixar: função() {
		retornar domManip(isto, argumentos, função(elem) {
			se ( este.nodeType === 1 || este.nodeType === 11 || este.nodeType === 9 ) {
				var target = manipulaçãoTarget( this, elem );
				alvo.insertBefore(elem, alvo.firstChild);
			}
		} );
	},

	antes: function() {
		retornar domManip(isto, argumentos, função(elem) {
			se (este.parentNode) {
				este.parentNode.insertBefore(elem, este);
			}
		} );
	},

	depois: função() {
		retornar domManip(isto, argumentos, função(elem) {
			se (este.parentNode) {
				este.parentNode.insertBefore(elem, este.nextSibling);
			}
		} );
	},

	vazio: função() {
		var elem,
			eu = 0;

		para ( ; ( elem = este[ i ] ) != nulo; i++ ) {
			se (elem.nodeType === 1) {

				// Prevenir vazamentos de memória
				jQuery.cleanData(getAll(elem, false));

				// Remover todos os nós restantes
				elem.textContent = "";
			}
		}

		devolva isto;
	},

	clone: ​​função( dadosEventos, dadosEventosProfundos ) {
		dataAndEvents = dataAndEvents == nulo? falso: dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == nulo? dataAndEvents: deepDataAndEvents;

		retornar this.map( função() {
			retornar jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: função(valor) {
		retornar acesso(isto, função(valor) {
			var elem = isto[ 0 ] || {},
				eu = 0,
				l = este.comprimento;

			se ( valor === indefinido && elem.nodeType === 1 ) {
				retornar elem.innerHTML;
			}

			// Veja se podemos pegar um atalho e usar apenas innerHTML
			se (tipo de valor === "string" && !rnoInnerhtml.test(valor) &&
				!wrapMap[ ( rtagName.exec( valor ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				valor = jQuery.htmlPrefilter( valor );

				tentar {
					para ( ; i < l; i++ ) {
						elem = isto[ i ] || {};

						// Remover nós de elementos e evitar vazamentos de memória
						se (elem.nodeType === 1) {
							jQuery.cleanData(getAll(elem, false));
							elem.innerHTML = valor;
						}
					}

					elem = 0;

				// Se o uso de innerHTML gerar uma exceção, use o método fallback
				} pegar ( e ) {}
			}

			se (elemento) {
				this.empty().append( valor );
			}
		}, nulo, valor, argumentos.length );
	},

	substituirPor: função() {
		var ignorado = [];

		// Faça as alterações, substituindo cada elemento de contexto não ignorado pelo novo conteúdo
		retornar domManip(isto, argumentos, função(elem) {
			var pai = this.parentNode;

			se ( jQuery.inArray( isto, ignorado ) < 0 ) {
				jQuery.cleanData( getAll( isto ) );
				se (pai) {
					pai.replaceChild(elem, este);
				}
			}

		// Forçar invocação de retorno de chamada
		}, ignorado );
	}
} );

jQuery.cada( {
	appendTo: "acrescentar",
	prependTo: "prepend",
	insertBefore: "antes",
	insertAfter: "depois",
	substituirTodos: "substituirPor"
}, função(nome, original) {
	jQuery.fn[ nome ] = função( seletor ) {
		var elementos,
			ret = [],
			inserir = jQuery( seletor ),
			último = insert.length - 1,
			eu = 0;

		para ( ; i <= último; i++ ) {
			elems = i === último ? this : this.clone( true );
			jQuery(inserir[i])[original](elementos);

			// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
			// .get() porque push.apply(_, arraylike) é lançado no WebKit antigo
			push.aplicar(ret, elems.obter());
		}

		retornar this.pushStack( ret );
	};
} );
var rnumnonpx = novo RegExp( "^(" + pnum + ")(?!px)[az%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = função(elem) {

		// Suporte: IE <=11 apenas, Firefox <=30 (trac-15098, trac-14150)
		// O IE lança elementos criados em pop-ups
		// Enquanto isso, o FF lança elementos de quadro por meio de "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		se ( !ver || !ver.abridor ) {
			view = janela;
		}

		retornar view.getComputedStyle( elem );
	};

var swap = function(elem, opções, retorno de chamada) {
	var ret, nome,
		velho = {};

	// Lembre-se dos valores antigos e insira os novos
	para (nome em opções) {
		old[ nome ] = elem.style[ nome ];
		elem.style[ nome ] = opções[ nome ];
	}

	ret = retorno de chamada.call(elem);

	// Reverter os valores antigos
	para (nome em opções) {
		elem.style[ nome ] = old[ nome ];
	}

	retornar ret;
};


var rboxStyle = novo RegExp( cssExpand.join( "|" ), "i" );



( função() {

	// A execução dos testes pixelPosition e boxSizingReliable requer apenas um layout
	// para que sejam executados ao mesmo tempo para salvar o segundo cálculo.
	função computeStyleTests() {

		// Este é um singleton, precisamos executá-lo apenas uma vez
		se ( !div ) {
			retornar;
		}

		container.style.cssText = "posição:absoluto;esquerda:-11111px;largura:60px;" +
			"margem superior:1px;preenchimento:0;borda:0";
		div.estilo.cssTexto =
			"posição:relativa;exibição:bloco;dimensionamento-da-caixa:caixa-de-borda;overflow:rolagem;" +
			"margem:auto;borda:1px;preenchimento:1px;" +
			"largura:60%;topo:1%";
		documentElement.appendChild( contêiner ).appendChild( div );

		var divStyle = janela.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Suporte: somente Android 4.0 - 4.3, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Suporte: somente Android 4.0 - 4.3, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Alguns estilos retornam com valores percentuais, mesmo que não devessem
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Suporte: somente IE 9 - 11
		// Detectar relatórios incorretos de dimensões de conteúdo para elementos box-sizing:border-box
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Suporte: somente IE 9
		// Detectar estouro: rolagem desalinhada (gh-3699)
		// Suporte: Chrome <=64
		// Não seja enganado quando o zoom afetar offsetWidth (gh-4029)
		div.style.position = "absoluto";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( contêiner );

		// Anule o div para que ele não seja armazenado na memória e
		// também será um sinal de que as verificações já foram realizadas
		div = nulo;
	}

	função roundPixelMeasures(medida) {
		retornar Math.round( parseFloat( medida ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		confiávelTrDimensionsVal, confiávelMarginLeftVal,
		recipiente = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Termine cedo em ambientes limitados (sem navegador)
	se ( !div.estilo ) {
		retornar;
	}

	// Suporte: IE <=9 - 11 apenas
	// O estilo do elemento clonado afeta o elemento de origem clonado (trac-8908)
	div.style.backgroundClip = "caixa de conteúdo";
	div.cloneNode(verdadeiro).style.backgroundClip = "";
	suporte.clearCloneStyle = div.style.backgroundClip === "caixa de conteúdo";

	jQuery.extend( suporte, {
		boxSizingReliable: função() {
			computarEstiloTestes();
			retornar boxSizingReliableVal;
		},
		pixelBoxStyles: função() {
			computarEstiloTestes();
			retornar pixelBoxStylesVal;
		},
		pixelPosition: função() {
			computarEstiloTestes();
			retornar pixelPositionVal;
		},
		reliableMarginLeft: função() {
			computarEstiloTestes();
			retornar reliableMarginLeftVal;
		},
		scrollboxTamanho: função() {
			computarEstiloTestes();
			retornar scrollboxSizeVal;
		},

		// Suporte: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge relata incorretamente `getComputedStyle` de linhas de tabela com largura/altura
		// definido em CSS enquanto as propriedades `offset*` relatam valores corretos.
		// O comportamento no IE 9 é mais sutil do que nas versões mais recentes e passa
		// algumas versões deste teste; certifique-se de não fazê-lo passar aqui!
		//
		// Suporte: Firefox 70+
		// Somente o Firefox inclui larguras de borda
		// em dimensões computadas. (gh-4529)
		reliableTrDimensions: função() {
			var tabela, tr, trFilho, trEstilo;
			se ( reliableTrDimensionsVal == nulo ) {
				tabela = document.createElement( "tabela" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "posição:absoluto;esquerda:-11111px;borda-recolher:separado";
				tr.style.cssText = "tamanho da caixa: caixa de conteúdo; borda: sólido de 1px";

				// Suporte: Chrome 86+
				// A altura definida por meio de cssText não é aplicada.
				// A altura calculada retorna então como 0.
				tr.style.altura = "1px";
				trChild.style.height = "9px";

				// Suporte: Android 8 Chrome 86+
				// Em nosso iframe bodyBackground.html,
				// a exibição de todos os elementos div está definida como "inline",
				// o que causa um problema apenas no Android 8 Chrome 86.
				// Garantindo que o div é `display: block`
				// contorna esse problema.
				trChild.style.display = "bloco";

				documentoElemento
					.appendChild(tabela)
					.appendChild( tr )
					.appendChild( trFilho );

				trStyle = janela.getComputedStyle( tr );
				confiávelTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( tabela );
			}
			retornar reliableTrDimensionsVal;
		}
	} );
} )();


função curCSS(elem, nome, computado) {
	var largura, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( nome ),

		// Suporte: Firefox 51+
		// Recuperando estilo antes de ser computado de alguma forma
		// corrige um problema com valores errados
		// em elementos destacados
		estilo = elem.style;

	computado = computado || getStyles( elem );

	// getPropertyValue é necessário para:
	// .css('filter') (somente IE 9, trac-12537)
	// .css('--customProperty) (gh-3144)
	se (computado) {

		// Suporte: IE <=9 - 11+
		// O IE suporta apenas `"float"` em `getPropertyValue`; em estilos computados
		// está disponível apenas como `"cssFloat"`. Não modificamos mais propriedades
		// enviado para `.css()` além do camelCasing, então precisamos verificar ambos.
		// Normalmente, isso criaria uma diferença no comportamento: se
		// `getPropertyValue` retorna uma string vazia, o valor retornado
		// por `.css()` seria `undefined`. Este é geralmente o caso para
		// elementos desconectados. No entanto, no IE, mesmo elementos desconectados
		// sem estilos retorna `"none"` para `getPropertyValue( "float" )`
		ret = computado.getPropertyValue( nome ) || computado[ nome ];

		se (isCustomProp && ret ) {

			// Suporte: Firefox 105+, Chrome <=105+
			// A especificação requer a redução de espaços em branco para propriedades personalizadas (gh-4926).
			// O Firefox apenas corta os espaços em branco iniciais. O Chrome apenas colapsa
			// espaços em branco iniciais e finais em um único espaço.
			//
			// Retornar para `undefined` se uma string vazia for retornada.
			// Isso colapsa uma definição ausente com propriedade definida
			// e definido como uma string vazia, mas não há API padrão
			// permitindo-nos diferenciá-los sem perda de desempenho
			// e retornar `undefined` alinha-se com o jQuery mais antigo.
			//
			// rtrimCSS trata U+000D RETORNO DE CARRO e U+000C ALIMENTAÇÃO DE FORMULÁRIO
			// como espaço em branco enquanto CSS não, mas isso não é um problema
			// porque o pré-processamento CSS os substitui por U+000A LINE FEED
			// (que *é* espaço em branco CSS)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || indefinido;
		}

		se ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, nome );
		}

		// Uma homenagem ao "hack incrível de Dean Edwards"
		// O navegador Android retorna porcentagem para alguns valores,
		// mas a largura parece ser confiável em pixels.
		// Isso vai contra a especificação do rascunho do CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		se ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( nome ) ) {

			// Lembre-se dos valores originais
			largura = estilo.largura;
			minWidth = estilo.minWidth;
			maxWidth = estilo.maxWidth;

			// Insira os novos valores para obter um valor computado
			estilo.minWidth = estilo.maxWidth = estilo.width = ret;
			ret = computado.largura;

			// Reverter os valores alterados
			estilo.largura = largura;
			estilo.minWidth = minWidth;
			estilo.maxWidth = maxWidth;
		}
	}

	retornar ret !== indefinido ?

		// Suporte: IE <=9 - 11 apenas
		// O IE retorna o valor zIndex como um inteiro.
		ret + "" :
		ret;
}


função addGetHookIf( conditionFn, hookFn ) {

	// Defina o gancho, verificaremos na primeira execução se ele é realmente necessário.
	retornar {
		obter: função() {
			se ( condiçãoFn() ) {

				// Gancho não necessário (ou não é possível usá-lo devido
				// para dependência ausente), remova-a.
				exclua isso.obter;
				retornar;
			}

			// Gancho necessário; redefina-o para que o teste de suporte não seja executado novamente.
			retornar ( this.get = hookFn ).apply( this, argumentos );
		}
	};
}


var cssPrefixes = ["Webkit", "Moz", "ms"],
	estilovazio = document.createElement( "div" ).estilo,
	vendorProps = {};

// Retorna uma propriedade prefixada pelo fornecedor ou indefinida
função vendorPropName(nome) {

	// Verifique se há nomes prefixados de fornecedores
	var capName = nome[ 0 ].toUpperCase() + nome.slice( 1 ),
		i = cssPrefixos.length;

	enquanto (i--) {
		nome = cssPrefixes[ i ] + capName;
		se (nome em emptyStyle) {
			nome de retorno;
		}
	}
}

// Retorna um jQuery.cssProps potencialmente mapeado ou uma propriedade prefixada pelo fornecedor
função finalPropName(nome) {
	var final = jQuery.cssProps[ nome ] || vendorProps[ nome ];

	se (final) {
		retornar final;
	}
	se (nome em emptyStyle) {
		nome de retorno;
	}
	retornar vendorProps[ nome ] = vendorPropName( nome ) || nome;
}


var

	// Trocável se a exibição for nenhuma ou começar com a tabela
	// exceto "tabela", "célula-tabela" ou "legenda-tabela"
	// Veja aqui os valores de exibição: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(nenhum|tabela(?!-c[ea]).+)/,
	cssShow = { posição: "absoluto", visibilidade: "oculto", exibição: "bloco" },
	cssNormalTransform = {
		Espaçamento entre letras: "0",
		Peso da fonte: "400"
	};

função setPositiveNumber( _elem, valor, subtrair ) {

	// Quaisquer valores relativos (+/-) já foram
	// normalizado neste ponto
	var matches = rcssNum.exec( valor );
	retornar fósforos?

		// Proteja-se contra "subtrair" indefinido, por exemplo, quando usado como em cssHooks
		Math.max( 0, corresponde[ 2 ] - ( subtrair || 0 ) ) + ( corresponde[ 3 ] || "px" ) :
		valor;
}

função boxModelAdjustment(elem, dimensão, caixa, isBorderBox, estilos, computedVal) {
	var i = dimensão === "largura" ? 1 : 0,
		extra = 0,
		delta = 0,
		margemDelta = 0;

	// O ajuste pode não ser necessário
	se ( caixa === ( isBorderBox ? "border" : "content") ) {
		retornar 0;
	}

	para ( ; i < 4; i += 2 ) {

		// Ambos os modelos de caixa excluem margem
		// Conte o delta da margem separadamente para adicioná-lo somente após o ajuste da medianiz de rolagem.
		// Isso é necessário para que margens negativas funcionem com `outerHeight( true )` (gh-3982).
		se (caixa === "margem") {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, estilos );
		}

		// Se chegarmos aqui com uma caixa de conteúdo, estamos buscando "preenchimento" ou "borda" ou "margem"
		se ( !isBorderBox ) {

			// Adicionar preenchimento
			delta += jQuery.css( elem, "preenchimento" + cssExpand[ i ], true, estilos );

			// Para "borda" ou "margem", adicione borda
			se ( caixa !== "preenchimento") {
				delta += jQuery.css( elem, "borda" + cssExpand[ i ] + "Largura", true, estilos );

			// Mas ainda assim mantenha o controle de outra forma
			} outro {
				extra += jQuery.css( elem, "borda" + cssExpand[ i ] + "Largura", true, estilos );
			}

		// Se chegarmos aqui com uma caixa de borda (conteúdo + preenchimento + borda), estamos buscando "conteúdo" ou
		// "preenchimento" ou "margem"
		} outro {

			// Para "conteúdo", subtraia o preenchimento
			se ( caixa === "conteúdo") {
				delta -= jQuery.css( elem, "preenchimento" + cssExpand[ i ], true, estilos );
			}

			// Para "conteúdo" ou "preenchimento", subtraia a borda
			se ( caixa !== "margem") {
				delta -= jQuery.css( elem, "borda" + cssExpand[ i ] + "Largura", true, estilos );
			}
		}
	}

	// Considere a margem de rolagem da caixa de conteúdo positiva quando solicitado, fornecendo computedVal
	se ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight é uma soma arredondada de conteúdo, preenchimento, medianiz de rolagem e borda
		// Assumindo uma medianiz de rolagem inteira, subtraia o resto e arredonde para baixo
		delta += Math.max( 0, Math.ceil(
			elem[ "deslocamento" + dimensão[ 0 ].toUpperCase() + dimensão.slice( 1 ) ] -
			computadoVal -
			delta-
			extra -
			0,5

		// Se offsetWidth/offsetHeight for desconhecido, não podemos determinar a calha de rolagem da caixa de conteúdo
		// Use um zero explícito para evitar NaN (gh-3964)
		) ) || 0;
	}

	retornar delta + marginDelta;
}

função getWidthOrHeight(elem, dimensão, extra) {

	// Comece com estilo computado
	var estilos = getStyles(elem),

		// Para evitar forçar um refluxo, busque boxSizing somente se precisarmos dele (gh-4322).
		// Caixa de conteúdo falsa até que saibamos que é necessário saber o valor verdadeiro.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", falso, estilos ) === "border-box",
		valorIsBorderBox = éBorderBox,

		val = curCSS(elem, dimensão, estilos),
		offsetProp = "deslocamento" + dimensão[ 0 ].toUpperCase() + dimensão.slice( 1 );

	// Suporte: Firefox <=54
	// Retorna um valor não pixelado confuso ou finge ignorância, conforme apropriado.
	se ( rnumnonpx.test( val ) ) {
		se ( !extra ) {
			retornar valor;
		}
		val = "automático";
	}


	// Suporte: somente IE 9 - 11
	// Use offsetWidth/offsetHeight quando o dimensionamento da caixa não for confiável.
	// Nesses casos, o valor calculado pode ser considerado border-box.
	se ( ( !support.boxSizingReliable() && isBorderBox ||

		// Suporte: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge relata incorretamente `getComputedStyle` de linhas de tabela com largura/altura
		// definido em CSS enquanto as propriedades `offset*` relatam valores corretos.
		// Curiosamente, em alguns casos o IE 9 não sofre desse problema.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Retornar para offsetWidth/offsetHeight quando o valor for "auto"
		// Isso acontece para elementos inline sem configuração explícita (gh-3571)
		val === "automático" ||

		// Suporte: Android <=4.1 - 4.3 apenas
		// Use também offsetWidth/offsetHeight para dimensões inline relatadas incorretamente (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, estilos ) === "inline" ) &&

		// Certifique-se de que o elemento esteja visível e conectado
		elem.getClientRects().comprimento ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, estilos ) === "border-box";

		// Quando disponível, offsetWidth/offsetHeight aproximam as dimensões da caixa de borda.
		// Onde não estiver disponível (por exemplo, SVG), assuma o dimensionamento de caixa não confiável e interprete o
		// valor recuperado como uma dimensão de caixa de conteúdo.
		valueIsBorderBox = offsetProp em elem;
		se ( valorIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalizar "" e auto
	val = parseFloat( val ) || 0;

	// Ajuste para o modelo de caixa do elemento
	retornar ( val +
		boxModelAjuste(
			elem,
			dimensão,
			extra || ( isBorderBox ? "borda" : "conteúdo" ),
			valorÉBorderBox,
			estilos,

			// Forneça o tamanho computado atual para solicitar o cálculo da calha de rolagem (gh-3589)
			vale
		)
	) + "px";
}

jQuery.extend( {

	// Adicione ganchos de propriedade de estilo para substituir o padrão
	// comportamento de obter e definir uma propriedade de estilo
	Ganchos css: {
		opacidade: {
			obter: função(elem, computado) {
				se (computado) {

					// Devemos sempre obter um número de volta da opacidade
					var ret = curCSS(elem, "opacidade");
					retornar ret === ""? "1": ret;
				}
			}
		}
	},

	// Não adicione automaticamente "px" a essas propriedades possivelmente sem unidade
	Número css: {
		animationIterationCount: verdadeiro,
		aspectRatio: verdadeiro,
		borderImageSlice: verdadeiro,
		columnCount: verdadeiro,
		flexGrow: verdadeiro,
		flexShrink: verdadeiro,
		fontWeight: verdadeiro,
		gridArea: verdadeiro,
		gridColumn: verdadeiro,
		gridColumnEnd: verdadeiro,
		gridColumnStart: verdadeiro,
		gridRow: verdadeiro,
		gridRowEnd: verdadeiro,
		gridRowStart: verdadeiro,
		lineHeight: verdadeiro,
		opacidade: verdadeiro,
		ordem: verdadeiro,
		órfãos: verdade,
		escala: verdadeiro,
		viúvas: verdade,
		zIndex: verdadeiro,
		zoom: verdadeiro,

		// relacionado a SVG
		fillOpacity: verdadeiro,
		floodOpacity: verdadeiro,
		stopOpacity: verdadeiro,
		strokeMiterlimit: verdadeiro,
		strokeOpacity: verdadeiro
	},

	// Adicione propriedades cujos nomes você deseja corrigir antes
	// definindo ou obtendo o valor
	cssPropriedades: {},

	// Obter e definir a propriedade de estilo em um nó DOM
	estilo: função(elem, nome, valor, extra) {

		// Não defina estilos em nós de texto e comentário
		se ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			retornar;
		}

		// Certifique-se de que estamos trabalhando com o nome certo
		var ret, tipo, ganchos,
			origName = camelCase( nome ),
			isCustomProp = rcustomProp.test( nome ),
			estilo = elem.style;

		// Certifique-se de que estamos trabalhando com o nome certo. Nós não
		// deseja consultar o valor se é uma propriedade personalizada CSS
		// já que são definidos pelo usuário.
		se ( !isCustomProp ) {
			nome = finalPropName(origName);
		}

		// Obtém o gancho para a versão prefixada e, em seguida, para a versão não prefixada
		hooks = jQuery.cssHooks[ nome ] || jQuery.cssHooks[ nomeOrig ];

		// Verifique se estamos definindo um valor
		se ( valor !== indefinido ) {
			tipo = tipo de valor;

			// Converte "+=" ou "-=" em números relativos (trac-7345)
			se (tipo === "string" && (ret = rcssNum.exec(valor)) && ret[1]) {
				valor = adjustCSS(elem, nome, ret);

				// Corrige o bug trac-9237
				tipo = "número";
			}

			// Certifique-se de que os valores nulos e NaN não estejam definidos (trac-7116)
			se ( valor == nulo || valor !== valor ) {
				retornar;
			}

			// Se um número foi passado, adicione a unidade (exceto para certas propriedades CSS)
			// A verificação isCustomProp pode ser removida no jQuery 4.0 quando apenas anexamos automaticamente
			// "px" para alguns valores codificados.
			se (tipo === "número" && !isCustomProp) {
				valor += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props afetam os valores do clone original
			se ( !support.clearCloneStyle && valor === "" && nome.indexOf( "fundo" ) === 0 ) {
				estilo[ nome ] = "herdar";
			}

			// Se um gancho foi fornecido, use esse valor, caso contrário, apenas defina o valor especificado
			se ( !ganchos || !( "definir" em ganchos ) ||
				( valor = hooks.set( elem, valor, extra ) ) !== indefinido ) {

				se (isCustomProp) {
					style.setProperty(nome, valor);
				} outro {
					estilo[ nome ] = valor;
				}
			}

		} outro {

			// Se um gancho foi fornecido, obtenha o valor não computado de lá
			se (ganchos && "obter" em ganchos &&
				( ret = hooks.get( elem, false, extra ) ) !== indefinido ) {

				retornar ret;
			}

			// Caso contrário, basta obter o valor do objeto de estilo
			retornar estilo[ nome ];
		}
	},

	css: função(elem, nome, extra, estilos) {
		var val, num, ganchos,
			origName = camelCase( nome ),
			isCustomProp = rcustomProp.test( nome );

		// Certifique-se de que estamos trabalhando com o nome certo. Nós não
		// deseja modificar o valor se for uma propriedade personalizada CSS
		// já que são definidos pelo usuário.
		se ( !isCustomProp ) {
			nome = finalPropName(origName);
		}

		// Tente o nome prefixado seguido do nome não prefixado
		hooks = jQuery.cssHooks[ nome ] || jQuery.cssHooks[ nomeOrig ];

		// Se um gancho foi fornecido, obtenha o valor calculado a partir daí
		se (ganchos && "obter" em ganchos) {
			val = hooks.get( elem, verdadeiro, extra );
		}

		// Caso contrário, se existir uma maneira de obter o valor calculado, use-a
		se ( val === indefinido ) {
			val = curCSS(elem, nome, estilos);
		}

		// Converte "normal" em valor computado
		se ( val === "normal" && nome em cssNormalTransform ) {
			val = cssNormalTransform[ nome ];
		}

		// Torna numérico se forçado ou um qualificador foi fornecido e val parece numérico
		se ( extra === "" || extra ) {
			num = parseFloat( val );
			retornar extra === verdadeiro || éFinito(num)? num || 0: valor;
		}

		retornar valor;
	}
} );

jQuery.each( [ "altura", "largura" ], função( _i, dimensão ) {
	jQuery.cssHooks[ dimensão ] = {
		obter: função(elem, computado, extra) {
			se (computado) {

				// Certos elementos podem ter informações de dimensão se os mostrarmos de forma invisível
				// mas deve ter um estilo de exibição atual que beneficiaria
				retornar rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Suporte: Safari 8+
					// As colunas da tabela no Safari têm offsetWidth diferente de zero e zero
					// getBoundingClientRect().width, a menos que a exibição seja alterada.
					// Suporte: somente IE <=11
					// Executando getBoundingClientRect em um nó desconectado
					// no IE gera um erro.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap(elem, cssShow, função() {
						retornar getWidthOrHeight(elem, dimensão, extra);
					} ) :
					getWidthOrHeight(elem, dimensão, extra);
			}
		},

		conjunto: função(elemento, valor, extra) {
			var corresponde,
				estilos = getStyles( elem ),

				// Leia styles.position somente se o teste tiver chance de falhar
				// para evitar forçar um refluxo.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					estilos.posição === "absoluto",

				// Para evitar forçar um refluxo, busque boxSizing somente se precisarmos dele (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", falso, estilos ) === "border-box",
				subtrair = extra?
					boxModelAjuste(
						elem,
						dimensão,
						extra,
						éBorderBox,
						estilos
					) :
					0;

			// Considere as dimensões não confiáveis ​​da caixa de borda comparando o deslocamento* com o calculado e
			// falsificando uma caixa de conteúdo para obter borda e preenchimento (gh-3699)
			se (isBorderBox && scrollboxSizeBuggy) {
				subtrair -= Math.ceil(
					elem[ "deslocamento" + dimensão[ 0 ].toUpperCase() + dimensão.slice( 1 ) ] -
					parseFloat( estilos[ dimensão ] ) -
					boxModelAdjustment(elem, dimensão, "borda", falso, estilos) -
					0,5
				);
			}

			// Converta para pixels se for necessário ajuste de valor
			se ( subtrair && ( corresponde = rcssNum.exec( valor ) ) &&
				( correspondências [ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimensão ] = valor;
				valor = jQuery.css(elem, dimensão);
			}

			retornar setPositiveNumber(elem, valor, subtrair);
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( suporte.reliableMarginLeft,
	função(elem, computado) {
		se (computado) {
			return (parseFloat(curCSS(elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().esquerda -
					swap(elem, {margemEsquerda: 0}, função() {
						retornar elem.getBoundingClientRect().esquerda;
					} )
			) + "px";
		}
	}
);

// Esses ganchos são usados ​​pelo animate para expandir propriedades
jQuery.cada( {
	margem: "",
	preenchimento: "",
	borda: "Largura"
}, função(prefixo, sufixo) {
	jQuery.cssHooks[ prefixo + sufixo ] = {
		expandir: função(valor) {
			var i = 0,
				expandido = {},

				// Assume um único número se não for uma string
				partes = tipo de valor === "string" ? valor.split( " " ) : [ valor ];

			para ( ; i < 4; i++ ) {
				expandido[ prefixo + cssExpand[ i ] + sufixo ] =
					partes[ i ] || partes[ i - 2 ] || partes[ 0 ];
			}

			retornar expandido;
		}
	};

	se (prefixo !== "margem") {
		jQuery.cssHooks[ prefixo + sufixo ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: função(nome, valor) {
		retornar acesso(isto, função(elem, nome, valor) {
			estilos var, len,
				mapa = {},
				eu = 0;

			se ( Array.isArray( nome ) ) {
				estilos = getStyles( elem );
				len = nome.comprimento;

				para ( ; i < len; i++ ) {
					mapa[ nome[ i ] ] = jQuery.css( elem, nome[ i ], falso, estilos );
				}

				mapa de retorno;
			}

			valor de retorno !== indefinido ?
				jQuery.style(elem, nome, valor) :
				jQuery.css(elem, nome);
		}, nome, valor, argumentos.length > 1 );
	}
} );


// Baseado no plugin de Clint Helfers, com permissão.
jQuery.fn.delay = função(tempo, tipo) {
	tempo = jQuery.fx ? jQuery.fx.speeds[ tempo ] || tempo : tempo;
	tipo = tipo || "fx";

	retornar this.queue(tipo, função(próximo, ganchos) {
		var timeout = window.setTimeout( próximo, tempo );
		hooks.stop = função() {
			window.clearTimeout( tempo limite );
		};
	} );
};


( função() {
	var entrada = document.createElement( "entrada"),
		selecionar = document.createElement( "selecionar" ),
		opt = select.appendChild( document.createElement( "opção" ) );

	input.type = "caixa de seleção";

	// Suporte: somente Android <=4.3
	// O valor padrão para uma caixa de seleção deve ser "on"
	suporte.checkOn = entrada.valor !== "";

	// Suporte: somente IE <=11
	// Deve acessar selectedIndex para tornar as opções padrão selecionadas
	suporte.optSelected = opt.selected;

	// Suporte: somente IE <=11
	// Uma entrada perde seu valor após se tornar um rádio
	entrada = document.createElement( "entrada" );
	entrada.valor = "t";
	input.type = "rádio";
	suporte.radioValue = entrada.valor === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function(nome, valor) {
		retornar acesso( this, jQuery.attr, nome, valor, argumentos.length > 1 );
	},

	removeAttr: função(nome) {
		retornar this.each( função() {
			jQuery.removeAttr(este, nome);
		} );
	}
} );

jQuery.extend( {
	attr: function(elem, nome, valor) {
		var ret, ganchos,
			nTipo = elem.nodeType;

		// Não obtenha/defina atributos em nós de texto, comentário e atributo
		se ( nTipo === 3 || nTipo === 8 || nTipo === 2 ) {
			retornar;
		}

		// Retorno ao prop quando os atributos não são suportados
		se ( typeof elem.getAttribute === "indefinido") {
			retornar jQuery.prop(elem, nome, valor);
		}

		// Os ganchos de atributo são determinados pela versão em minúsculas
		// Pegue o gancho necessário se um estiver definido
		se ( nTipo !== 1 || !jQuery.isXMLDoc( elem ) ) {
			ganchos = jQuery.attrHooks[ nome.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( nome ) ? boolHook : indefinido );
		}

		se ( valor !== indefinido ) {
			se ( valor === nulo ) {
				jQuery.removeAttr(elem, nome);
				retornar;
			}

			se (ganchos && "definir" em ganchos &&
				( ret = hooks.set( elem, valor, nome ) ) !== indefinido ) {
				retornar ret;
			}

			elem.setAttribute( nome, valor + "" );
			valor de retorno;
		}

		se (ganchos && "obter" em ganchos && (ret = ganchos.obter(elem, nome)) !== nulo) {
			retornar ret;
		}

		ret = jQuery.find.attr( elem, nome );

		// Atributos inexistentes retornam nulo, normalizamos para indefinido
		retornar ret == nulo ? indefinido : ret;
	},

	attrHooks: {
		tipo: {
			conjunto: função(elemento, valor) {
				se ( !support.radioValue && valor === "rádio" &&
					nodeName(elem, "entrada")) {
					var val = elem.valor;
					elem.setAttribute( "tipo", valor );
					se ( val ) {
						elem.valor = val;
					}
					valor de retorno;
				}
			}
		}
	},

	removeAttr: função(elemento, valor) {
		nome da variável,
			eu = 0,

			// Os nomes de atributos podem conter caracteres de espaço em branco não HTML
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = valor && valor.match( rnothtmlwhite );

		se (attrNames && elem.nodeType === 1) {
			enquanto ( ( nome = attrNames[ i++ ] ) ) {
				elem.removeAttribute( nome );
			}
		}
	}
} );

// Ganchos para atributos booleanos
boolHook = {
	conjunto: função(elemento, valor, nome) {
		se ( valor === falso ) {

			// Remove atributos booleanos quando definido como falso
			jQuery.removeAttr(elem, nome);
		} outro {
			elem.setAttribute( nome, nome );
		}
		nome de retorno;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), função( _i, nome ) {
	var getter = attrHandle[ nome ] || jQuery.find.attr;

	attrHandle[ nome ] = função( elem, nome, isXML ) {
		var ret, alça,
			lowercaseName = nome.toLowerCase();

		se ( !isXML ) {

			// Evite um loop infinito removendo temporariamente esta função do getter
			handle = attrHandle[ nomeminúsculo ];
			attrHandle[ nomeminúsculo ] = ret;
			ret = getter(elem, nome, isXML) != nulo ?
				nomeminúsculo:
				nulo;
			attrHandle[ lowercaseName ] = identificador;
		}
		retornar ret;
	};
} );




var rfocusable = /^(?:entrada|selecionar|área de texto|botão)$/i,
	rclickable = /^(?:a|área)$/i;

jQuery.fn.extend( {
	prop: função(nome, valor) {
		retornar acesso( this, jQuery.prop, nome, valor, argumentos.length > 1 );
	},

	removeProp: função(nome) {
		retornar this.each( função() {
			exclua isso[ jQuery.propFix[ nome ] || nome ];
		} );
	}
} );

jQuery.extend( {
	prop: função(elem, nome, valor) {
		var ret, ganchos,
			nTipo = elem.nodeType;

		// Não obtenha/defina propriedades em nós de texto, comentário e atributo
		se ( nTipo === 3 || nTipo === 8 || nTipo === 2 ) {
			retornar;
		}

		se ( nTipo !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Corrigir nome e anexar ganchos
			nome = jQuery.propFix[ nome ] || nome;
			ganchos = jQuery.propHooks[ nome ];
		}

		se ( valor !== indefinido ) {
			se (ganchos && "definir" em ganchos &&
				( ret = hooks.set( elem, valor, nome ) ) !== indefinido ) {
				retornar ret;
			}

			retornar (elem[nome] = valor);
		}

		se (ganchos && "obter" em ganchos && (ret = ganchos.obter(elem, nome)) !== nulo) {
			retornar ret;
		}

		retornar elem[ nome ];
	},

	Ganchos de prop: {
		tabIndex: {
			obter: função(elem) {

				// Suporte: IE <=9 - 11 apenas
				// elem.tabIndex nem sempre retorna o
				// valor correto quando não foi explicitamente definido
				// Use a recuperação de atributo adequada (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				se ( índice de tabulação ) {
					retornar parseInt( tabindex, 10 );
				}

				se (
					rfocusable.test(elem.nomedonó) ||
					rclickable.test(elem.nodeName) &&
					elem.href
				) {
					retornar 0;
				}

				retornar -1;
			}
		}
	},

	propFix: {
		"para": "htmlPara",
		"classe": "nomedaclasse"
	}
} );

// Suporte: somente IE <=11
// Acessando a propriedade selectedIndex
// força o navegador a respeitar a configuração selecionada
// na opção
// O getter garante que uma opção padrão seja selecionada
// quando em um optgroup
// a regra eslint "no-unused-expressions" está desabilitada para este código
// pois considera tais adesões noop
se ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		obter: função(elem) {

			/* eslint no-unused-expressions: "desligado" */

			var pai = elem.parentNode;
			se (pai && pai.parentNode) {
				pai.parentNode.selectedIndex;
			}
			retornar nulo;
		},
		conjunto: função(elem) {

			/* eslint no-unused-expressions: "desligado" */

			var pai = elem.parentNode;
			se (pai) {
				pai.selectedIndex;

				se (pai.parentNode) {
					pai.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.cada( [
	"tabIndex",
	"somente leitura",
	"comprimento máximo",
	"espaçamento de células",
	"preenchimento de célula",
	"linhaSpan",
	"colEspaço",
	"usarMapa",
	"frameBorder",
	"conteúdoEditável"
], função() {
	jQuery.propFix[ this.toLowerCase() ] = isto;
} );




	// Remove e reduz os espaços em branco de acordo com as especificações HTML
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	função stripAndCollapse( valor ) {
		var tokens = valor.match( rnothtmlwhite ) || [];
		retornar tokens.join( " " );
	}


função getClass(elem) {
	retornar elem.getAttribute && elem.getAttribute( "classe" ) || "";
}

função classesToArray( valor ) {
	se ( Array.isArray( valor ) ) {
		valor de retorno;
	}
	se (tipo de valor === "string") {
		valor de retorno.match(rnothtmlwhite) || [];
	}
	retornar [];
}

jQuery.fn.extend( {
	addClass: função(valor) {
		var classNames, cur, curValue, className, i, finalValue;

		se (isFunction(valor)) {
			retornar isto.cada(função(j) {
				jQuery(isto).addClass(valor.call(isto, j, getClass(isto)));
			} );
		}

		classNames = classesToArray( valor );

		se (classNames.length) {
			retornar this.each( função() {
				curValue = getClass( isto );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				se (cur) {
					para ( i = 0; i < classNames.length; i++ ) {
						className = nomesdeclasses[ i ];
						se ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += nomedaclasse + " ";
						}
					}

					// Atribua somente se for diferente para evitar renderização desnecessária.
					finalValue = stripAndCollapse(cur);
					se (curValue !==finalValue) {
						this.setAttribute( "classe", finalValue );
					}
				}
			} );
		}

		devolva isto;
	},

	removeClass: função(valor) {
		var classNames, cur, curValue, className, i, finalValue;

		se (isFunction(valor)) {
			retornar isto.cada(função(j) {
				jQuery(isto).removeClass(valor.call(isto, j, getClass(isto)));
			} );
		}

		se ( !argumentos.length ) {
			retornar this.attr( "classe", "" );
		}

		classNames = classesToArray( valor );

		se (classNames.length) {
			retornar this.each( função() {
				curValue = getClass( isto );

				// Esta expressão está aqui para melhor compressibilidade (veja addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				se (cur) {
					para ( i = 0; i < classNames.length; i++ ) {
						className = nomesdeclasses[ i ];

						// Remover *todas* as instâncias
						enquanto ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + nomedaclasse + " ", " " );
						}
					}

					// Atribua somente se for diferente para evitar renderização desnecessária.
					finalValue = stripAndCollapse(cur);
					se (curValue !==finalValue) {
						this.setAttribute( "classe", finalValue );
					}
				}
			} );
		}

		devolva isto;
	},

	toggleClass: função(valor, stateVal) {
		var classNames, className, eu, eu mesmo,
			tipo = tipo de valor,
			isValidValue = tipo === "string" || Array.isArray( valor );

		se (isFunction(valor)) {
			retornar isto.cada(função(i) {
				jQuery(este).toggleClass(
					valor.call(isto, eu, obterClasse(isto), estadoVal),
					estadoVal
				);
			} );
		}

		se ( tipo de estadoVal === "booleano" && éValorVálido ) {
			retornar stateVal ? this.addClass( valor ) : this.removeClass( valor );
		}

		classNames = classesToArray( valor );

		retornar this.each( função() {
			se ( éValorVálido ) {

				// Alternar nomes de classes individuais
				self = jQuery( isto );

				para ( i = 0; i < classNames.length; i++ ) {
					className = nomesdeclasses[ i ];

					// Verifique cada className fornecido, lista separada por espaços
					se (self.hasClass(nomedaclasse)) {
						self.removeClass(nomedaclasse);
					} outro {
						self.addClass(nomedaclasse);
					}
				}

			// Alternar nome de classe inteiro
			} senão se ( valor === indefinido || tipo === "booleano") {
				className = getClass( this );
				se (className) {

					// Armazena className se definido
					dataPriv.set( this, "__className__", className );
				}

				// Se o elemento tiver um nome de classe ou se for passado `false`,
				// então remova o nome da classe inteiro (se houver um, o acima o salvou).
				// Caso contrário, traga de volta o que foi salvo anteriormente (se houver),
				// retornando para a string vazia se nada foi armazenado.
				se (este.setAttribute) {
					this.setAttribute( "classe",
						className || valor === falso ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: função(seletor) {
		var className, elem,
			eu = 0;

		className = " " + seletor + " ";
		enquanto ( ( elem = this[ i++ ] ) ) {
			se (elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				retornar verdadeiro;
			}
		}

		retornar falso;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: função(valor) {
		ganchos var, ret, valueIsFunction,
			elem = isto[ 0 ];

		se ( !argumentos.length ) {
			se (elemento) {
				ganchos = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				se (ganchos &&
					"pegue" em ganchos &&
					( ret = hooks.get( elem, "valor") ) !== indefinido
				) {
					retornar ret;
				}

				ret = elem.valor;

				// Lida com os casos mais comuns de strings
				se ( tipo de ret === "string" ) {
					retornar ret.replace(rreturn, "" );
				}

				// Lidar com casos onde o valor é nulo/indefinido ou número
				retornar ret == nulo? "" : ret;
			}

			retornar;
		}

		valueIsFunction = isFunction( valor );

		retornar isto.cada(função(i) {
			var val;

			se ( este.nodeType !== 1 ) {
				retornar;
			}

			se ( valorÉFunção ) {
				val = valor.call(isto, i, jQuery(isto).val());
			} outro {
				val = valor;
			}

			// Tratar nulo/indefinido como ""; converter números em string
			se ( val == nulo ) {
				val = "";

			} senão se ( typeof val === "número" ) {
				val += "";

			} senão se ( Array.isArray( val ) ) {
				val = jQuery.map( val, função( valor ) {
					valor de retorno == nulo ? "" : valor + "";
				} );
			}

			ganchos = jQuery.valHooks[ este.tipo ] || jQuery.valHooks[ este.nomeDoNome.toLowerCase() ];

			// Se set retornar indefinido, retornar à configuração normal
			se ( !hooks || !( "set" em ganchos ) || hooks.set( this, val, "valor" ) === indefinido ) {
				este.valor = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		opção: {
			obter: função(elem) {

				var val = jQuery.find.attr( elem, "valor" );
				retornar val != nulo ?
					valor:

					// Suporte: IE <=10 - 11 apenas
					// option.text lança exceções (trac-14686, trac-14858)
					// Retirar e recolher espaços em branco
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elem));
			}
		},
		selecione: {
			obter: função(elem) {
				var valor, opção, i,
					opções = elem.options,
					índice = elem.selectedIndex,
					um = elem.type === "selecione-um",
					valores = um ? nulo : [],
					max = um ? índice + 1 : opções.length;

				se (índice < 0) {
					i = máximo;

				} outro {
					i = um ? índice : 0;
				}

				// Percorre todas as opções selecionadas
				para ( ; i < máx; i++ ) {
					opção = opções[ i ];

					// Suporte: IE <=9 apenas
					// O IE8-9 não atualiza o selecionado após a redefinição do formulário (trac-2551)
					se ( ( opção.selected || i === índice ) &&

							// Não retorne opções que estejam desabilitadas ou em um optgroup desabilitado
							!opção.desabilitado &&
							( !opção.parentNode.disabled ||
								!nodeName(opção.parentNode, "optgroup" ) ) ) {

						// Obtenha o valor específico para a opção
						valor = jQuery(opção).val();

						// Não precisamos de um array para um selects
						se ( um ) {
							valor de retorno;
						}

						// Multi-Selects retornam uma matriz
						valores.push( valor );
					}
				}

				valores de retorno;
			},

			conjunto: função(elemento, valor) {
				var optionSet, opção,
					opções = elem.options,
					valores = jQuery.makeArray( valor ),
					i = opções.length;

				enquanto (i--) {
					opção = opções[ i ];

					/* eslint-disable no-cond-assign */

					se (opção.selected =
						jQuery.inArray( jQuery.valHooks.option.get( opção ), valores ) > -1
					) {
						optionSet = verdadeiro;
					}

					/* eslint-enable no-cond-assign */
				}

				// Força os navegadores a se comportarem de forma consistente quando um valor não correspondente é definido
				se (!optionSet) {
					elem.selectedIndex = -1;
				}
				valores de retorno;
			}
		}
	}
} );

// Rádios e caixas de seleção getter/setter
jQuery.each( [ "rádio", "caixa de seleção" ], função() {
	jQuery.valHooks[ este ] = {
		conjunto: função(elemento, valor) {
			se ( Array.isArray( valor ) ) {
				retornar ( elem.checked = jQuery.inArray( jQuery( elem ).val(), valor ) > -1 );
			}
		}
	};
	se ( !support.checkOn ) {
		jQuery.valHooks[ este ].get = função( elem ) {
			retornar elem.getAttribute( "valor" ) === nulo ? "on" : elem.value;
		};
	}
} );




// Retorna jQuery para inclusão somente de atributos


// Análise xml entre navegadores
jQuery.parseXML = função( dados ) {
	var xml, parserErrorElem;
	se ( !dados || tipo de dados !== "string" ) {
		retornar nulo;
	}

	// Suporte: somente IE 9 - 11
	// O IE lança parseFromString com entrada inválida.
	tentar {
		xml = ( nova janela.DOMParser() ).parseFromString( dados, "texto/xml" );
	} pegar ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	se ( !xml || parserErrorElem ) {
		jQuery.error( "XML inválido: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, função( el ) {
					retornar el.textContent;
				} ).join( "\n" ) :
				dados
		) );
	}
	retornar xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = função( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.evento, {

	gatilho: função(evento, dados, elem, onlyHandlers) {

		var i, cur, tmp, bubbleType, ontype, identificador, especial, últimoElemento,
			eventPath = [elem || documento],
			tipo = hasOwn.call(evento, "tipo") ? evento.tipo: evento,
			namespaces = hasOwn.call(evento, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || documento;

		// Não faça eventos em nós de texto e comentário
		se ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			retornar;
		}

		// foco/desfoque se transforma em foco/fora; certifique-se de que não estamos disparando-os agora
		se ( rfocusMorph.test( tipo + jQuery.event.triggered ) ) {
			retornar;
		}

		se ( tipo.indexOf( "." ) > -1 ) {

			// Gatilho com namespace; cria um regexp para corresponder ao tipo de evento em handle()
			namespaces = tipo.split( "." );
			tipo = namespaces.shift();
			namespaces.sort();
		}
		ontype = tipo.indexOf( ":" ) < 0 && "on" + tipo;

		// O chamador pode passar um objeto jQuery.Event, Object ou apenas uma string de tipo de evento
		evento = evento[ jQuery.expando ] ?
			evento:
			novo jQuery.Event(tipo, tipo de evento === "objeto" && evento);

		// Dispara bitmask: & 1 para manipuladores nativos; & 2 para jQuery (sempre verdadeiro)
		evento.isTrigger = somenteHandlers ? 2 : 3;
		evento.namespace = namespaces.join( "." );
		evento.rnamespace = evento.namespace ?
			novo RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			nulo;

		// Limpe o evento caso ele esteja sendo reutilizado
		evento.resultado = indefinido;
		se ( !evento.alvo ) {
			evento.target = elem;
		}

		// Clone todos os dados recebidos e adicione o evento, criando a lista de argumentos do manipulador
		dados = dados == nulo?
			[evento]:
			jQuery.makeArray( dados, [ evento ] );

		// Permitir que eventos especiais saiam dos limites
		especial = jQuery.event.special[ tipo ] || {};
		se ( !onlyHandlers && especial.trigger && especial.trigger.apply( elem, dados ) === falso ) {
			retornar;
		}

		// Determinar o caminho de propagação do evento com antecedência, conforme especificação de eventos W3C (trac-9951)
		// Bolha para cima para o documento, depois para a janela; observe uma variável global ownerDocument (trac-9724)
		se ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = especial.delegateType || tipo;
			se ( !rfocusMorph.test( bubbleType + tipo ) ) {
				cur = cur.parentNode;
			}
			para ( ; cur; cur = cur.parentNode ) {
				eventPath.push(cur);
				tmp = cur;
			}

			// Adicione a janela somente se tivermos que documentar (por exemplo, não um objeto simples ou um DOM separado)
			se ( tmp === ( elem.ownerDocument || documento ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || janela );
			}
		}

		// Manipuladores de incêndio no caminho do evento
		eu = 0;
		enquanto ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			últimoElemento = cur;
			tipo.de.evento = i > 1 ?
				Tipo de bolha:
				especial.bindType || tipo;

			// manipulador jQuery
			handle = ( dataPriv.get( cur, "eventos" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get(cur, "handle");
			se (manipular) {
				handle.apply(cur, dados);
			}

			// Manipulador nativo
			identificador = ontype && cur[ ontype ];
			se ( manipular && manipular. aplicar && aceitar dados (cur)) {
				evento.resultado = handle.apply(cur, dados);
				se (evento.resultado === falso) {
					evento.preventDefault();
				}
			}
		}
		evento.tipo = tipo;

		// Se ninguém impediu a ação padrão, faça-a agora
		se ( !onlyHandlers && !event.isDefaultPrevented() ) {

			se ( ( !especial._default ||
				especial._default.apply( eventPath.pop(), dados ) === falso ) &&
				aceitarDados(elemento)) {

				// Chame um método DOM nativo no alvo com o mesmo nome do evento.
				// Não execute ações padrão na janela, é onde as variáveis ​​globais estão (trac-6170)
				if (ontype && isFunction( elem[ tipo ] ) && !isWindow( elem ) ) {

					// Não reative um evento onFOO quando chamamos seu método FOO()
					tmp = elem[ tipo de entrada ];

					se (tmp) {
						elem[ ontype ] = nulo;
					}

					// Evitar o re-disparo do mesmo evento, uma vez que já o borbulhamos acima
					jQuery.event.triggered = tipo;

					se (evento.isPropagationStopped()) {
						lastElement.addEventListener(tipo, stopPropagationCallback);
					}

					elem[ tipo ]();

					se (evento.isPropagationStopped()) {
						lastElement.removeEventListener(tipo, stopPropagationCallback);
					}

					jQuery.event.triggered = indefinido;

					se (tmp) {
						elem[ tipo de entrada ] = tmp;
					}
				}
			}
		}

		retornar evento.resultado;
	},

	// Aproveite um evento de doador para simular um diferente
	// Usado apenas para eventos `focus(in | out)`
	simular: função(tipo, elem, evento) {
		var e = jQuery.extend(
			novo jQuery.Event(),
			evento,
			{
				tipo: tipo,
				isSimulated: verdadeiro
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	gatilho: função(tipo, dados) {
		retornar this.each( função() {
			jQuery.event.trigger( tipo, dados, this );
		} );
	},
	triggerHandler: função(tipo, dados) {
		var elem = isto[ 0 ];
		se (elemento) {
			retornar jQuery.event.trigger(tipo, dados, elem, verdadeiro);
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:enviar|botão|imagem|redefinir|arquivo)$/i,
	rsubmittable = /^(?:entrada|selecionar|área de texto|keygen)/i;

função buildParams(prefixo, obj, tradicional, adicionar) {
	nome da variável;

	se ( Array.isArray( obj ) ) {

		// Serializa item da matriz.
		jQuery.each(obj, função(i, v) {
			se ( tradicional || rbracket.test( prefixo ) ) {

				// Trate cada item da matriz como um escalar.
				adicionar( prefixo, v );

			} outro {

				// O item não é escalar (matriz ou objeto), codifique seu índice numérico.
				construirParams(
					prefixo + "[" + ( typeof v === "objeto" && v != null ? i : "" ) + "]",
					você,
					tradicional,
					adicionar
				);
			}
		} );

	} senão se ( !tradicional && toType( obj ) === "objeto" ) {

		// Serializar item de objeto.
		para (nome em obj) {
			buildParams( prefixo + "[" + nome + "]", obj[ nome ], tradicional, adicionar );
		}

	} outro {

		// Serializa item escalar.
		adicionar(prefixo, obj);
	}
}

// Serializa uma matriz de elementos de formulário ou um conjunto de
// chave/valores em uma string de consulta
jQuery.param = function( a, tradicional ) {
	prefixo var,
		s = [],
		adicionar = função(chave, valorOuFunção) {

			// Se value for uma função, invoque-a e use seu valor de retorno
			var valor = isFunction( valorOuFunção ) ?
				valorOuFunção() :
				valorOuFunção;

			s[ s.length ] = encodeURIComponent( chave ) + "=" +
				encodeURIComponent( valor == nulo ? "" : valor );
		};

	se ( a == nulo ) {
		retornar "";
	}

	// Se um array foi passado, suponha que seja um array de elementos de formulário.
	se ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serializar os elementos do formulário
		jQuery.each( a, função() {
			adicione(este.nome, este.valor);
		} );

	} outro {

		// Se tradicional, codifique da maneira "antiga" (a maneira 1.3.2 ou anterior
		// fez isso), caso contrário, codifique os parâmetros recursivamente.
		para (prefixo em a) {
			buildParams( prefixo, a[ prefixo ], tradicional, adicionar );
		}
	}

	// Retorna a serialização resultante
	retornar s.join( "&" );
};

jQuery.fn.extend( {
	serializar: função() {
		retornar jQuery.param( this.serializeArray() );
	},
	serializeArray: função() {
		retornar this.map( função() {

			// Pode adicionar propHook para "elementos" para filtrar ou adicionar elementos de formulário
			var elementos = jQuery.prop( this, "elementos" );
			retornar elementos? jQuery.makeArray( elementos ) : this;
		} ).filter( função() {
			var tipo = this.tipo;

			// Use .is( ":disabled" ) para que fieldset[disabled] funcione
			retornar this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( tipo ) &&
				( isto.verificado || !rcheckableType.test( tipo ) );
		} ).map( função( _i, elem ) {
			var val = jQuery( this ).val();

			se ( val == nulo ) {
				retornar nulo;
			}

			se ( Array.isArray( val ) ) {
				retornar jQuery.map( val, função( val ) {
					retornar { nome: elem.name, valor: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			retornar { nome: elem.name, valor: val.replace( rCRLF, "\r\n" ) };
		} ).pegar();
	}
} );


jQuery.fn.extend( {
	wrapAll: função(html) {
		var embrulhar;

		se ( isto[ 0 ] ) {
			se (isFunction(html)) {
				html = html.call( isto[ 0 ] );
			}

			// Os elementos para envolver o alvo
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			se (este[0].parentNode) {
				wrap.insertBefore( isto[ 0 ] );
			}

			wrap.map( função() {
				var elem = isto;

				enquanto (elem.firstElementChild) {
					elem = elem.firstElementChild;
				}

				retornar elemento;
			} ).append( isto );
		}

		devolva isto;
	},

	wrapInner: função(html) {
		se (isFunction(html)) {
			retornar isto.cada(função(i) {
				jQuery(isto).wrapInner(html.call(isto, i));
			} );
		}

		retornar this.each( função() {
			var self = jQuery( isto ),
				conteúdo = self.contents();

			se (conteúdo.comprimento) {
				conteúdo.wrapAll( html );

			} outro {
				self.append( html );
			}
		} );
	},

	wrap: função( html ) {
		var htmlIsFunction = isFunction( html );

		retornar isto.cada(função(i) {
			jQuery(isto).wrapAll(htmlIsFunction? html.call(isto, i): html);
		} );
	},

	desembrulhar: função(seletor) {
		this.parent( seletor ).not( "corpo" ).each( função() {
			jQuery(este).replaceWith(este.childNodes);
		} );
		devolva isto;
	}
} );


jQuery.expr.pseudos.hidden = função(elem) {
	retornar !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = função(elem) {
	retornar !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




// Suporte: somente Safari 8
// No Safari 8, documentos criados via document.implementation.createHTMLDocument
// recolher formas irmãs: o segundo se torna filho do primeiro.
// Por isso, essa medida de segurança precisa ser desabilitada no Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
suporte.createHTMLDocument = ( função() {
	var corpo = documento.implementação.createHTMLDocument( "" ).corpo;
	corpo.innerHTML = "<formulário></formulário><formulário></formulário>";
	retornar corpo.childNodes.length === 2;
} )();


// O argumento "data" deve ser uma string de html
// contexto (opcional): Se especificado, o fragmento será criado neste contexto,
// padrão para documento
// keepScripts (opcional): Se verdadeiro, incluirá scripts passados ​​na string html
jQuery.parseHTML = função(dados, contexto, keepScripts) {
	se (tipo de dados !== "string") {
		retornar [];
	}
	se (tipo de contexto === "booleano") {
		keepScripts = contexto;
		contexto = falso;
	}

	var base, analisado, scripts;

	se ( !contexto ) {

		// Impedir que scripts ou manipuladores de eventos em linha sejam executados imediatamente
		// usando document.implementation
		se ( suporte.createHTMLDocument ) {
			contexto = documento.implementação.createHTMLDocument( "" );

			// Defina o href base para o documento criado
			// então quaisquer elementos analisados ​​com URLs
			// são baseados na URL do documento (gh-2965)
			base = contexto.createElement( "base" );
			base.href = documento.localização.href;
			contexto.head.appendChild(base);
		} outro {
			contexto = documento;
		}
	}

	analisado = rsingleTag.exec( dados );
	scripts = !keepScripts && [];

	// Etiqueta única
	se (analisado) {
		retornar [ contexto.createElement( analisado[ 1 ] ) ];
	}

	analisado = buildFragment( [ dados ], contexto, scripts );

	se ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	retornar jQuery.merge( [], analisado.childNodes );
};


jQuery.offset = {
	setOffset: função(elem, opções, i) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calcularPosition,
			posição = jQuery.css( elem, "posição" ),
			curElem = jQuery( elem ),
			adereços = {};

		// Defina a posição primeiro, caso superior/esquerda sejam definidos mesmo em elementos estáticos
		se (posição === "estático") {
			elem.style.position = "relativo";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "topo" );
		curCSSLeft = jQuery.css( elem, "esquerda" );
		calcularPosição = ( posição === "absoluto" || posição === "fixo" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Precisa ser capaz de calcular a posição se qualquer um
		// superior ou esquerdo é automático e posição é absoluta ou fixa
		se ( calcularPosição ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.esquerda;

		} outro {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		se (isFunction(opções)) {

			// Use jQuery.extend aqui para permitir a modificação do argumento de coordenadas (gh-1848)
			opções = opções.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		se (opções.top != null) {
			props.top = (opções.top - curOffset.top) + curTop;
		}
		se (opções.esquerda != nulo) {
			adereços.esquerda = (opções.esquerda - curOffset.esquerda) + curLeft;
		}

		se ("usando" em opções) {
			opções.usando.call(elem, props);

		} outro {
			curElem.css( adereços );
		}
	}
};

jQuery.fn.extend( {

	// offset() relaciona a caixa de borda de um elemento à origem do documento
	offset: função(opções) {

		// Preservar encadeamento para setter
		se (argumentos.length) {
			opções de retorno === indefinido ?
				esse :
				isto.cada(função(i) {
					jQuery.offset.setOffset( this, opções, i );
				} );
		}

		var rect, ganhar,
			elem = isto[ 0 ];

		se ( !elem ) {
			retornar;
		}

		// Retorna zeros para elementos desconectados e ocultos (display: none) (gh-2310)
		// Suporte: somente IE <=11
		// Executando getBoundingClientRect em um
		// nó desconectado no IE gera erro
		se ( !elem.getClientRects().length ) {
			retornar { topo: 0, esquerda: 0 };
		}

		// Obtenha a posição relativa ao documento adicionando a rolagem da janela de visualização ao gBCR relativo à janela de visualização
		retângulo = elem.getBoundingClientRect();
		ganhar = elem.ownerDocument.defaultView;
		retornar {
			topo: rect.top + win.pageYOffset,
			esquerda: rect.left + win.pageXOffset
		};
	},

	// position() relaciona a caixa de margem de um elemento à caixa de preenchimento do seu pai deslocado
	// Isso corresponde ao comportamento do posicionamento absoluto CSS
	posição: função() {
		se ( !isso[ 0 ] ) {
			retornar;
		}

		var offsetParent, deslocamento, doc,
			elem = isto[ 0 ],
			parentOffset = { topo: 0, esquerda: 0 };

		// posição: elementos fixos são deslocados da janela de visualização, que sempre tem deslocamento zero
		se ( jQuery.css( elem, "posição" ) === "fixo" ) {

			// Assumir posição:fixo implica disponibilidade de getBoundingClientRect
			deslocamento = elem.getBoundingClientRect();

		} outro {
			deslocamento = this.offset();

			// Considere o deslocamento pai *real*, que pode ser o documento ou seu elemento raiz
			// quando um elemento posicionado estaticamente é identificado
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			enquanto ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "posição" ) === "estático" ) {

				offsetParent = offsetParent.parentNode;
			}
			se ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorpora bordas em seu deslocamento, pois elas estão fora de sua origem de conteúdo
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", verdadeiro );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", verdadeiro );
			}
		}

		// Subtrair deslocamentos dos pais e margens dos elementos
		retornar {
			topo: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			esquerda: offset.esquerda - parentOffset.esquerda - jQuery.css( elem, "marginLeft", true )
		};
	},

	// Este método retornará documentElement nos seguintes casos:
	// 1) Para o elemento dentro do iframe sem offsetParent, este método retornará
	// documentElement da janela pai
	// 2) Para o elemento oculto ou destacado
	// 3) Para o corpo ou elemento html, ou seja, no caso do nó html - ele retornará a si mesmo
	//
	// mas essas exceções nunca foram apresentadas como casos de uso da vida real
	// e podem ser considerados resultados mais preferíveis.
	//
	// Essa lógica, no entanto, não é garantida e pode mudar a qualquer momento no futuro
	offsetParent: função() {
		retornar this.map( função() {
			var offsetParent = this.offsetParent;

			enquanto ( offsetParent && jQuery.css( offsetParent, "posição" ) === "estático" ) {
				offsetParent = offsetParent.offsetParent;
			}

			retornar offsetParent || documentElement;
		} );
	}
} );

// Crie os métodos scrollLeft e scrollTop
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, função( método, prop ) {
	var topo = "pageYOffset" === prop;

	jQuery.fn[ método ] = função( val ) {
		retornar acesso(isto, função(elem, método, val) {

			// Unir documentos e janelas
			var ganhar;
			se (isWindow(elem)) {
				ganhar = elem;
			} senão se ( elem.nodeType === 9 ) {
				ganhar = elem.defaultView;
			}

			se ( val === indefinido ) {
				retornar vitória ? win[ prop ] : elem[ método ];
			}

			se (ganhar) {
				ganhar.scrollTo(
					!topo ?val : win.pageXOffset,
					topo ? val : win.pageYOffset
				);

			} outro {
				elem[ método ] = val;
			}
		}, método, val, argumentos.length );
	};
} );

// Suporte: Safari <=7 - 9.1, Chrome <=37 - 49
// Adicione os cssHooks superiores/esquerdos usando jQuery.fn.position
// Erro do Webkit: https://bugs.webkit.org/show_bug.cgi?id=29084
// Inseto piscante: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle retorna porcentagem quando especificado para superior/esquerda/inferior/direita;
// em vez de fazer o módulo css depender do módulo offset, basta verificar aqui
jQuery.each( [ "topo", "esquerda" ], função( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		função(elem, computado) {
			se (computado) {
				computado = curCSS( elem, prop );

				// Se curCSS retornar porcentagem, retornar para deslocamento
				retornar rnumnonpx.test(computado) ?
					jQuery(elem).position()[prop] + "px" :
					computado;
			}
		}
	);
} );


// Crie os métodos innerHeight, innerWidth, height, width, outerHeight e outerWidth
jQuery.each( { Altura: "altura", Largura: "largura" }, função( nome, tipo ) {
	jQuery.cada( {
		preenchimento: "interno" + nome,
		conteúdo: tipo,
		"": "externo" + nome
	}, função(defaultExtra, funcName) {

		// Margem é somente para outerHeight, outerWidth
		jQuery.fn[ funcName ] = função( margem, valor ) {
			var chainable = argumentos.length && ( defaultExtra || tipo de margem !== "booleano" ),
				extra = defaultExtra || ( margem === verdadeiro || valor === verdadeiro ? "margem" : "borda" );

			retornar acesso(isto, função(elem, tipo, valor) {
				var doc;

				se (isWindow(elem)) {

					// $( window ).outerWidth/Height retornar w/h incluindo barras de rolagem (gh-1729)
					retornar funcName.indexOf( "externo" ) === 0 ?
						elem[ "interno" + nome ] :
						elem.document.documentElement[ "cliente" + nome ];
				}

				// Obter largura ou altura do documento
				se ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Ou scroll[Largura/Altura] ou offset[Largura/Altura] ou client[Largura/Altura],
					// o que for maior
					retornar Math.max(
						elem.body[ "scroll" + nome ], doc[ "scroll" + nome ],
						elem.body[ "deslocamento" + nome ], doc[ "deslocamento" + nome ],
						doc[ "cliente" + nome ]
					);
				}

				valor de retorno === indefinido?

					// Obter largura ou altura no elemento, solicitando, mas não forçando parseFloat
					jQuery.css(elem, tipo, extra) :

					// Define largura ou altura no elemento
					jQuery.style(elem, tipo, valor, extra);
			}, tipo, encadeável ? margem : indefinido, encadeável );
		};
	} );
} );


jQuery.fn.extend( {

	bind: função(tipos, dados, fn) {
		retornar this.on(tipos, nulo, dados, fn);
	},
	desvincular: função(tipos, fn) {
		retornar this.off( tipos, nulo, fn );
	},

	delegado: função(seletor, tipos, dados, fn) {
		retornar this.on(tipos, seletor, dados, fn);
	},
	undelegate: função(seletor, tipos, fn) {

		// ( namespace ) ou ( seletor, tipos [, fn] )
		retornar argumentos.length === 1 ?
			this.off( seletor, "**" ) :
			this.off( tipos, seletor || "**", fn );
	},

	pairar: função(fnOver, fnOut) {
		devolva isso
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.cada(
	( "desfocar foco focar foco redimensionar rolar clicar clique duplo " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"alterar selecionar enviar tecla para baixo tecla para cima contextomenu" ).split( " " ),
	função( _i, nome ) {

		// Manipular associação de eventos
		jQuery.fn[ nome ] = função( dados, fn ) {
			retornar argumentos.length > 0 ?
				this.on(nome, nulo, dados, fn) :
				this.trigger(nome);
		};
	}
);




// Suporte: somente Android <=4.0
// Certifique-se de que cortamos BOM e NBSP
// Exigir que a "execução de espaço em branco" comece a partir de um espaço que não seja em branco
// para evitar o comportamento O(N^2) quando o mecanismo tenta corresponder "\s+$" em cada posição de espaço.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Vincule uma função a um contexto, aplicando opcionalmente parcialmente qualquer
// argumentos.
// jQuery.proxy foi descontinuado para promover padrões (especificamente Function#bind)
// No entanto, não está previsto que seja removido tão cedo
jQuery.proxy = função(fn, contexto) {
	var tmp, args, proxy;

	se (tipo de contexto === "string") {
		tmp = fn[ contexto ];
		contexto = fn;
		fn = tmp;
	}

	// Verificação rápida para determinar se o alvo pode ser chamado, na especificação
	// isso gera um TypeError, mas retornaremos apenas indefinido.
	se ( !isFunction( fn ) ) {
		retornar indefinido;
	}

	// Ligação simulada
	args = slice.call( argumentos, 2 );
	proxy = função() {
		retornar fn.apply( contexto || isto, args.concat( fatia.call( argumentos ) ) );
	};

	// Defina o guid do manipulador exclusivo para o mesmo do manipulador original, para que ele possa ser removido
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	retornar proxy;
};

jQuery.holdReady = função(hold) {
	se (manter) {
		jQuery.readyWait++;
	} outro {
		jQuery.ready( verdadeiro );
	}
};
jQuery.isArray = Matriz.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nome do nó;
jQuery.isFunction = éFunção;
jQuery.isWindow = éJanela;
jQuery.camelCase = camelCase;
jQuery.type = paraTipo;

jQuery.now = Data.now;

jQuery.isNumeric = função( obj ) {

	// A partir do jQuery 3.0, isNumeric é limitado a
	// strings e números (primitivos ou objetos)
	// que pode ser forçado a números finitos (gh-2662)
	var tipo = jQuery.type( obj );
	retornar ( tipo === "número" || tipo === "string" ) &&

		// parseFloat NaNs conversão numérica de falsos positivos ("")
		// ...mas interpreta incorretamente strings de números iniciais, particularmente literais hexadecimais ("0x...")
		// a subtração força infinitos a NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = função( texto ) {
	texto de retorno == nulo?
		"" :
		( texto + "" ).replace( rtrim, "$1" );
};



// Registre-se como um módulo AMD nomeado, pois o jQuery pode ser concatenado com outros
// arquivos que podem usar define, mas não por meio de um script de concatenação adequado que
// entende módulos AMD anônimos. Um AMD nomeado é o mais seguro e robusto
// maneira de registrar. O jquery em minúsculas é usado porque os nomes dos módulos AMD são
// derivado de nomes de arquivo, e jQuery normalmente é entregue em letras minúsculas
// nome do arquivo. Faça isso depois de criar o global para que, se um módulo AMD quiser
// para chamar noConflict para ocultar esta versão do jQuery, funcionará.

// Observe que para portabilidade máxima, bibliotecas que não são jQuery devem
// declaram-se como módulos anônimos e evitam definir um global se um
// O carregador AMD está presente. jQuery é um caso especial. Para mais informações, veja
// https://github.com/jrburke/requirejs/wiki/Updating-existente-libraries#wiki-anon

se ( tipo de define === "função" && define.amd ) {
	define( "jquery", [], função() {
		retornar jQuery;
	} );
}




var

	// Mapear sobre jQuer y em caso de substituição
	_jQuery = janela.jQuery,

	// Mapear o $ em caso de substituição
	_$ = janela.$;

jQuery.noConflict = função(profunda) {
	se ( janela.$ === jQuery ) {
		janela.$ = _$;
	}

	se (profundo && janela.jQuery === jQuery) {
		janela.jQuery = _jQuery;
	}

	retornar jQuery;
};

// Exponha os identificadores jQuery e $, mesmo em AMD
// (trac-7102#comentário:10, https://github.com/jquery/jquery/pull/557)
// e CommonJS para emuladores de navegador (trac-13566)
se ( typeof noGlobal === "indefinido" ) {
	janela.jQuery = janela.$ = jQuery;
}




retornar jQuery;
} );