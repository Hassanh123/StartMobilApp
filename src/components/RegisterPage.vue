<template>
  <h2 class="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-800">
    Create your account
  </h2>

  <form class="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto px-6 sm:px-8 md:px-12">
    <div class="sm:col-span-2">
      <label for="fullName" class="block text-lg sm:text-xl font-semibold text-gray-700">Full name</label>
      <input id="fullName" type="text" placeholder="John Doe" required
        class="mt-4 w-full rounded-lg border border-gray-300 px-6 py-5 text-lg sm:text-xl font-medium focus:ring-4 focus:ring-blue-600 focus:outline-none" />
    </div>

    <div>
      <label for="phone" class="block text-lg sm:text-xl font-semibold text-gray-700">Phone number</label>
      <input id="phone" type="tel" placeholder="+31 6 12345678" required
        class="mt-4 w-full rounded-lg border border-gray-300 px-6 py-5 text-lg sm:text-xl font-medium focus:ring-4 focus:ring-blue-600 focus:outline-none" />
    </div>

    <div>
      <label for="city" class="block text-lg sm:text-xl font-semibold text-gray-700">City</label>
      <input id="city" type="text" placeholder="Eindhoven" required
        class="mt-4 w-full rounded-lg border border-gray-300 px-6 py-5 text-lg sm:text-xl font-medium focus:ring-4 focus:ring-blue-600 focus:outline-none" />
    </div>

    <div class="sm:col-span-2">
      <label for="address" class="block text-lg sm:text-xl font-semibold text-gray-700">Address</label>
      <input id="address" type="text" placeholder="Street name and number" required
        class="mt-4 w-full rounded-lg border border-gray-300 px-6 py-5 text-lg sm:text-xl font-medium focus:ring-4 focus:ring-blue-600 focus:outline-none" />
    </div>

    <div>
      <label for="postcode" class="block text-lg sm:text-xl font-semibold text-gray-700">Postcode</label>
      <input id="postcode" type="text" placeholder="1234 AB" required
        class="mt-4 w-full rounded-lg border border-gray-300 px-6 py-5 text-lg sm:text-xl font-medium focus:ring-4 focus:ring-blue-600 focus:outline-none" />
    </div>

    <div>
      <label for="email" class="block text-lg sm:text-xl font-semibold text-gray-700">Email address</label>
      <input id="email" type="email" placeholder="you@example.com" required
        class="mt-4 w-full rounded-lg border border-gray-300 px-6 py-5 text-lg sm:text-xl font-medium focus:ring-4 focus:ring-blue-600 focus:outline-none" />
    </div>

    <div>
      <label for="password" class="block text-lg sm:text-xl font-semibold text-gray-700">Password</label>
      <input id="password" type="password" placeholder="Enter password" required
        class="mt-4 w-full rounded-lg border border-gray-300 px-6 py-5 text-lg sm:text-xl font-medium focus:ring-4 focus:ring-blue-600 focus:outline-none" />
    </div>

    <div>
      <label for="passwordVerify" class="block text-lg sm:text-xl font-semibold text-gray-700">Verify password</label>
      <input id="passwordVerify" type="password" placeholder="Confirm password" required
        class="mt-4 w-full rounded-lg border border-gray-300 px-6 py-5 text-lg sm:text-xl font-medium focus:ring-4 focus:ring-blue-600 focus:outline-none" />
    </div>

    <div class="sm:col-span-2">
      <button type="submit"
        class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-5 rounded-lg transition duration-200 shadow-lg text-xl sm:text-2xl">
        Sign up
      </button>
    </div>
  </form>
</template>
