 function ListaPedidosController($scope) {
 	Parse.initialize("8EuvtU751IPG6V7whmY0Ot8EHHcrQOKwehqZS54b", "D0BwOlwWL63eUEHo12KHkpNZg1NJr9jKkzPPq9Jc");	

    $scope.itens = [
        {telefone: '976840689', status: 'Preparando', btnClass: 'btn btn-danger'}
    ];

    $scope.adicionaItem = function () {
    $scope.itens.push({telefone: $scope.item.telefone,
                       status:'Preparando', btnClass: 'btn btn-danger'});
     $scope.item.telefone = ' ';
     $scope.sendPush();
    };

    $scope.sendPush = function () {

	    var query = new Parse.Query(Parse.Installation);
		 query.equalTo('deviceType', 'android');
		Parse.Push.send({
		  where: query, // Set our Installation query
		  data: {
		    alert: "seu pedido está sendo preparado.",
		    action: "status.time", 
		    order_id: "mHaKYzRKLp"	  
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

        $scope.sendPush2 = function (n) {

        $scope.itens[n].status = 'saiu para entrega';
        $scope.itens[n].btnClass ='btn btn-warning';


	    var query = new Parse.Query(Parse.Installation);
		 query.equalTo('deviceType', 'android');
		Parse.Push.send({
		  where: query, // Set our Installation query
		  data: {
		    alert: "seu pedido saiu para entrega.",
		    action: "status.time", 
		    order_id: "mHaKYzRKLp"	  
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