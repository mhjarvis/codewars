function usdcny(usd) {
    return `${(Math.round((usd * 6.75) * 100) / 100).toFixed(2)} Chinese Yuan`;
  }