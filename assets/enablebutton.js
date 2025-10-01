  const toggle = document.getElementById('myToggle');
  const featureEnabled = localStorage.getItem('featureEnabled') === 'true';
  toggle.checked = featureEnabled;

  // Your global variable
  let isFeatureEnabled = featureEnabled;

  // Listener to update on toggle
  toggle.addEventListener('change', () => {
    isFeatureEnabled = toggle.checked;

    // Save to localStorage
    localStorage.setItem('featureEnabled', isFeatureEnabled);

    // Enable/Disable your feature
    if (isFeatureEnabled) {
      enableYourFeature();
    } else {
      disableYourFeature();
    }
  });

  // Optionally enable feature on load if it was already on
  if (isFeatureEnabled) {
    enableYourFeature();
  }

  // Example functions
  function enableYourFeature() {
    console.log('Feature Enabled');
    // Your logic here
  }

  function disableYourFeature() {
    console.log('Feature Disabled');
    // Your logic here
  }