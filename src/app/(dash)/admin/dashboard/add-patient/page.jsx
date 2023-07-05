import AdminDashNavbar from '@/components/AdminNavbar/AdminDashNavbar';
import AdminSidebar from '@/components/AdminSidebar/AdminSidebar';
import Link from 'next/link'
import React from 'react'



const AddPatient = () => {
  return (
    <>

    <div className="perentadmission flex pt-28">
      <div className='admission px-6 py-8 md:h-screen w-2/3'>
        <div class="patient-queue bg-white rounded-lg shadow">
          <div class="chilledadmission p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Admission Form
            </h1>
            <form class="space-y-6 md:space-y-6" action="#">
              <div className="flex justify-between">
                <div id="leftsyd" className="pr-10">
                  <div>
                    <label
                      for="idnumber"
                      class="block mb-2 font-medium text-gray-900 "
                    >
                      Your ID Number
                    </label>
                    <div className="flex my-auto">
                      <input
                        type="text"
                        name="idnumber"
                        id="idnumber"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="ID Number"
                        required=""
                      />
                    
                    </div>
                  </div>
                  <div>
                    <label
                      for="firstName"
                      class="block mb-2 mt-3 font-medium text-gray-900 "
                    >
                      Your First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="First Name"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="block mb-2 mt-3 font-medium text-gray-900 "
                    >
                      Your Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                      placeholder="Last Name"
                      required=""
                    />
                  </div>
                </div>
                <div id="rightsyd">
                  <div>
                    <label
                      for="department"
                      class="block mb-2 font-medium text-gray-900 "
                    >
                      Your department
                    </label>
                    <input
                      type="text"
                      name="department"
                      id="department"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                      placeholder="department"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="course"
                      class="block mb-2 mt-3 font-medium text-gray-900 "
                    >
                      Your Course / Position
                    </label>
                    <input
                      type="text"
                      name="course"
                      id="course"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5      "
                      placeholder="Course / Position "
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="yearlevel"
                      class="block mb-2 mt-3 font-medium text-gray-900 "
                    >
                      Your year level
                    </label>
                    <input
                      type="text"
                      name="yearlevel"
                      id="yearlevel"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Year Level"
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="symptom"
                  class="block mb-2 font-medium text-gray-900 "
                >
                  Sypmtom
                </label>
                <textarea
                  name="message"
                  id="symptom"
                  class="bg-gray-50 border border-gray-300 text-gray-900 h-36 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Symptom"
                  required=""
                />
              </div>
              <br />

              <div className="flex justify-between">
                <Link href="/dashboard">
                  {" "}
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl text-xl px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Cancel
                  </button>
                </Link>
                <Link href="#">
              
                  <button
                    type="button"
                    class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl text-xl px-5 py-2.5  text-center mr-2 mb-2"
                  >
                    Admit Patient
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='w-1/3'>
      <div className="mx-auto flex flex-col items-center pt-16">
      <p className="text-2xl font-semibold pb-4">Patient Queue</p>
      <div
        id="border"
        className="border-2 border-solid border-green-400 hover:bg-white bg-emerald-400 focus:outline-none focus:ring focus:ring-white transition duration-300 ease-in-out rounded-3xl p-5 shadow-lg shadow-green-500/50 mb-14"
      >
        <div className="flex justify-between pcard text-lg">
          <p>Patient # 1</p>
          <p>Report Number: 1233456</p>
          <div className="flex flex-col">
            <p>Date: June 25, 2023</p>
            <p>Time: 11:10 PM</p>
          </div>
        </div>
        <div className="flex justify-between items-end pcard text-lg">
          <div>
            <p>
              <strong> Name :</strong> Ichigo Kurasaki
            </p>
            <p>
              <strong>Course :</strong> Bachelor of Science in Information
              Technology
            </p>
            <p>
              <strong>Symptom :</strong> Bruises / Skin Cut
            </p>
          </div>
          <Link href="/dashboard/consultation">
            {" "}
            <button
              type="button"
              class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl text-xl px-5 py-2.5 text-center mr-2 mb-2"
            >
              Start Consultation
            </button>
          </Link>
        </div>
      </div>

      <div
        id="border"
        className="border-2 border-solid border-green-400 hover:bg-white bg-emerald-400 focus:outline-none focus:ring focus:ring-white transition duration-300 ease-in-out rounded-3xl p-5 shadow-lg shadow-green-500/50 mb-14"
      >
        <div className="flex justify-between pcard text-lg ">
          <p>Patient # 2</p>
          <p>Report Number: 123123</p>
          <div className="flex flex-col">
            <p>Date: June 25, 2023</p>
            <p>Time: 11:15 PM</p>
          </div>
        </div>
        <div className="flex justify-between items-end pcard text-lg">
          <div>
            <p>
              <strong> Name :</strong> Zangetsu
            </p>
            <p>
              <strong>Course :</strong> Bachelor of Science in Information
              Technology
            </p>
            <p>
              <strong>Symptom :</strong> Burns
            </p>
          </div>
          <Link href="/dashboard/consultation">
            {" "}
            <button
              type="button"
              class="text-white bg-gradient-to-r bg-green-400 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition duration-300 ease-in-out font-medium rounded-2xl text-xl px-5 py-2.5 text-center mr-2 mb-2"
            >
              Start Consultation
            </button>
          </Link>
        </div>
      </div>
    </div>
      </div>
    </div>
    </>

  );
}

export default AddPatient