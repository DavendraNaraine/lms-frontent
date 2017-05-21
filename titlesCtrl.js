app.controller('titlesController', function($scope, $http) {
		console.log("Titles here");
	
		$scope.addBook = function(book) {
			$scope.books.push(book);
		}
		
		$scope.getBooks = function() {
			$http({
				"url": "/librarymanagementsystem/index.php/v1/titles",
				"method": "GET",
			}).then(function(success_response) {
				$scope.books = success_response.data
			}, function(error_response) {
				console.error(error_response);
			}).finally(function() {
				console.log("Done");
			})
		}
		
		$scope.getBooks();
	
		$scope.edit_book = function(book) {
			$http({
				url: "/librarymanagementsystem/index.php/v1/titles/" + book.book_id,
				method: "PATCH",
				data: {
						ug_id: book.ug_id,
						condition_id: book.condition_id
				}
			}).then(function(success) {
					console.log("Good");
			}, function(error) {
					console.error("Bad");
			}).finally(function() {
					$scope.getBooks();
			})
		}
		
		$scope.delete_book = function(book) {
			$http({
				url: "/librarymanagementsystem/index.php/v1/titles/" + book.book_id,
				method: "DELETE",
			}).then(function(success) {
					console.log("Good");
			}, function(error) {
					console.error("Bad");
			}).finally(function() {
					$scope.getBooks();
			})
		}
		
			$scope.add_book = function(book) {
			$http({
				url: "/librarymanagementsystem/index.php/v1/titles/",
				method: "POST",
					data: {
						title_id: book.title_id,
						bookid: book.ug_id,
						conditionid: book.condition_id
				}
			}).then(function(success) {
					console.log("Good");
			}, function(error) {
					console.error("Bad");
			}).finally(function() {
					$scope.getBooks();
			})
		}
  });