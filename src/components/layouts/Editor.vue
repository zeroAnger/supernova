<template>
  <QuillEditor theme="snow"></QuillEditor>
  <!-- <div id="mytoolbar">
    <button class="ql-bold"></button>
    <button class="ql-italic"></button>
  </div> -->
</template>
<script>
const toolbarOptions = [["bold", "italic", "underline", "strike"], [{ list: "ordered" }, { list: "bullet" }], ["blockquote"], ["code-block", "image", "link"]];
export default {
  name: "Editor",
  data() {
    return {
      content: null,
      editorOption: {
        modeles: {
          toolbar: toolbarOptions,
          syntax: {
            highlight: (text) => {
              return hljs.highlightAuto(text).value;
            },
            theme: "snow",
            placeholder: "请输入题干"
          }
        }
      }
    };
  },
  methods: {
    onEditorBlur() {},
    onEditorFocus() {},
    onEditorChange() {}
  }
};
</script>
