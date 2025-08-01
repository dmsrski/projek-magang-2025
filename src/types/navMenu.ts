export interface NavChild {
  name: string;
  href: string;
}

export interface NavItem {
  name: string;
  href?: string;
  children?: NavChild[];
}

// 2. Data NAV_MENU yang sudah sesuai interface
const NAV_MENU: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Berita", href: "/berita" },
  {
    name: "Pemerintah Kota Madiun",
    children: [
      { name: "PPID Kota Madiun", href: "https://ppid.madiunkota.go.id/" },
      { name: "Kecamatan Taman", href: "#" },
      { name: "Maguharjo", href: "https://kecamatan-manguharjo.madiunkota.go.id/" },
      { name: "Kartoharjo", href: "http://kecamatan-kartoharjo.madiunkota.go.id/" },
    ],
  },
  {
    name: "Kelurahan",
    children: [
      { name: "Kelurahan Taman", href: "http://kecamatan-kartoharjo.madiunkota.go.id/" },
      { name: "Kelurahan Banjarejo", href: "https://kelurahan-banjarejo.madiunkota.go.id/" },
      { name: "Kelurahan Demangan", href: "https://kelurahan-demangan.madiunkota.go.id/" },
      { name: "Kelurahan Kejuron", href: "https://kelurahan-kejuron.madiunkota.go.id/" },
      { name: "Kelurahan Josenan", href: "https://kelurahan-josenan.madiunkota.go.id/" },
      { name: "Kelurahan Pandean", href: "https://kelurahan-pandean.madiunkota.go.id/" },
      { name: "Kelurahan Manisrejo", href: "https://kelurahan-manisrejo.madiunkota.go.id/" },
      { name: "Kelurahan Mojorejo", href: "https://kelurahan-mojorejo.madiunkota.go.id/" },
      { name: "Kelurahan Kuncen", href: "https://kelurahan-kuncen.madiunkota.go.id/" },
      { name: "Prodeskel PMD", href: "https://prodeskel.binapemdes.kemendagri.go.id/mpublik/" },
    ],
  },
  {
    name: "Tentang",
    children: [
      { name: "Profil OPD", href: "/category/tentang/profil-opd" },
      { name: "Profil Camat Taman Kota Madiun", href: "category/tentang/profil-camat" },
      { name: "Visi Dan Misi", href: "#" },
      { name: "STANDAR PELAYANAN KECAMATAN TAMAN TAHUN 2024 (6 Komponen)", href: "#" },
      { name: "Data Pegawai", href: "#" },
      { name: "Tupoksi", href: "#" },
      { name: "SK", href: "#" },
      { name: "Struktur Organisasi", href: "#" },
      { name: "Maklumat Pelayanan", href: "#" },
    ],
  },
  {
    name: "PPID",
    children: [
      { name: "Kontak, Struktur Organisasi, Visi Misi PPID Kecamatan Taman", href: "/category/ppid/kontak" },
      { name: "TUGAS DAN FUNGSI PPID PELAKSANA KECAMATAN TAMAN", href: "#" },
      { name: "Informasi Secara Berkala", href: "#" },
      { name: "SK PPID", href: "#" },
      { name: "Informasi Setiap Saat", href: "#" },
      { name: "Informasi Serta Merta", href: "#" },
      { name: "Informasi Dikecualikan", href: "#" },
      { name: "Laporan PPID", href: "#" },
      { name: "Daftar Informasi Publik Kecamatan Taman", href: "#" },
    ],
  },
  {
    name: "Layanan Publik",
    children: [
      { name: "Jam Pelayanan Kecamatan Taman", href: "#" },
      { name: "Standar Pelayanan Kecamatan Taman", href: "#" },
      { name: "Rekapitulasi Umpan Balik Konsultasi Dan Pengaduan Di Kecamatan Taman", href: "#" },
      { name: "RINGKASAN PERMOHONAN INFORMASI PUBLIK KECAMATAN TAMAN TAHUN 2022", href: "#" },
      { name: "Permohonan Informasi Publik", href: "#" },
      { name: "Pengajuan Keberatan Informasi", href: "#" },
      { name: "INOVASI", href: "#" },
    ],
  },
  {
    name: "Hubungi Kami",
    children: [
      { name: "TATA CARA PERMOHONAN INFORMASI PUBLIK", href: "#" },
      { name: "TATA CARA PENGAJUAN KEBERATAN DAN PROSES PENYELESAIAN SENGKETA INFORMASI PUBLIK", href: "#" },
      { name: "Tata Cara Aspirasi Dan Pengaduan Masyarakat", href: "#" },
      { name: "APLIKASI ONLINE KECAMATAN TAMAN", href: "#" },
    ],
  },
  { name: "FAQ", children: [] },
  { name: "VISIT TAMAN", children: [] },
  { name: "JALUR WISATA", children: [] },
];

export default NAV_MENU;
