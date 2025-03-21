export type eventsDataT = {
  city: string;
  address: string;
  place: string;
  date: string;
  time: string;
  infoText: string;
  mapsLink: string;
}

export const eventsData: eventsDataT[] = [
  {
    city: "Bonyhád",
    address: "Dózsa György utca 67",
    place: "Evangélikus templom",
    date: "Április 23",
    time: "18:00",
    infoText: "A belépés díjtalan, de adományokat elfogadunk.",
    mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1376663.1564460795!2d19.49596158432944!3d47.745190530130984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742949589af6c2d%3A0xf82d37751ffd90df!2zQm9ueWjDoWQtSGlkYXNpIEV2YW5nw6lsaWt1cyBFZ3low6F6a8O2enPDqWcgdGVtcGxvbWE!5e0!3m2!1sde!2sde!4v1742409143351!5m2!1sde!2sde"
  },
  {
    city: "Kistelek",
    address: "Kossuth Lajos utca 6",
    place: "Katolikus templom",
    date: "Április 24",
    time: "18:00",
    infoText: "A belépés díjtalan, de adományokat elfogadunk. (A maps linket es a cimet le kell csekkolni)",
    mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1437535.0984928817!2d18.991432044392635!3d47.312676902017785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474389cd7e0f033b%3A0x2c487ef7dcf7b7b9!2sKatolikus%20templom!5e0!3m2!1sde!2sde!4v1742409195227!5m2!1sde!2sde"
  },
  {
    city: "Budafok",
    address: "Játék utca 14 (?)",
    place: "Evangélikus templom",
    date: "Április 25",
    time: "18:00",
    infoText: "A belépés díjtalan, de adományokat elfogadunk.",
    mapsLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1655436.2768116337!2d19.209348401161243!3d46.6554029749615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741e79c9fe311e9%3A0xe9809bc779a739c3!2zQnVkYWZva2kgRXZhbmfDqWxpa3VzIEVneWjDoXprw7Z6c8OpZw!5e0!3m2!1sde!2sde!4v1742409010168!5m2!1sde!2sde"
  },
]

/**
 * <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1437535.0984928817!2d18.991432044392635!3d47.312676902017785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474389cd7e0f033b%3A0x2c487ef7dcf7b7b9!2sKatolikus%20templom!5e0!3m2!1sde!2sde!4v1742409195227!5m2!1sde!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 */