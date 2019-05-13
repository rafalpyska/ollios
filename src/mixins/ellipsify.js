export default {
  methods: {
    // Shorten string by a given number of characters
    ellipsify(string, charNumber) {
      if(string.length > charNumber) {
        return (string.substring(0, charNumber) + "...");
      } else {
        return string;
      }
    }
  }
}
