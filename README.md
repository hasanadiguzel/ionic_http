# ionic_http

ionic http;

herhangi bir http üzerinden json çekilecekse

https://angular.io/guide/http

angular.io > httpclientmodule | httpclient

app-module.ts > HttpClientModule > imports add

home.page.ts > HttpClient > angular

create function - name veriListele()

return this.http.get('https://jsonplaceholder.typicode.com/users');

veri: any;

//üye olmak, işlemin bitmesini bekler
this.veriListele().subscribe(sonuc => {this.veri = sonuc;}, e => {console.log(e);})

servis get
