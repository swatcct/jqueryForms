# jqueryForms
Plugin of jquery for generate forms

Version: 1.0.0
The current version of the plugin has the characteristic of generating forms with open questions and Boolean from an array with objects with the values of question and type.

In next versions will be added the configuration of css tags and the integration of headers to the form.

Example of use

```
<div id="jsForm"></div>
<script>
  $('#jsForm').jsForms({
     'color': '#fff',//Optional value
     'width': '80%',//Optional value
     'margin': '0',//Optional value
     'fields': [] //Array with the values of the formulary
  });
</script>
```
