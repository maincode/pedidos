
 function ListaPedidosController($scope) {
    $scope.itens = [
        {telefone: '976840689', status: 'Preparando'},
        {telefone: '968588525', status: 'Saiu para entrega'}
    ];

    $scope.adicionaItem = function () {
    $scope.itens.push({telefone: $scope.item.telefone,
                       status:'Preparando'});
     $scope.item.telefone = ' ';
    };

}