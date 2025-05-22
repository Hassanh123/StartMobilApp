<template>
    <h2 class="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-800">
      Create your account
    </h2>

    <form class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="sm:col-span-2">
        <label for="fullName" class="block text-sm font-medium text-gray-700">Full name</label>
        <input id="fullName" type="text" placeholder="John Doe" required
          class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Phone number</label>
        <input id="phone" type="tel" placeholder="+31 6 12345678" required
          class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
      </div>

      <div>
        <label for="city" class="block text-sm font-medium text-gray-700">City</label>
        <input id="city" type="text" placeholder="Eindhoven" required
          class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
      </div>

      <div class="sm:col-span-2">
        <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
        <input id="address" type="text" placeholder="Street name and number" required
          class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
      </div>

      <div>
        <label for="postcode" class="block text-sm font-medium text-gray-700">Postcode</label>
        <input id="postcode" type="text" placeholder="1234 AB" required
          class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
        <input id="email" type="email" placeholder="you@example.com" required
          class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
      </div>

      <div class="sm:col-span-2">
        <label for="accountName" class="block text-sm font-medium text-gray-700">Account name</label>
        <input id="accountName" type="text" placeholder="Your account name" required
          class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input id="password" type="password" placeholder="Enter password" required
          class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
      </div>

      <div>
        <label for="passwordVerify" class="block text-sm font-medium text-gray-700">Verify password</label>
        <input id="passwordVerify" type="password" placeholder="Confirm password" required
          class="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 focus:outline-none" />
      </div>

      <div class="sm:col-span-2">
        <button type="submit"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md">
          Sign up
        </button>
      </div>
    </form>

    <div class="flex items-center my-8">
      <div class="flex-grow border-t border-gray-300"></div>
      <span class="px-4 text-gray-500 text-sm">or</span>
      <div class="flex-grow border-t border-gray-300"></div>
    </div>

    <button
      class="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md">
      Sign up with Google
    </button>
</template>
