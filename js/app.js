require(
  ['https://code.jquery.com/jquery-3.1.1.js','model','view','controller'],
  function(){
    $(function(){
      var list = ['test1','test2','test3'];
      var model = new Model(list);
      var view = new View(model);
      var controller = new Controller(model, view);
    });
  }
);
