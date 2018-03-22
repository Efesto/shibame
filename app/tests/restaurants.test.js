const restaurants = require('../restaurants');

describe('#extractMenu', () => {  
  it('returns a nice formatted menu', () => {
    const expectedEntry = 'Montag, 19.03.2018';
    const body = '<div id="c449"><h2 class="text-center">Quicklunchangebot <br>vom 19.03. - 23.03.2018</h2><p><strong><em>Montag, 19.03.2018</em></strong> </p> <p>Bratwurst<sub>(G,J,4,6)</sub> an Rahmgemüse<sub>(A,G)</sub> und Selleriepüree<sub>(G,I)</sub> </p> <p><strong><em>Dienstag, </em></strong><strong><em><strong><em>20.03</em></strong>.2018</em></strong> </p> <p>Putensteak mit Romanesco, holländischer Soße<sub>(C,G)</sub> und Kartoffelkroketten<sub>(A)</sub> </p> <p><strong><em>Mittwoch, </em></strong><strong><em><strong><em>21.03</em></strong>.2018</em></strong> </p> <p>Tranchen vom Schweinefilet auf in Pfeffersoße<sub>(A,N) </sub>geschwenkten Nudeln<sub>(A,C)</sub> </p> <p><strong><em>Donnerstag, 22.03.2018</em></strong> </p> <p>Schweineschnitzel<sub>(A,C)</sub> auf Käse-Lauchsoße<sub>(A,G)</sub>, dazu Pommes frites<sub>(6)</sub> </p> <p><strong><em>Freitag, 23.03.2018</em></strong> </p> <p>Gebratener Seehecht<sub>(A,D)</sub> mit Reis, Schnittlauchsoße<sub>(A,G)</sub> und Gurkensalat<sub>(N)</sub></p></div>';
    const extractedMenu = restaurants.extractMenu(body);
    expect(extractedMenu).toMatch(expectedEntry);    
  })
})