import { Controller } from "stimulus"

export default class extends Controller {
  initialize(){
    console.log("hi books")

    if ($("#list-books").is(':visible')){
      this.draw_books_table();
    }

    if ($("#myChart").is(':visible')){
      this.draw_books_graph();
    }
  }

  draw_books_table(){
    $('#list-books').DataTable();
  }

  validate_form(){
    $("#books-form").validate();
  }

  draw_books_graph(){
    // this.draw_books_table();
    fetch(`/books/list_all`, {
      headers: { accept: 'application/json'}
    }).then((response) => response.json())
      .then(data => {
        this.chartLabelsValue = data.dates
        this.chartDatacountsValue = data.counts
        this.fill_data_in_chartjs()
      });
  }

  fill_data_in_chartjs(){
    var labels = this.chartLabelsValue
    var data_counts = this.chartDatacountsValue
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '# of Votes',
          data: data_counts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
