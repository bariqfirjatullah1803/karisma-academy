import Navbar from "./components/Navbar.jsx";
import backgroundJumbotron from './assets/images/bg-jumbotron.webp';
import certificateIcon from './assets/images/check-serti.png';
import couponIcon from './assets/images/use-coupon.png';
import dashboardImage from './assets/images/dashboard-2.png';
import serverIcon from './assets/images/server.png';
import serverIcon2 from './assets/images/server2.png';
import serverIcon3 from './assets/images/server3.png';
import robotIcon from './assets/images/robot.png';
import liveIcon from './assets/images/live-logo.png';
import platformIcon from './assets/images/platform.png';
import {Parallax} from "react-parallax";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faArrowRight, faStar} from "@fortawesome/free-solid-svg-icons";

export default function App() {
    return (
        <div>
            <Navbar/>
            <Parallax bgImage={backgroundJumbotron} strength={80}>
                <div className={'h-screen px-36 flex flex-col justify-center'}>
                    <h3 className={'text-white font-bold text-3xl w-2/6'}>Belajar Mandiri Dengan Dukungan Penuh,</h3>
                    <h1 className={'text-white font-extrabold text-4xl w-2/6'}>Seperti Kelas Offline</h1>
                    <p className={'text-white font-normal text-xl w-3/6 pt-2'}>Kursus blended learning dijamin
                        #PastiBisa, dengan sesi konsultasi bersama instruktur kapan
                        saja.</p>
                    <div className={'flex flex-row gap-4 items-center mt-5'}>
                        <a href={'#'}
                           className={'w-auto h-14 px-8 rounded-full bg-[#FFA737] font-normal text-l text-white flex flex-row items-center gap-3'}>
                            Coba Gratis
                        </a>
                        <a href={'#'}
                           className={'w-auto h-14 px-8 rounded-full bg-[#36B8CB] font-normal text-l text-white flex flex-row items-center gap-3'}>
                            <FontAwesomeIcon icon={faPlay}/>
                            Apa itu Kursus Online
                        </a>
                    </div>
                </div>
            </Parallax>
            <div className={'bg-[#FFA737] h-auto px-36 py-6'}>
                <div className={'flex flex-row items-center gap-5'}>
                    <h3 className={'text-white text-2xl font-semibold'}>Pilihan Paket Kelas</h3>
                    <a href={'#'} className={'bg-[#E8225A] text-white py-2 px-4 rounded-lg'}>Lihat Semua</a>
                </div>
            </div>
            <div className={'px-36 py-3 h-auto bg-white'}>
                <div
                    className={`my-6 rounded-3xl p-10 bg-[url('./src/assets/images/bg-prakerja.png')] bg-no-repeat bg-cover bg-right-top`}>
                    <h1 className={'text-white font-normal text-3xl w-3/5'}>Punya kupon <span
                        className={'font-semibold'}>Pelatihan Prakerja?</span> Pakai
                        kuponnya atau cek sertifikat prakerja anda.</h1>
                    <div className={'flex flex-row gap-4 items-center mt-5'}>
                        <a href={'#'}
                           className={'w-auto h-16 px-6 rounded-full bg-[#FFA737] font-semibold text-xl text-white flex flex-row items-center gap-3'}>
                            <img src={couponIcon} className={'w-10'}/>
                            Gunakan Kupon
                        </a>
                        <a href={'#'}
                           className={'w-auto h-16 px-6 rounded-full bg-white font-semibold text-xl text-black flex flex-row items-center gap-3'}>
                            <img src={certificateIcon} className={'w-10'}/>
                            Cek Sertifikat
                        </a>
                    </div>
                </div>
                <div
                    className={`my-6 rounded-3xl p-10 bg-[url('./src/assets/images/bg-prakerja2.png')] bg-no-repeat bg-cover `}>
                    <h1 className={'text-black font-semibold text-3xl w-3/5 capitalize'}>Pelatihan kartu prakerja</h1>
                    <p className={'w-3/5 leading-normal'}>Karisma Academy adalah Lembaga pelatihan resmi Program Kartu
                        Prakerja yang menyediakan berbagai
                        pelatihan bersertifikat dalam berbagai bidang keahlian.</p>
                    <div className={'flex flex-row gap-4 items-center mt-5'}>
                        <a href={'#'}
                           className={'w-auto h-14 px-10 rounded-full bg-[#FFA737] font-semibold text-xl text-white flex flex-row items-center gap-3'}>
                            Kelas Prakerja
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={'px-36 py-3 h-auto bg-[#EFF4FC]'}>
                <div className={'w-auto flex flex-col items-center my-5'}>
                    <h1 className={'text-center text-4xl font-bold my-10'}>Kelas Prakerja</h1>
                    <div className={'grid grid-cols-4 gap-4'}>
                        <div className={'flex flex-col rounded-xl bg-white drop-shadow-lg'}>
                            <img
                                src={'https://hybrid.karismaacademy.com/upload/banner_mapel/0b482f773f9010f5aefae0292b225064.png'}
                                className={'object-cover rounded-t-3xl'}/>
                            <div className={'px-2 py-3'}>
                                <h1 className={'font-semibold text-xl '}>Adobe Photoshop</h1>
                                <p className={'leading-tight font-normal text-justify'}>Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.</p>
                                <div className={'flex flex-row justify-between items-center mt-10'}>
                                    <p className={'font-medium'}>Rp 1,500,000</p>
                                    <div className={'text-yellow-400 flex flex-row gap-1 items-center'}>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <p className={'text-gray-500'}>(20)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col rounded-xl bg-white drop-shadow-lg'}>
                            <img
                                src={'https://hybrid.karismaacademy.com/upload/banner_mapel/b03ee1f9a25d44955b27c2c81fe928dc.png'}
                                className={'object-cover rounded-t-3xl'}/>
                            <div className={'px-2 py-3'}>
                                <h1 className={'font-semibold text-xl '}>Pemrograman Website</h1>
                                <p className={'leading-tight font-normal text-justify'}>Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.</p>
                                <div className={'flex flex-row justify-between items-center mt-10'}>
                                    <p className={'font-medium'}>Rp 1,500,000</p>
                                    <div className={'text-yellow-400 flex flex-row gap-1 items-center'}>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <p className={'text-gray-500'}>(20)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col rounded-xl bg-white drop-shadow-lg'}>
                            <img
                                src={'https://hybrid.karismaacademy.com/upload/banner_mapel/4d1b667e06db9e13dd5eb583e09236fc.png'}
                                className={'object-cover rounded-t-3xl'}/>
                            <div className={'px-2 py-3'}>
                                <h1 className={'font-semibold text-xl '}>Corel Draw</h1>
                                <p className={'leading-tight font-normal text-justify'}>Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.</p>
                                <div className={'flex flex-row justify-between items-center mt-10'}>
                                    <p className={'font-medium'}>Rp 1,500,000</p>
                                    <div className={'text-yellow-400 flex flex-row gap-1 items-center'}>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <p className={'text-gray-500'}>(20)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col rounded-xl bg-white drop-shadow-lg'}>
                            <img
                                src={'https://hybrid.karismaacademy.com/upload/banner_mapel/3800fb2015910fcbaf8414b377a3f846.png'}
                                className={'object-cover rounded-t-3xl'}/>
                            <div className={'px-2 py-3'}>
                                <h1 className={'font-semibold text-xl '}>Microsoft Excel</h1>
                                <p className={'leading-tight font-normal text-justify'}>Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.</p>
                                <div className={'flex flex-row justify-between items-center mt-10'}>
                                    <p className={'font-medium'}>Rp 1,500,000</p>
                                    <div className={'text-yellow-400 flex flex-row gap-1 items-center'}>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <p className={'text-gray-500'}>(20)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col rounded-xl bg-white drop-shadow-lg'}>
                            <img
                                src={'https://hybrid.karismaacademy.com/upload/banner_mapel/0b482f773f9010f5aefae0292b225064.png'}
                                className={'object-cover rounded-t-3xl'}/>
                            <div className={'px-2 py-3'}>
                                <h1 className={'font-semibold text-xl '}>Adobe Photoshop</h1>
                                <p className={'leading-tight font-normal text-justify'}>Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.</p>
                                <div className={'flex flex-row justify-between items-center mt-10'}>
                                    <p className={'font-medium'}>Rp 1,500,000</p>
                                    <div className={'text-yellow-400 flex flex-row gap-1 items-center'}>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <p className={'text-gray-500'}>(20)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col rounded-xl bg-white drop-shadow-lg'}>
                            <img
                                src={'https://hybrid.karismaacademy.com/upload/banner_mapel/b03ee1f9a25d44955b27c2c81fe928dc.png'}
                                className={'object-cover rounded-t-3xl'}/>
                            <div className={'px-2 py-3'}>
                                <h1 className={'font-semibold text-xl '}>Pemrograman Website</h1>
                                <p className={'leading-tight font-normal text-justify'}>Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.</p>
                                <div className={'flex flex-row justify-between items-center mt-10'}>
                                    <p className={'font-medium'}>Rp 1,500,000</p>
                                    <div className={'text-yellow-400 flex flex-row gap-1 items-center'}>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <p className={'text-gray-500'}>(20)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col rounded-xl bg-white drop-shadow-lg'}>
                            <img
                                src={'https://hybrid.karismaacademy.com/upload/banner_mapel/4d1b667e06db9e13dd5eb583e09236fc.png'}
                                className={'object-cover rounded-t-3xl'}/>
                            <div className={'px-2 py-3'}>
                                <h1 className={'font-semibold text-xl '}>Corel Draw</h1>
                                <p className={'leading-tight font-normal text-justify'}>Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.</p>
                                <div className={'flex flex-row justify-between items-center mt-10'}>
                                    <p className={'font-medium'}>Rp 1,500,000</p>
                                    <div className={'text-yellow-400 flex flex-row gap-1 items-center'}>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <p className={'text-gray-500'}>(20)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col rounded-xl bg-white drop-shadow-lg'}>
                            <img
                                src={'https://hybrid.karismaacademy.com/upload/banner_mapel/3800fb2015910fcbaf8414b377a3f846.png'}
                                className={'object-cover rounded-t-3xl'}/>
                            <div className={'px-2 py-3'}>
                                <h1 className={'font-semibold text-xl '}>Microsoft Excel</h1>
                                <p className={'leading-tight font-normal text-justify'}>Lorem Ipsum is simply dummy text
                                    of the printing and typesetting industry.</p>
                                <div className={'flex flex-row justify-between items-center mt-10'}>
                                    <p className={'font-medium'}>Rp 1,500,000</p>
                                    <div className={'text-yellow-400 flex flex-row gap-1 items-center'}>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <FontAwesomeIcon icon={faStar}/>
                                        <p className={'text-gray-500'}>(20)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href={'#'}
                       className={'mt-10 w-fit h-16 px-6 rounded-full bg-[#FFA737] font-semibold text-xl text-white flex flex-row items-center gap-3'}>
                        Lihat lebih banyak
                    </a>
                </div>
                <div className={'w-auto flex flex-col my-5'}>
                    <h1 className={'text-center text-4xl font-bold my-10'}>Biaya Hemat, Kualitas Hebat</h1>
                    <div className={'grid grid-cols-5 gap-5'}>
                        <div className={'col-span-2'}>
                            <img src={dashboardImage}/>
                        </div>
                        <div className={'col-span-3 grid grid-cols-5 gap-4'}>
                            <div className={'flex justify-center items-center'}>
                                <img src={serverIcon} className={'w-3/4'}/>
                            </div>
                            <div className={'col-span-4 flex flex-col justify-center'}>
                                <h5 className={'text-xl font-bold'}>Kurikulum Berstandar Industri & Sesuai Dunia
                                    Kerja</h5>
                                <p className={'text-justify leading-tight font-medium'}>Sajian materi e-learning
                                    berkualitas sebanding dengan pertemuan tatap muka. Kurikulum yang digunakan adalah
                                    berstandar dunia industri dan usaha terbaru.</p>
                            </div>
                            <div className={'flex justify-center items-center'}>
                                <img src={serverIcon2} className={'w-3/4'}/>
                            </div>
                            <div className={'col-span-4 flex flex-col justify-center'}>
                                <h5 className={'text-xl font-bold'}>Seluruh Instruktur Praktisi</h5>
                                <p className={'text-justify leading-tight font-medium'}>Kamu tidak akan merasa jenuh
                                    belajar online, karena kamu akan didampingi oleh instruktur hebat untuk berbagi dan
                                    berdiskusi mengenai materi yang kamu pelajari.</p>
                            </div>
                            <div className={'flex justify-center items-center'}>
                                <img src={serverIcon3} className={'w-3/4'}/>
                            </div>
                            <div className={'col-span-4 flex flex-col justify-center'}>
                                <h5 className={'text-xl font-bold'}>Dapatkan 2 Sertifikat Belajar</h5>
                                <p className={'text-justify leading-tight font-medium'}>Sertifikat yang kamu dapatkan
                                    adalah berdasarkan nilai ujian setiap menyelesaikan materi. Serta penilaian dari
                                    portfolio yang kamu kerjakan yang dinilai dan diulas secara langsung oleh para
                                    instruktur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'px-36 py-3 h-auto bg-white'}>
                <h1 className={'text-center text-4xl font-bold my-10'}>Prioritas Kecepatan dan Keamanan</h1>
                <div className={'grid grid-cols-5 gap-5'}>
                    <div className={'col-span-3 grid grid-cols-5 gap-4'}>
                        <div className={'flex justify-center items-center'}>
                            <img src={liveIcon} className={'w-3/4'}/>
                        </div>
                        <div className={'col-span-4 flex flex-col justify-center'}>
                            <h5 className={'text-xl font-bold'}>Live Instruktur</h5>
                            <p className={'text-justify leading-tight font-medium'}>Instruktur akan membantu siswa
                                melalui sesi konsultasi melalui video conference atau siswa datang ke kelas untuk
                                berdiskusi tentang materi maupun kendala lain. Siswa akan mendapatkan 3 kali sesi
                                konsultasi dengan durasi masing-masing 1 jam yang bisa digunakan kapan saja, tergantung
                                ketersediaan slot.</p>
                        </div>
                        <div className={'flex justify-center items-center'}>
                            <img src={platformIcon} className={'w-3/4'}/>
                        </div>
                        <div className={'col-span-4 flex flex-col justify-center'}>
                            <h5 className={'text-xl font-bold'}>Platform Belajar & E-Course</h5>
                            <p className={'text-justify leading-tight font-medium'}>Belajar online dengan metode paling
                                beda. Siswa akan belajar dengan metode blended learning, dimulai dengan belajar melalui
                                video dengan metode e-learning, menyelesaikan kuis, ujian, dan mengerjakan project
                                portfolio sesuai standar industri masa kini.</p>
                        </div>
                    </div>
                    <div className={'col-span-2'}>
                        <img src={robotIcon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}