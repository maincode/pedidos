 function ListaPedidosController($scope) {
    $scope.itens = [
        {telefone: '976840689', status: 'Preparando'}
    ];

    $scope.adicionaItem = function () {
    $scope.itens.push({telefone: $scope.item.telefone,
                       status:'Preparando'});
     $scope.item.telefone = ' ';
     $scope.sendPush();
    };

    $scope.sendPush = function () {
		Parse.initialize("8EuvtU751IPG6V7whmY0Ot8EHHcrQOKwehqZS54b", "D0BwOlwWL63eUEHo12KHkpNZg1NJr9jKkzPPq9Jc");	

	    var query = new Parse.Query(Parse.Installation);
		 query.equalTo('deviceType', 'android');
		Parse.Push.send({
		  where: query, // Set our Installation query
		  data: {
		    alert: "send notification by js."		  
			}
		}, {
		  success: function() {
		    // Push was successful
		  },
		  error: function(error) {
		    // Handle error
		  }
		});
    
    };

}