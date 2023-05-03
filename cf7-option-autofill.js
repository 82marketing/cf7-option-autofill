<script>
document.addEventListener('DOMContentLoaded', function() {
    // Find the select field by ID (use the css ID in your CF7 form option)
    var selectField = document.getElementById('your-option');

    // If the select field is not found, exit the function
    if (!selectField) {
        return;
    }

    // Get the referral URL
    var referrerURL = document.referrer.toLowerCase();

    var maxMatchCount = 0;
    var bestMatchOption = null;

    // Function to split text into words
    function splitWords(text) {
        return text.match(/\b\w+\b/g);
    }

    // Split the referral URL into words
    var urlWords = splitWords(referrerURL);

    // Loop through the options in the select field
    Array.from(selectField.options).forEach(function(option) {
        // Split the option text into words
        var optionWords = splitWords(option.text.toLowerCase());

        // Initialize match count for this option
        var matchCount = 0;

        // Check if any word in the option text is present in the referral URL
        for (var j = 0; j < optionWords.length; j++) {
            if (urlWords.indexOf(optionWords[j]) !== -1) {
                matchCount++;
            }
        }

        // Update the best match if the current option has more matches
        if (matchCount > maxMatchCount) {
            maxMatchCount = matchCount;
            bestMatchOption = option;
        }
    });

    // If a best match is found, set the corresponding option as selected
    if (bestMatchOption) {
        bestMatchOption.selected = true;
    }
});
</script>
