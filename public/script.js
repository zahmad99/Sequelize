const request = await fetch('/api')

async function fetchDiningHall() {
    const response = await fetch('/DiningHall');
    // waits until the request completes...
    console.log(response);
  }