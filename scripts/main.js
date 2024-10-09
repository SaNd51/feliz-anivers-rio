function modal(){
    var html = `
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="grid-itens">
            <div class="align-center">
              <h1 class="mb">Happy Birthday!</h1>
              <h1 class="mb">🎉🎂🎉</h1> 
            </div>
            <audio autoplay loop>
              <source src="assets/audio.mp3 " type="audio/mpeg"/>
            </audio>
            <div class="grid-itens">
              <div class="mb">
                <img src="assets/bear-kiss.gif" style="width: 40%;">
              </div>
              <div  class="frame mb">
                <img src="assets/love-kiss.gif"  class="frame">
              </div>
            </div>
          </div>
        </div>
      </div>`
    $('#Modal').html(html);
}