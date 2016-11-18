via jquery plugin

```html
<script src="jquery.js"></script>
<script src="inputmask.js"></script>
<script src="inputmask.phone164.extensions.js"></script>
<script src="jquery.inputmask.js"></script>
```

Поддерживаются форматы телефонов: РФ, Республика Беларусь, Украина и Казахстан

```js
$(document).ready(function(){
  $("id=phone_input").inputmask('phone164');
  or
  Inputmask('phone164').mask(document.querySelectorAll("input"));
});
```
