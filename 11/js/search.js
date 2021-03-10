const formOpenButton = document.querySelector(".form-open");
const searchForm = document.querySelector(".search-form");
const checkInDate = searchForm.querySelector("[name=check-in-date]");
const checkOutDate = searchForm.querySelector("[name=check-out-date]");
const adults = searchForm.querySelector("[name=number-of-adults]");
const kids = searchForm.querySelector("[name=number-of-kids]");

let isStorageSupport = true;
let storage = "";

try {
  storageKids = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageAdults = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

if (isStorageSupport) {
  adults.value = storageAdults
  kids.value = storageKids
};

formOpenButton.addEventListener("click", function () {
  if (searchForm.classList.contains("search-form-hide")) {
    searchForm.classList.remove("search-form-hide");
    searchForm.classList.add("search-form-open");
    checkInDate.focus();
  } else {
    searchForm.classList.remove("search-form-open");
    searchForm.classList.add("search-form-hide")
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (!checkInDate.value || !checkOutDate.value || !adults.value || !kids.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("kids", kids.value)
    }
  }
});
