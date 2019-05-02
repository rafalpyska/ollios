export default {
  methods: {
    ellipsify(string, charNumber) {
      if(string.length > charNumber) {
        return (string.substring(0, charNumber) + "...");
      } else {
        return string;
      }
    }
  }
}
