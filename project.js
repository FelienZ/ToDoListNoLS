const namaTugas = document.getElementById('nama');
const tombol = document.querySelector('form');
const list = document.querySelector('table');

tombol.addEventListener('submit',function(e){
    e.preventDefault();
    if(namaTugas.value == ''){
        alert('Masukkan Nama Tugas!')
    }else{
    //membuat elemen yang dipakai
    const isi = document.createElement('tr');
    const nama = document.createElement('td')
    const stat = document.createElement('td')
    const aksi = document.createElement('td')
    const edit = document.createElement('button');
    const simpan = document.createElement('button');
    const hapus = document.createElement('button');

    edit.innerHTML ='<i class="fa-solid fa-pen-to-square"></i>';
    simpan.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
    hapus.innerHTML = '<i class="fa-solid fa-trash"></i>';

    nama.textContent = namaTugas.value; 
    stat.innerHTML = 'Status: ';
    const pilihan = document.createElement('select');
    const isiPilihan1 = document.createElement('option')
    const isiPilihan2 = document.createElement('option')
    isiPilihan1.setAttribute('value','Sudem');
    isiPilihan1.innerHTML = 'On Progress';
    isiPilihan2.setAttribute('value','Belom');
    isiPilihan2.innerHTML = 'Done';



    aksi.appendChild(edit);
    aksi.appendChild(simpan);
    aksi.appendChild(hapus);

    //Memasukkan Node
    pilihan.appendChild(isiPilihan1);
    pilihan.appendChild(isiPilihan2);
    stat.appendChild(pilihan);
    isi.appendChild(nama);
    isi.appendChild(stat);
    isi.appendChild(aksi)
    list.appendChild(isi);

    edit.addEventListener('click',function(){
        nama.innerHTML = '';
        const Baru  = nama;
        const namaBaru = document.createElement('input');
        
        Baru.appendChild(namaBaru);

        simpan.addEventListener('click', function(){
            if(namaBaru.value != ''){
            nama.innerHTML = namaBaru.value;
            namaBaru.replaceWith(nama);
            }else{
            alert('Masukkan Nama Tugas!');  
            }
        })
    })
    hapus.addEventListener('click',function(){
        isi.remove();
    }) 
}})
