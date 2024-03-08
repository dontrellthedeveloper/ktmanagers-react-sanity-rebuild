document
	.getElementById('dialog')
  .addEventListener(
  	'click',
    ((event) => {
      let rect = event.target.getBoundingClientRect();
      
      console.log(
                  `
                  ClientX: ${event.clientX}
                  rect.left: ${rect.left}
                  rect.right: ${rect.right}

                  ClientY: ${event.clientY}
                  rect.top: ${rect.left}
                  rect.bottom: ${rect.bottom}
                  `
                 );
    	if (rect.left > event.clientX ||
          rect.right < event.clientX ||
          rect.top > event.clientY ||
          rect.bottom < event.clientY
      ) {
          window.dialog.close();
      }
    })
  );