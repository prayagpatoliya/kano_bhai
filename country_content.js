function getTimeZoneCountry() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log("Time Zone:", timezone);

  // Example of mapping time zone to countries (this is a basic approach)
  const timezoneCountryMap = {
    "America/New_York": "USA",
    "Europe/London": "UK",
    "Asia/Bangkok": "Thailand",
    "Asia/Dubai": "UAE",
    "Asia/Calcutta": "India",
    "America/Toronto": "Canada",
    "Australia/Sydney": "Australia",
    "Pacific/Auckland": "New Zealand",
    "Africa/Nairobi": "Kenya",
    "Africa/Accra": "Ghana",
    "Asia/Jakarta": "Indonesia",
    "Asia/Manila": "Philippines",
  };

  // Return the country based on the time zone
  return timezoneCountryMap[timezone] || "Country not found";
}

let ContentContainer = document.getElementById("content_container");

if (getTimeZoneCountry() == "India") {
  ContentContainer.innerHTML = `
     <h4>Types of Loans in India</h4>
     <ul>
            <li>SBI (State Bank of India)</li>
            <li>HDFC Bank</li>
            <li>Axis Bank</li>
            <li>Punjab National Bank (PNB)</li>
        </ul>

         <h3>State Bank of India (SBI) Loan Offerings</h3>
    <p>State Bank of India (SBI) is the largest public sector bank in India, offering a variety of loan products designed to meet the financial needs of individuals and businesses. From home loans to personal loans, SBI provides affordable interest rates, flexible repayment options, and a variety of services. Below is a detailed guide to the various loans available at SBI, including the types of loans, interest rates, policies, eligibility criteria, and key features.</p>

    <h4>1. Personal Loan from SBI</h4>
    <p><strong>Overview:</strong> SBI's personal loan is designed to help individuals meet their immediate financial needs such as medical expenses, wedding expenses, travel, home renovation, etc. It is an unsecured loan, meaning no collateral is required to avail it.</p>
    <p><strong>Loan Amount:</strong> ₹24,000 to ₹20 lakhs (depending on eligibility)</p>
    <p><strong>Interest Rate:</strong> 10.90% to 13.90% (effective rates depend on loan amount and tenure)</p>
    <p><strong>Loan Tenure:</strong> 1 year to 6 years</p>
    <p><strong>Processing Fee:</strong> 1% of the loan amount or ₹1,000 (whichever is higher)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Salaried individuals or self-employed professionals with a regular income</li>
            <li>Minimum monthly income requirement varies by location</li>
            <li>Age between 21 and 58 years (for salaried) or 21 to 65 years (for self-employed)</li>
            <li>Good credit score (700+)</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>No need for collateral or guarantor</li>
            <li>Loan amount based on income and repayment capacity</li>
            <li>Quick loan disbursal</li>
            <li>Online loan application and tracking system</li>
        </ul>
    </p>

    <h4>2. Home Loan from SBI</h4>
    <p><strong>Overview:</strong> SBI offers a range of home loan products to help individuals buy a home, build a house, or renovate their existing property. With competitive interest rates and long repayment tenures, SBI home loans are popular among homebuyers in India.</p>
    <p><strong>Loan Amount:</strong> Up to ₹15 crore (depending on property value and income)</p>
    <p><strong>Interest Rate:</strong> 8.40% to 8.90% (fixed or floating rate options)</p>
    <p><strong>Loan Tenure:</strong> Up to 30 years</p>
    <p><strong>Processing Fee:</strong> 0.35% of the loan amount (minimum ₹1,000, maximum ₹10,000)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens between the ages of 18 and 70 years</li>
            <li>Must have a stable income from a recognized source (salaried or self-employed)</li>
            <li>Minimum income requirement varies by location and type of property</li>
            <li>Good credit score (750+)</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Competitive interest rates with flexible tenure options</li>
            <li>Loan eligibility based on income, age, and property value</li>
            <li>Up to 90% funding for property purchase (subject to terms)</li>
            <li>Online home loan application and processing</li>
            <li>Special rates for women applicants</li>
        </ul>
    </p>

    <h4>3. Car Loan from SBI</h4>
    <p><strong>Overview:</strong> SBI provides car loans at attractive interest rates to help customers purchase new or used cars. The loan comes with flexible repayment terms and a range of options to choose from for both salaried and self-employed individuals.</p>
    <p><strong>Loan Amount:</strong> ₹1 lakh to ₹15 lakh (depending on the car's value and applicant's eligibility)</p>
    <p><strong>Interest Rate:</strong> 7.00% to 9.00%</p>
    <p><strong>Loan Tenure:</strong> 3 years to 7 years</p>
    <p><strong>Processing Fee:</strong> ₹1,000 to ₹10,000 (depends on loan amount)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 21 and 65 years</li>
            <li>Minimum annual income of ₹2.5 lakh (for salaried) or ₹3 lakh (for self-employed)</li>
            <li>Good credit history (credit score 700+)</li>
            <li>For used car loans, the vehicle's age should not exceed 5 years</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Fast loan approval and disbursal process</li>
            <li>Loan amount of up to 100% of the on-road price for new cars</li>
            <li>Attractive interest rates with flexible EMI options</li>
            <li>Online application for easy loan tracking</li>
        </ul>
    </p>

    <h4>4. Education Loan from SBI</h4>
    <p><strong>Overview:</strong> SBI’s education loan is designed to help students pursue higher education in India or abroad. The loan covers tuition fees, accommodation, and other academic expenses.</p>
    <p><strong>Loan Amount:</strong> ₹20 lakh for domestic studies, ₹30 lakh for international studies</p>
    <p><strong>Interest Rate:</strong> 8.65% to 9.60%</p>
    <p><strong>Loan Tenure:</strong> 1 year to 15 years (depending on course duration and post-study grace period)</p>
    <p><strong>Processing Fee:</strong> Nil (processing charges applicable for loans over ₹4 lakh)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens who have secured admission to a recognized institution</li>
            <li>Minimum age of 18 years at the time of application</li>
            <li>Good academic record</li>
            <li>Co-applicant (parent/guardian) with a steady income</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Easy repayment options after course completion</li>
            <li>Moratorium period (grace period) of 6 months to 1 year after course completion</li>
            <li>Coverage for all education-related expenses (tuition, books, travel, etc.)</li>
            <li>Tax benefits under Section 80E of the Income Tax Act</li>
        </ul>
    </p>

    <h4>5. Loan Against Property (LAP) from SBI</h4>
    <p><strong>Overview:</strong> SBI offers loans against residential, commercial, and industrial property to customers looking for large funds for personal or business needs. These loans are secured against the property used as collateral.</p>
    <p><strong>Loan Amount:</strong> ₹10 lakh to ₹5 crore (depending on property value and income)</p>
    <p><strong>Interest Rate:</strong> 9.60% to 10.15%</p>
    <p><strong>Loan Tenure:</strong> Up to 15 years</p>
    <p><strong>Processing Fee:</strong> 0.50% of the loan amount (minimum ₹5,000)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens with ownership of residential, commercial, or industrial property</li>
            <li>Good credit score and stable income</li>
            <li>Age between 21 and 70 years</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Loan amount based on the market value of the property</li>
            <li>Attractive interest rates and flexible repayment terms</li>
            <li>Easy documentation and quick loan processing</li>
            <li>Top-up loans available after the first year of disbursement</li>
        </ul>
    </p>    
    <br>
    <h1>HDFC Bank Loan Offerings</h1>
    <p>HDFC Bank is one of the leading private sector banks in India, known for its innovative banking solutions and customer service. It offers a wide range of loan products tailored to meet the financial needs of both individuals and businesses. HDFC Bank provides competitive interest rates, flexible repayment terms, and quick processing for various types of loans. Below is a detailed guide to the various loans offered by HDFC Bank, including the types of loans, interest rates, eligibility criteria, and key features.</p>

    <h4>1. Personal Loan from HDFC Bank</h4>
    <p><strong>Overview:</strong> HDFC Bank offers personal loans for various purposes such as medical expenses, wedding costs, travel, home renovation, and more. These loans are unsecured, which means no collateral is required to avail of the loan.</p>
    <p><strong>Loan Amount:</strong> ₹50,000 to ₹40 lakhs (depending on eligibility)</p>
    <p><strong>Interest Rate:</strong> 10.75% to 21.00% (interest rate depends on the applicant's profile)</p>
    <p><strong>Loan Tenure:</strong> 1 year to 5 years</p>
    <p><strong>Processing Fee:</strong> 1% of the loan amount or ₹1,000 (whichever is higher)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 21 and 60 years</li>
            <li>Minimum monthly income requirement of ₹25,000 (varies by location and job type)</li>
            <li>Good credit score (750+)</li>
            <li>Stable source of income (salaried or self-employed)</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Quick loan disbursal</li>
            <li>No collateral required</li>
            <li>Attractive interest rates based on the applicant's profile</li>
            <li>Flexible repayment options</li>
            <li>Online loan application and tracking</li>
        </ul>
    </p>

    <h4>2. Home Loan from HDFC Bank</h4>
    <p><strong>Overview:</strong> HDFC Bank offers home loans for the purchase of a new home, construction, renovation, and even for the purchase of land. With a reputation for providing affordable home loans with minimal paperwork, HDFC has been a trusted choice for homebuyers across India.</p>
    <p><strong>Loan Amount:</strong> ₹1 lakh to ₹10 crore (depending on eligibility and property value)</p>
    <p><strong>Interest Rate:</strong> 8.75% to 9.50% (interest rates depend on the applicant's profile)</p>
    <p><strong>Loan Tenure:</strong> 1 year to 30 years</p>
    <p><strong>Processing Fee:</strong> 0.50% of the loan amount (minimum ₹3,000)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 18 and 70 years</li>
            <li>Applicants with a stable income (salaried or self-employed)</li>
            <li>Good credit score (750+)</li>
            <li>Applicants should have a minimum of 2 years of work experience</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Loan amount based on income and property value</li>
            <li>Up to 90% loan-to-value ratio for property purchase</li>
            <li>Flexible EMI options</li>
            <li>Special schemes for women applicants</li>
            <li>Online home loan application</li>
        </ul>
    </p>

    <h4>3. Car Loan from HDFC Bank</h4>
    <p><strong>Overview:</strong> HDFC Bank provides car loans for both new and used cars with attractive interest rates and flexible repayment options. The bank aims to make it easier for customers to own a car with a quick loan approval process.</p>
    <p><strong>Loan Amount:</strong> ₹1 lakh to ₹1 crore (depending on car value and applicant's eligibility)</p>
    <p><strong>Interest Rate:</strong> 9.00% to 11.00%</p>
    <p><strong>Loan Tenure:</strong> 1 year to 7 years</p>
    <p><strong>Processing Fee:</strong> ₹2,500 to ₹10,000 (depending on loan amount)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 21 and 65 years</li>
            <li>Minimum annual income requirement of ₹2.5 lakh (for salaried) or ₹3 lakh (for self-employed)</li>
            <li>Good credit score (700+)</li>
            <li>For used car loans, the car should not be more than 5 years old</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>100% funding available for new cars (on-road price)</li>
            <li>Quick loan processing and disbursal</li>
            <li>Attractive interest rates and flexible EMIs</li>
            <li>Online loan application and tracking</li>
        </ul>
    </p>

    <h4>4. Education Loan from HDFC Bank</h4>
    <p><strong>Overview:</strong> HDFC Bank offers education loans to students pursuing higher education in India or abroad. The loan covers tuition fees, accommodation, and other study-related expenses.</p>
    <p><strong>Loan Amount:</strong> ₹50,000 to ₹20 lakh (₹30 lakh for education abroad)</p>
    <p><strong>Interest Rate:</strong> 10.00% to 13.00%</p>
    <p><strong>Loan Tenure:</strong> 1 year to 15 years</p>
    <p><strong>Processing Fee:</strong> Nil (for loans up to ₹7.5 lakh)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian students who have secured admission to a recognized educational institution</li>
            <li>Minimum age of 18 years at the time of application</li>
            <li>Good academic record and admission to a recognized institution</li>
            <li>Co-applicant (parent/guardian) with a stable income</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Coverage for all educational expenses (tuition, travel, accommodation, etc.)</li>
            <li>Flexible repayment options after course completion</li>
            <li>Moratorium period of 6 months to 1 year</li>
            <li>Tax benefits under Section 80E of the Income Tax Act</li>
        </ul>
    </p>

    <h4>5. Loan Against Property (LAP) from HDFC Bank</h4>
    <p><strong>Overview:</strong> HDFC Bank offers loans against residential and commercial properties. These loans can be used for personal or business purposes, offering higher loan amounts and lower interest rates than unsecured loans.</p>
    <p><strong>Loan Amount:</strong> ₹10 lakh to ₹10 crore (depending on property value)</p>
    <p><strong>Interest Rate:</strong> 10.25% to 13.00%</p>
    <p><strong>Loan Tenure:</strong> Up to 15 years</p>
    <p><strong>Processing Fee:</strong> 0.50% of the loan amount (minimum ₹5,000)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 21 and 65 years</li>
            <li>Applicants with a stable income (salaried or self-employed)</li>
            <li>Good credit score (750+)</li>
            <li>Ownership of residential, commercial, or industrial property</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Loan amount based on property value and applicant's income</li>
            <li>Competitive interest rates and flexible repayment options</li>
            <li>Top-up loans after one year of repayment</li>
            <li>Online application and approval</li>
        </ul>
    </p>
    <br>
    <h1>Axis Bank Loan Offerings</h1>
    <p>Axis Bank, one of India's leading private sector banks, offers a comprehensive suite of financial products tailored to meet the needs of individuals, businesses, and corporate clients. The bank’s loan products come with attractive interest rates, minimal paperwork, and quick disbursement, making it a preferred choice for customers across the country. Below is a detailed guide to Axis Bank's various loan offerings, including the types of loans, interest rates, eligibility criteria, and key features.</p>

    <h4>1. Personal Loan from Axis Bank</h4>
    <p><strong>Overview:</strong> Axis Bank offers personal loans for various needs like medical expenses, weddings, home renovations, travel, and more. These loans are unsecured, meaning they don’t require collateral.</p>
    <p><strong>Loan Amount:</strong> ₹50,000 to ₹15 lakhs (depending on eligibility)</p>
    <p><strong>Interest Rate:</strong> 10.99% to 21.00% (interest rate depends on the applicant’s credit profile)</p>
    <p><strong>Loan Tenure:</strong> 1 year to 5 years</p>
    <p><strong>Processing Fee:</strong> 1.50% of the loan amount or ₹1,000 (whichever is higher)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 21 and 60 years</li>
            <li>Minimum monthly income requirement of ₹25,000 (varies based on location and occupation)</li>
            <li>Good credit score (750+)</li>
            <li>Stable source of income (salaried or self-employed)</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>No collateral required</li>
            <li>Quick approval and disbursal</li>
            <li>Attractive interest rates based on credit score</li>
            <li>Flexible repayment options</li>
            <li>Online loan application process</li>
        </ul>
    </p>

    <h4>2. Home Loan from Axis Bank</h4>
    <p><strong>Overview:</strong> Axis Bank provides home loans to individuals for the purchase of a new house, construction, or renovation of existing properties. The bank offers competitive interest rates and flexible loan terms.</p>
    <p><strong>Loan Amount:</strong> ₹3 lakhs to ₹10 crore (depending on eligibility)</p>
    <p><strong>Interest Rate:</strong> 8.75% to 9.50%</p>
    <p><strong>Loan Tenure:</strong> Up to 30 years</p>
    <p><strong>Processing Fee:</strong> 1% of the loan amount (minimum ₹10,000)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 18 and 70 years</li>
            <li>Stable income (salaried or self-employed)</li>
            <li>Good credit score (750+)</li>
            <li>Income sufficient to repay the loan</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Attractive interest rates for homebuyers</li>
            <li>Loan amount based on property valuation and applicant’s income</li>
            <li>Special schemes for women applicants</li>
            <li>Online home loan application and approval tracking</li>
            <li>Up to 90% financing for home purchase</li>
        </ul>
    </p>

    <h4>3. Car Loan from Axis Bank</h4>
    <p><strong>Overview:</strong> Axis Bank offers car loans for the purchase of new and used cars. The bank provides quick loan processing and competitive interest rates.</p>
    <p><strong>Loan Amount:</strong> ₹1 lakh to ₹50 lakh (depending on car model and applicant's eligibility)</p>
    <p><strong>Interest Rate:</strong> 9.60% to 12.00%</p>
    <p><strong>Loan Tenure:</strong> 1 year to 7 years</p>
    <p><strong>Processing Fee:</strong> ₹3,500 to ₹6,500 (depending on loan amount)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 21 and 65 years</li>
            <li>Minimum annual income requirement of ₹2.5 lakh</li>
            <li>Good credit score (750+)</li>
            <li>For used car loans, the car should not be older than 5 years</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Up to 100% funding for new cars</li>
            <li>Quick loan disbursal</li>
            <li>Attractive interest rates and flexible EMI options</li>
            <li>Online car loan application and tracking</li>
        </ul>
    </p>

    <h4>4. Education Loan from Axis Bank</h4>
    <p><strong>Overview:</strong> Axis Bank provides education loans to students pursuing higher education in India or abroad. The loan can cover tuition fees, accommodation, and other study-related expenses.</p>
    <p><strong>Loan Amount:</strong> ₹50,000 to ₹75 lakh (for study abroad)</p>
    <p><strong>Interest Rate:</strong> 10.00% to 14.00%</p>
    <p><strong>Loan Tenure:</strong> 1 year to 15 years</p>
    <p><strong>Processing Fee:</strong> Nil for loans up to ₹7.5 lakh</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian students aged between 18 and 35 years</li>
            <li>Must have secured admission to a recognized educational institution</li>
            <li>Good academic record</li>
            <li>Co-applicant (parent/guardian) with a stable income</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Covers all educational expenses, including tuition, books, travel, and more</li>
            <li>Flexible repayment options with a moratorium period of up to 12 months</li>
            <li>Tax benefits under Section 80E of the Income Tax Act</li>
            <li>Online loan application and processing</li>
        </ul>
    </p>

    <h4>5. Loan Against Property (LAP) from Axis Bank</h4>
    <p><strong>Overview:</strong> Axis Bank offers loans against residential and commercial properties. These loans are secured, meaning you can use your property as collateral to avail a higher loan amount at competitive interest rates.</p>
    <p><strong>Loan Amount:</strong> ₹3 lakh to ₹10 crore (depending on property value)</p>
    <p><strong>Interest Rate:</strong> 10.50% to 14.00%</p>
    <p><strong>Loan Tenure:</strong> 1 year to 15 years</p>
    <p><strong>Processing Fee:</strong> 1% of the loan amount (minimum ₹5,000)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 21 and 65 years</li>
            <li>Stable income source (salaried or self-employed)</li>
            <li>Good credit score (750+)</li>
            <li>Property ownership (residential, commercial, or industrial property)</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Loan amount based on property value and income</li>
            <li>Flexible EMI options</li>
            <li>Tax benefits on interest paid</li>
            <li>Top-up loan option after one year of repayment</li>
        </ul>
    </p>
    <br> 

     <h1>Punjab National Bank (PNB) Loan Offerings</h1>
    <p>Punjab National Bank (PNB), one of India's oldest and largest public sector banks, offers a wide range of loan products designed to meet the diverse financial needs of individuals, businesses, and corporate clients. PNB’s loan offerings are aimed at providing customers with affordable financing options, with competitive interest rates, flexible terms, and easy application processes.</p>

    <h4>1. Personal Loan from PNB</h4>
    <p><strong>Overview:</strong> PNB offers personal loans for various purposes such as medical expenses, weddings, travel, education, and home renovation. The loan does not require collateral and can be easily applied for online or at a branch.</p>
    <p><strong>Loan Amount:</strong> ₹50,000 to ₹20 lakhs (depending on eligibility)</p>
    <p><strong>Interest Rate:</strong> 10.55% to 14.00%</p>
    <p><strong>Loan Tenure:</strong> 1 year to 5 years</p>
    <p><strong>Processing Fee:</strong> 1% of the loan amount or ₹1,000 (whichever is higher)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 21 and 60 years</li>
            <li>Minimum monthly income requirement of ₹20,000 (varies based on occupation and location)</li>
            <li>Good credit score (750+)</li>
            <li>Stable source of income (salaried or self-employed)</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>No collateral required</li>
            <li>Quick loan approval and disbursal</li>
            <li>Flexible loan tenure</li>
            <li>Simple and minimal documentation</li>
            <li>Online loan application facility</li>
        </ul>
    </p>

    <h4>2. Home Loan from PNB</h4>
    <p><strong>Overview:</strong> PNB’s home loan offerings are designed to help individuals purchase, construct, or renovate their homes. The bank provides attractive interest rates and long repayment tenures, making it easier for individuals to own their dream home.</p>
    <p><strong>Loan Amount:</strong> ₹3 lakhs to ₹10 crore (depending on eligibility)</p>
    <p><strong>Interest Rate:</strong> 8.90% to 9.70%</p>
    <p><strong>Loan Tenure:</strong> Up to 30 years</p>
    <p><strong>Processing Fee:</strong> 0.50% to 1% of the loan amount (minimum ₹1,000)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 18 and 70 years</li>
            <li>Stable income (salaried or self-employed)</li>
            <li>Good credit score (750+)</li>
            <li>Income sufficient to repay the loan</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Up to 90% financing for home purchase</li>
            <li>Special interest rates for women borrowers</li>
            <li>Long repayment tenure up to 30 years</li>
            <li>Loan amount based on property value and applicant’s income</li>
            <li>Simple and quick documentation process</li>
        </ul>
    </p>

    <h4>3. Car Loan from PNB</h4>
    <p><strong>Overview:</strong> PNB offers car loans to finance the purchase of both new and used cars. The bank provides attractive interest rates and flexible repayment options, ensuring that customers can easily own their desired car.</p>
    <p><strong>Loan Amount:</strong> ₹1 lakh to ₹50 lakh (depending on car model and applicant's eligibility)</p>
    <p><strong>Interest Rate:</strong> 9.00% to 12.00%</p>
    <p><strong>Loan Tenure:</strong> 1 year to 7 years</p>
    <p><strong>Processing Fee:</strong> ₹3,000 to ₹6,000 (depending on loan amount)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 21 and 65 years</li>
            <li>Minimum annual income requirement of ₹2.5 lakh</li>
            <li>Good credit score (750+)</li>
            <li>For used car loans, the car should not be older than 5 years</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Up to 100% financing for new cars</li>
            <li>Attractive interest rates and flexible repayment terms</li>
            <li>Loan disbursement within a short period</li>
            <li>Online application process for faster approval</li>
        </ul>
    </p>

    <h4>4. Education Loan from PNB</h4>
    <p><strong>Overview:</strong> PNB offers education loans for students pursuing higher education in India and abroad. These loans can cover tuition fees, living expenses, and other study-related costs.</p>
    <p><strong>Loan Amount:</strong> ₹50,000 to ₹20 lakh (for study in India), ₹50,000 to ₹1.5 crore (for study abroad)</p>
    <p><strong>Interest Rate:</strong> 8.60% to 10.50%</p>
    <p><strong>Loan Tenure:</strong> 1 year to 15 years</p>
    <p><strong>Processing Fee:</strong> Nil to ₹500 (depending on loan amount)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian students aged between 18 and 35 years</li>
            <li>Must have secured admission to a recognized educational institution</li>
            <li>Good academic record</li>
            <li>Co-applicant (parent/guardian) with a stable income</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Loans cover tuition fees, accommodation, and other study-related expenses</li>
            <li>Flexible repayment options with a moratorium period</li>
            <li>Tax benefits under Section 80E of the Income Tax Act</li>
            <li>Loan approval within a short span of time</li>
        </ul>
    </p>

    <h4>5. Loan Against Property (LAP) from PNB</h4>
    <p><strong>Overview:</strong> PNB offers loans against residential and commercial properties. These loans are secured, meaning you can pledge your property as collateral in exchange for a larger loan amount at competitive interest rates.</p>
    <p><strong>Loan Amount:</strong> ₹1 lakh to ₹5 crore (depending on property value)</p>
    <p><strong>Interest Rate:</strong> 10.50% to 14.00%</p>
    <p><strong>Loan Tenure:</strong> 1 year to 15 years</p>
    <p><strong>Processing Fee:</strong> 1% of the loan amount (minimum ₹5,000)</p>
    <p><strong>Eligibility:</strong>
        <ul>
            <li>Indian citizens aged between 21 and 65 years</li>
            <li>Stable income (salaried or self-employed)</li>
            <li>Good credit score (750+)</li>
            <li>Property ownership (residential, commercial, or industrial property)</li>
        </ul>
    </p>
    <p><strong>Key Features:</strong>
        <ul>
            <li>Loan amount based on property value and applicant’s income</li>
            <li>Flexible repayment options</li>
            <li>Top-up loan option after 6 months of repayment</li>
            <li>Easy documentation process</li>
        </ul>
    </p>
    `;
} else if (getTimeZoneCountry() == "UK") {
  ContentContainer.innerHTML = `
    <h4>Types of Loans in UK</h4>
         <ul>
            <li>Barclays Bank</li>
            <li>Lloyds Bank</li>
            <li>HSBC Bank</li>
            <li>NatWest Bank</li>
        </ul>

         <h1>Barclays Bank Loan Products</h1>

    <h3>1. Personal Loan from Barclays</h3>
    <p><strong>Loan Amount:</strong> £1,000 to £50,000</p>
    <p><strong>Interest Rate:</strong> From 3.4% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 5 years</p>
    <p><strong>Eligibility:</strong> UK residents aged 18-79, with a good credit score and stable income</p>
    <p><strong>Processing Fee:</strong> No application fee</p>
    <p><strong>Key Features:</strong></p>
    <ul>
        <li>Fixed interest rates</li>
        <li>No early repayment fees</li>
        <li>Simple online application process</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from Barclays</h3>
    <p><strong>Loan Amount:</strong> £25,000 to £1,000,000 (depending on property value)</p>
    <p><strong>Interest Rate:</strong> From 2.04% (for fixed and tracker rates)</p>
    <p><strong>Loan Tenure:</strong> Up to 40 years</p>
    <p><strong>Eligibility:</strong> UK residents with good credit scores and a stable income</p>
    <p><strong>Processing Fee:</strong> £999 (varies based on the loan type)</p>
    <p><strong>Key Features:</strong></p>
    <ul>
        <li>Fixed, variable, and tracker mortgage options</li>
        <li>Online mortgage calculators</li>
        <li>Flexible repayment options</li>
    </ul>

    <h3>3. Car Loan from Barclays</h3>
    <p><strong>Loan Amount:</strong> £1,000 to £50,000</p>
    <p><strong>Interest Rate:</strong> From 3.9% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 5 years</p>
    <p><strong>Eligibility:</strong> UK residents aged 18 or older, with a stable income and good credit score</p>
    <p><strong>Processing Fee:</strong> No application fee</p>
    <p><strong>Key Features:</strong></p>
    <ul>
        <li>Fixed monthly payments</li>
        <li>No early repayment fees</li>
        <li>Option to finance a new or used car</li>
    </ul>

    <h3>4. Business Loan from Barclays</h3>
    <p><strong>Loan Amount:</strong> From £1,000 to £25,000 (or higher depending on business requirements)</p>
    <p><strong>Interest Rate:</strong> From 3.4% APR (variable rates available)</p>
    <p><strong>Loan Tenure:</strong> 1 to 5 years</p>
    <p><strong>Eligibility:</strong> UK businesses with at least 12 months of trading history and good credit scores</p>
    <p><strong>Processing Fee:</strong> Varies depending on the loan amount</p>
    <p><strong>Key Features:</strong></p>
    <ul>
        <li>Flexible repayment options</li>
        <li>Quick approval process</li>
        <li>Competitive interest rates for businesses</li>
    </ul>

    <h3>5. Student Loan from Barclays</h3>
    <p><strong>Loan Amount:</strong> Up to £25,000</p>
    <p><strong>Interest Rate:</strong> From 4.9% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 6 years</p>
    <p><strong>Eligibility:</strong> UK students aged 18 or older, enrolled in a full-time course at an accredited university</p>
    <p><strong>Processing Fee:</strong> No application fee</p>
    <p><strong>Key Features:</strong></p>
    <ul>
        <li>Fixed monthly repayments</li>
        <li>Borrow up to £25,000 for education-related expenses</li>
        <li>Flexible repayment options after graduation</li>
    </ul>

    <br>

      <h1>Lloyds Bank Loan Products</h1>

    <h3>1. Personal Loan from Lloyds Bank</h3>
    <p><strong>Loan Amount:</strong> £1,000 to £50,000</p>
    <p><strong>Interest Rate:</strong> From 3.8% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> UK residents aged 18 or older with a good credit score</p>
    <p><strong>Processing Fee:</strong> No application fee for personal loan</p>
    <p><strong>Key Features of the Personal Loan:</strong></p>
    <ul>
        <li>Fixed monthly repayments for the loan</li>
        <li>No early repayment charges on the personal loan</li>
        <li>Simple and fast online personal loan application process</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from Lloyds Bank</h3>
    <p><strong>Loan Amount:</strong> £25,000 to £2,000,000</p>
    <p><strong>Interest Rate for Mortgage Loan:</strong> From 2.5% (fixed rate)</p>
    <p><strong>Loan Tenure:</strong> Up to 40 years for mortgage loan repayment</p>
    <p><strong>Eligibility for Home Loan:</strong> UK residents with good credit scores and a stable income</p>
    <p><strong>Processing Fee for Mortgage Loan:</strong> £999</p>
    <p><strong>Key Features of the Home Loan:</strong></p>
    <ul>
        <li>Flexible fixed and variable rates for home loans</li>
        <li>Ability to manage and track mortgage loan repayments online</li>
        <li>Options to overpay on home loan without penalty</li>
    </ul>

    <h3>3. Car Loan from Lloyds Bank</h3>
    <p><strong>Loan Amount for Car Loan:</strong> £1,000 to £50,000</p>
    <p><strong>Interest Rate for Car Loan:</strong> From 3.9% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 5 years for car loan repayment</p>
    <p><strong>Eligibility for Car Loan:</strong> UK residents aged 18 or older with a stable income and good credit score</p>
    <p><strong>Processing Fee for Car Loan:</strong> No application fee</p>
    <p><strong>Key Features of the Car Loan:</strong></p>
    <ul>
        <li>Fixed monthly payments for the car loan</li>
        <li>Option to finance new or used cars with the loan</li>
        <li>No early repayment fees for car loan</li>
    </ul>

    <h3>4. Business Loan from Lloyds Bank</h3>
    <p><strong>Loan Amount for Business Loan:</strong> From £1,000 to £25,000 (or higher depending on business requirements)</p>
    <p><strong>Interest Rate for Business Loan:</strong> From 3.4% APR (variable rates available)</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> UK businesses with at least 12 months of trading history and good credit scores</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies depending on the loan amount</p>
    <p><strong>Key Features of the Business Loan:</strong></p>
    <ul>
        <li>Flexible repayment options for business loans</li>
        <li>Quick approval process for business loan applications</li>
        <li>Competitive interest rates for business loans</li>
    </ul>

    <h3>5. Student Loan from Lloyds Bank</h3>
    <p><strong>Loan Amount for Student Loan:</strong> Up to £25,000</p>
    <p><strong>Interest Rate for Student Loan:</strong> From 4.9% APR</p>
    <p><strong>Loan Tenure for Student Loan:</strong> 1 to 6 years</p>
    <p><strong>Eligibility for Student Loan:</strong> UK students aged 18 or older, enrolled in a full-time course at an accredited university</p>
    <p><strong>Processing Fee for Student Loan:</strong> No application fee</p>
    <p><strong>Key Features of the Student Loan:</strong></p>
    <ul>
        <li>Fixed monthly repayments for student loans</li>
        <li>Loan can be used for tuition fees, books, and other education-related expenses</li>
        <li>Flexible repayment options after graduation for student loan borrowers</li>
    </ul>

    <br>
     <h1>HSBC Bank Loan Products</h1>

    <h3>1. Personal Loan from HSBC</h3>
    <p><strong>Loan Amount:</strong> £1,000 to £50,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> From 3.3% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> UK residents aged 18 or older with a good credit score and stable income</p>
    <p><strong>Processing Fee for Personal Loan:</strong> No application fee for personal loan</p>
    <p><strong>Key Features of the Personal Loan:</strong></p>
    <ul>
        <li>Fixed interest rates for the personal loan</li>
        <li>Flexible loan repayment options</li>
        <li>No early repayment charges on the personal loan</li>
        <li>Easy and fast online personal loan application</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from HSBC</h3>
    <p><strong>Loan Amount for Mortgage:</strong> £25,000 to £2,000,000</p>
    <p><strong>Interest Rate for Mortgage Loan:</strong> From 2.4% (fixed rates)</p>
    <p><strong>Loan Tenure:</strong> Up to 40 years for mortgage loan repayment</p>
    <p><strong>Eligibility for Home Loan:</strong> UK residents with stable income and good credit scores</p>
    <p><strong>Processing Fee for Mortgage Loan:</strong> £999 for mortgage loan application</p>
    <p><strong>Key Features of the Home Loan:</strong></p>
    <ul>
        <li>Flexible mortgage loan options (fixed and variable rates)</li>
        <li>Repayment holiday option available for home loans</li>
        <li>Ability to overpay on the mortgage loan without penalty</li>
        <li>Manage mortgage loan repayments online easily</li>
    </ul>

    <h3>3. Car Loan from HSBC</h3>
    <p><strong>Loan Amount for Car Loan:</strong> £1,000 to £50,000</p>
    <p><strong>Interest Rate for Car Loan:</strong> From 3.9% APR</p>
    <p><strong>Loan Tenure for Car Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Car Loan:</strong> UK residents aged 18 or older with a stable income and good credit history</p>
    <p><strong>Processing Fee for Car Loan:</strong> No application fee for the car loan</p>
    <p><strong>Key Features of the Car Loan:</strong></p>
    <ul>
        <li>Fixed monthly payments for the car loan</li>
        <li>Loans available for both new and used cars</li>
        <li>Option to repay the car loan early without fees</li>
        <li>Simple car loan application process</li>
    </ul>

    <h3>4. Business Loan from HSBC</h3>
    <p><strong>Loan Amount for Business Loan:</strong> From £1,000 to £25,000 (higher amounts may be available for businesses)</p>
    <p><strong>Interest Rate for Business Loan:</strong> From 4.5% APR (depending on the loan amount and business credit score)</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> UK businesses with at least 12 months of trading history and good credit rating</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies based on loan amount</p>
    <p><strong>Key Features of the Business Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for business loans</li>
        <li>Flexible repayment options for business loans</li>
        <li>Quick approval process for business loans</li>
        <li>Support for expansion and working capital through the business loan</li>
    </ul>

    <h3>5. Student Loan from HSBC</h3>
    <p><strong>Loan Amount for Student Loan:</strong> Up to £25,000</p>
    <p><strong>Interest Rate for Student Loan:</strong> From 4.5% APR</p>
    <p><strong>Loan Tenure for Student Loan:</strong> 1 to 6 years</p>
    <p><strong>Eligibility for Student Loan:</strong> UK students aged 18 or older, enrolled in a full-time course at a recognized institution</p>
    <p><strong>Processing Fee for Student Loan:</strong> No application fee for student loan</p>
    <p><strong>Key Features of the Student Loan:</strong></p>
    <ul>
        <li>Loans available for tuition fees, books, and other educational expenses</li>
        <li>Fixed monthly repayments for student loans</li>
        <li>Flexible repayment terms after graduation</li>
        <li>Low interest rates on student loans</li>
    </ul>

    <h3>6. Debt Consolidation Loan from HSBC</h3>
    <p><strong>Loan Amount for Debt Consolidation:</strong> £1,000 to £50,000</p>
    <p><strong>Interest Rate for Debt Consolidation Loan:</strong> From 4.9% APR</p>
    <p><strong>Loan Tenure for Debt Consolidation:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Debt Consolidation Loan:</strong> UK residents with multiple debts and good credit score</p>
    <p><strong>Processing Fee for Debt Consolidation Loan:</strong> No application fee</p>
    <p><strong>Key Features of Debt Consolidation Loan:</strong></p>
    <ul>
        <li>Combine multiple loans into one simple monthly repayment</li>
        <li>Fixed interest rates for debt consolidation loan</li>
        <li>Lower monthly repayments possible with consolidation loan</li>
        <li>Quick loan approval for debt consolidation</li>
    </ul>

    <br>

       <h1>NatWest Bank Loan Products</h1>

    <h3>1. Personal Loan from NatWest</h3>
    <p><strong>Loan Amount:</strong> £1,000 to £50,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> From 3.9% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> UK residents aged 18 or older with a good credit score and stable income</p>
    <p><strong>Processing Fee for Personal Loan:</strong> No application fee for personal loan</p>
    <p><strong>Key Features of the Personal Loan:</strong></p>
    <ul>
        <li>Fixed interest rates for the personal loan</li>
        <li>Flexible repayment options for personal loans</li>
        <li>No early repayment fees for personal loans</li>
        <li>Fast online application process for personal loans</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from NatWest</h3>
    <p><strong>Loan Amount for Mortgage:</strong> £25,000 to £2,000,000</p>
    <p><strong>Interest Rate for Mortgage Loan:</strong> From 2.5% (fixed rates)</p>
    <p><strong>Loan Tenure:</strong> Up to 40 years for mortgage loan repayment</p>
    <p><strong>Eligibility for Home Loan:</strong> UK residents with stable income and good credit scores</p>
    <p><strong>Processing Fee for Mortgage Loan:</strong> £999 for mortgage loan applications</p>
    <p><strong>Key Features of the Home Loan:</strong></p>
    <ul>
        <li>Flexible mortgage loan options (fixed and variable rates)</li>
        <li>Repayment holiday options for home loans</li>
        <li>Ability to overpay on mortgage loans without penalty</li>
        <li>Manage mortgage loan repayments online easily</li>
    </ul>

    <h3>3. Car Loan from NatWest</h3>
    <p><strong>Loan Amount for Car Loan:</strong> £1,000 to £50,000</p>
    <p><strong>Interest Rate for Car Loan:</strong> From 3.7% APR</p>
    <p><strong>Loan Tenure for Car Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Car Loan:</strong> UK residents aged 18 or older with a stable income and good credit history</p>
    <p><strong>Processing Fee for Car Loan:</strong> No application fee for the car loan</p>
    <p><strong>Key Features of the Car Loan:</strong></p>
    <ul>
        <li>Fixed monthly payments for the car loan</li>
        <li>Loans available for both new and used cars</li>
        <li>Option to repay the car loan early without penalties</li>
        <li>Simple application process for car loan</li>
    </ul>

    <h3>4. Business Loan from NatWest</h3>
    <p><strong>Loan Amount for Business Loan:</strong> From £1,000 to £250,000 (higher amounts may be available for large businesses)</p>
    <p><strong>Interest Rate for Business Loan:</strong> From 4.0% APR (depending on the loan amount and business credit score)</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> UK businesses with at least 12 months of trading history and a good credit rating</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies based on loan amount</p>
    <p><strong>Key Features of the Business Loan:</strong></p>
    <ul>
        <li>Flexible repayment options for business loans</li>
        <li>Quick approval process for business loan applications</li>
        <li>Loans available for expansion and working capital</li>
        <li>Competitive interest rates for business loans</li>
    </ul>

    <h3>5. Student Loan from NatWest</h3>
    <p><strong>Loan Amount for Student Loan:</strong> Up to £25,000</p>
    <p><strong>Interest Rate for Student Loan:</strong> From 4.5% APR</p>
    <p><strong>Loan Tenure for Student Loan:</strong> 1 to 6 years</p>
    <p><strong>Eligibility for Student Loan:</strong> UK students aged 18 or older, enrolled in a full-time course at an accredited university</p>
    <p><strong>Processing Fee for Student Loan:</strong> No application fee for student loan</p>
    <p><strong>Key Features of the Student Loan:</strong></p>
    <ul>
        <li>Loans available for tuition fees, books, and other education-related expenses</li>
        <li>Fixed monthly repayments for student loans</li>
        <li>Flexible repayment terms for student loans after graduation</li>
        <li>Low interest rates on student loans</li>
    </ul>

    <h3>6. Debt Consolidation Loan from NatWest</h3>
    <p><strong>Loan Amount for Debt Consolidation:</strong> £1,000 to £50,000</p>
    <p><strong>Interest Rate for Debt Consolidation Loan:</strong> From 4.8% APR</p>
    <p><strong>Loan Tenure for Debt Consolidation:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Debt Consolidation Loan:</strong> UK residents with multiple debts and a good credit score</p>
    <p><strong>Processing Fee for Debt Consolidation Loan:</strong> No application fee</p>
    <p><strong>Key Features of Debt Consolidation Loan:</strong></p>
    <ul>
        <li>Combine multiple debts into one monthly repayment</li>
        <li>Lower interest rates on debt consolidation loans</li>
        <li>Flexible repayment options for debt consolidation</li>
        <li>Quick approval and loan disbursal for debt consolidation</li>
    </ul>

    `;
} else if (getTimeZoneCountry() == "UAE") {
  ContentContainer.innerHTML = `
         <h4>Types of Loans in UAE</h4>
         <ul>
            <li>First Abu Dhabi Bank (FAB)</li>
            <li>Emirates NBD</li>
            <li>Abu Dhabi Commercial Bank (ADCB)</li>
            <li>Dubai Islamic Bank (DIB)</li>
        </ul>

          <h1>First Abu Dhabi Bank (FAB) Loan Products</h1>

    <h3>1. Personal Loan from FAB</h3>
    <p><strong>Loan Amount:</strong> AED 5,000 to AED 500,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 3.99% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 4 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> UAE residents with a stable income, a good credit score, and aged 21 or older</p>
    <p><strong>Processing Fee for Personal Loan:</strong> No processing fee for personal loan applications</p>
    <p><strong>Key Features of FAB Personal Loan:</strong></p>
    <ul>
        <li>Flexible loan amounts for personal loan needs</li>
        <li>Quick and simple application process for personal loan approval</li>
        <li>Easy monthly installments for personal loan repayments</li>
        <li>Prepayment options with no early repayment penalties for the loan</li>
        <li>Competitive interest rates on personal loan products</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from FAB</h3>
    <p><strong>Loan Amount for Home Loan:</strong> AED 500,000 to AED 10,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.69% for home loan mortgages</p>
    <p><strong>Loan Tenure for Home Loan:</strong> Up to 25 years</p>
    <p><strong>Eligibility for Home Loan:</strong> UAE residents, age between 21 and 60, with a stable income and good credit history</p>
    <p><strong>Processing Fee for Home Loan:</strong> AED 1,000 for mortgage loan applications</p>
    <p><strong>Key Features of FAB Home Loan:</strong></p>
    <ul>
        <li>Attractive interest rates for home loans and mortgage products</li>
        <li>Flexible repayment terms for home loan customers</li>
        <li>Quick approval process for home loan applications</li>
        <li>Ability to borrow up to 80% of the property's value</li>
        <li>No prepayment penalties for mortgage loan repayments</li>
    </ul>

    <h3>3. Car Loan from FAB</h3>
    <p><strong>Loan Amount for Car Loan:</strong> AED 10,000 to AED 500,000</p>
    <p><strong>Interest Rate for Car Loan:</strong> Starting from 2.99% APR</p>
    <p><strong>Loan Tenure for Car Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Car Loan:</strong> UAE residents aged 21 years or older with a good credit score and stable income</p>
    <p><strong>Processing Fee for Car Loan:</strong> AED 1,000 for the car loan application</p>
    <p><strong>Key Features of FAB Car Loan:</strong></p>
    <ul>
        <li>Easy car loan approval with competitive interest rates</li>
        <li>Flexible loan tenure options for car loans</li>
        <li>Loan amount for new and used cars</li>
        <li>No early repayment fees for the car loan</li>
        <li>Quick and simple online application for car loan</li>
    </ul>

    <h3>4. Business Loan from FAB</h3>
    <p><strong>Loan Amount for Business Loan:</strong> AED 50,000 to AED 5,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> From 5.0% APR (variable)</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> UAE-based businesses with a stable financial history, at least 1 year of operations, and a good credit score</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies based on the loan amount</p>
    <p><strong>Key Features of FAB Business Loan:</strong></p>
    <ul>
        <li>Loans available for working capital and business expansion</li>
        <li>Attractive interest rates for business loans</li>
        <li>Flexible repayment terms for business loan customers</li>
        <li>Quick approval and disbursement process for business loans</li>
        <li>Option for a loan amount up to AED 5,000,000 for eligible businesses</li>
    </ul>

    <h3>5. Auto Loan Refinancing from FAB</h3>
    <p><strong>Loan Amount for Auto Loan Refinancing:</strong> Up to 100% of the vehicle's value</p>
    <p><strong>Interest Rate for Auto Loan Refinancing:</strong> Starting from 3.5% APR</p>
    <p><strong>Loan Tenure for Auto Loan Refinancing:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Auto Loan Refinancing:</strong> UAE residents with an existing car loan and a good credit history</p>
    <p><strong>Processing Fee for Auto Loan Refinancing:</strong> AED 500 for refinancing applications</p>
    <p><strong>Key Features of Auto Loan Refinancing:</strong></p>
    <ul>
        <li>Refinance your existing car loan with lower interest rates</li>
        <li>Flexible repayment options for auto loan refinancing</li>
        <li>Quick processing of refinancing loan applications</li>
        <li>Flexible tenure to fit your budget for auto loan refinancing</li>
    </ul>

    <h3>6. Personal Loan for Expats from FAB</h3>
    <p><strong>Loan Amount for Expat Personal Loan:</strong> AED 5,000 to AED 500,000</p>
    <p><strong>Interest Rate for Expat Personal Loan:</strong> From 4.5% APR</p>
    <p><strong>Loan Tenure for Expat Personal Loan:</strong> 1 to 4 years</p>
    <p><strong>Eligibility for Expat Personal Loan:</strong> Expatriates in the UAE with a stable income, good credit score, and aged 21 or older</p>
    <p><strong>Processing Fee for Expat Personal Loan:</strong> AED 500 for expatriate loan applications</p>
    <p><strong>Key Features of Expat Personal Loan:</strong></p>
    <ul>
        <li>Loans available for expatriates with competitive interest rates</li>
        <li>Flexible loan tenure options for expatriates</li>
        <li>Quick and simple personal loan application process for expats</li>
        <li>No early repayment charges for expat personal loans</li>
    </ul>
    <br>
     <h1>Emirates NBD Loan Products</h1>

    <h3>1. Personal Loan from Emirates NBD</h3>
    <p><strong>Loan Amount:</strong> AED 5,000 to AED 500,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 3.25% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 4 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> UAE residents with a stable income and a good credit score, aged 21 or older</p>
    <p><strong>Processing Fee for Personal Loan:</strong> No processing fee for personal loan applications</p>
    <p><strong>Key Features of Emirates NBD Personal Loan:</strong></p>
    <ul>
        <li>Quick and easy approval process for personal loans</li>
        <li>Flexible loan repayment options with competitive interest rates</li>
        <li>No early repayment fees for personal loan borrowers</li>
        <li>Loan amount up to 20 times the monthly salary</li>
        <li>Access to instant cash with personal loan disbursement</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from Emirates NBD</h3>
    <p><strong>Loan Amount for Home Loan:</strong> AED 500,000 to AED 10,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.49% for home loans</p>
    <p><strong>Loan Tenure for Home Loan:</strong> Up to 25 years</p>
    <p><strong>Eligibility for Home Loan:</strong> UAE residents, aged 21 to 60, with stable income and a good credit history</p>
    <p><strong>Processing Fee for Home Loan:</strong> AED 1,000 for home loan applications</p>
    <p><strong>Key Features of Emirates NBD Home Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for home loans and mortgages</li>
        <li>Ability to finance up to 80% of the property's value</li>
        <li>Flexible repayment terms for home loan borrowers</li>
        <li>Easy home loan application process with quick approval</li>
        <li>No prepayment penalties for home loan early settlements</li>
    </ul>

    <h3>3. Car Loan from Emirates NBD</h3>
    <p><strong>Loan Amount for Car Loan:</strong> AED 10,000 to AED 500,000</p>
    <p><strong>Interest Rate for Car Loan:</strong> Starting from 3.99% APR</p>
    <p><strong>Loan Tenure for Car Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Car Loan:</strong> UAE residents aged 21 years or older with a stable income</p>
    <p><strong>Processing Fee for Car Loan:</strong> AED 1,000 for car loan applications</p>
    <p><strong>Key Features of Emirates NBD Car Loan:</strong></p>
    <ul>
        <li>Attractive interest rates for car loans</li>
        <li>Flexible loan tenure options for car buyers</li>
        <li>Loan amount for both new and used vehicles</li>
        <li>Quick loan approval process for car financing</li>
        <li>No early repayment charges for car loan prepayments</li>
    </ul>

    <h3>4. Business Loan from Emirates NBD</h3>
    <p><strong>Loan Amount for Business Loan:</strong> AED 50,000 to AED 10,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> From 5.5% APR (variable)</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> UAE-based businesses with a stable financial history, at least 2 years in operation, and a good credit score</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies depending on the loan amount</p>
    <p><strong>Key Features of Emirates NBD Business Loan:</strong></p>
    <ul>
        <li>Quick approval and disbursement of business loans</li>
        <li>Flexible loan amounts for various business needs</li>
        <li>Loan repayment options tailored to business cash flow</li>
        <li>Competitive interest rates for businesses in the UAE</li>
        <li>Short and long-term loan solutions for business expansion</li>
    </ul>

    <h3>5. Personal Loan for Expatriates from Emirates NBD</h3>
    <p><strong>Loan Amount for Expatriate Personal Loan:</strong> AED 5,000 to AED 500,000</p>
    <p><strong>Interest Rate for Expatriate Personal Loan:</strong> From 4.25% APR</p>
    <p><strong>Loan Tenure for Expatriate Personal Loan:</strong> 1 to 4 years</p>
    <p><strong>Eligibility for Expatriate Personal Loan:</strong> Expatriates in the UAE with a stable income and a good credit score</p>
    <p><strong>Processing Fee for Expatriate Personal Loan:</strong> AED 500 for expatriate loan applications</p>
    <p><strong>Key Features of Emirates NBD Expatriate Personal Loan:</strong></p>
    <ul>
        <li>Flexible repayment options for expatriates living in the UAE</li>
        <li>Loan approval based on income and credit score</li>
        <li>Fast processing of expatriate loan applications</li>
        <li>No hidden charges or fees for expatriate loans</li>
        <li>Ability to borrow up to 20 times the monthly salary</li>
    </ul>

    <h3>6. Home Loan Refinance from Emirates NBD</h3>
    <p><strong>Loan Amount for Home Loan Refinance:</strong> Up to 90% of the property's value</p>
    <p><strong>Interest Rate for Home Loan Refinance:</strong> Starting from 3.49% for home loan refinancing</p>
    <p><strong>Loan Tenure for Home Loan Refinance:</strong> Up to 25 years</p>
    <p><strong>Eligibility for Home Loan Refinance:</strong> UAE residents with an existing mortgage loan and good credit history</p>
    <p><strong>Processing Fee for Home Loan Refinance:</strong> AED 1,000 for home loan refinancing applications</p>
    <p><strong>Key Features of Emirates NBD Home Loan Refinance:</strong></p>
    <ul>
        <li>Refinance your existing home loan with lower interest rates</li>
        <li>Flexible loan tenure for home loan refinancing</li>
        <li>Quick approval and disbursement of home loan refinancing applications</li>
        <li>Ability to access up to 90% of the property's current value</li>
        <li>Loan repayment options tailored to your financial situation</li>
    </ul>

    <br>

      <h1>Abu Dhabi Commercial Bank (ADCB) Loan Products</h1>

    <h3>1. Personal Loan from ADCB</h3>
    <p><strong>Loan Amount:</strong> AED 5,000 to AED 1,000,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 3.49% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 4 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> UAE residents with a minimum salary of AED 5,000 per month</p>
    <p><strong>Processing Fee for Personal Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of ADCB Personal Loan:</strong></p>
    <ul>
        <li>Attractive interest rates for personal loans</li>
        <li>Loan amounts up to AED 1,000,000</li>
        <li>Flexible loan repayment options with personalized tenures</li>
        <li>No early settlement fee for personal loans</li>
        <li>Quick approval and fast disbursement of personal loans</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from ADCB</h3>
    <p><strong>Loan Amount for Home Loan:</strong> AED 500,000 to AED 10,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.49% for home loans</p>
    <p><strong>Loan Tenure for Home Loan:</strong> Up to 25 years</p>
    <p><strong>Eligibility for Home Loan:</strong> UAE residents, aged between 21 and 60 years, with a good credit history</p>
    <p><strong>Processing Fee for Home Loan:</strong> AED 1,000</p>
    <p><strong>Key Features of ADCB Home Loan:</strong></p>
    <ul>
        <li>Competitive interest rates on home loans and mortgages</li>
        <li>Finance up to 80% of the property’s value</li>
        <li>Flexible loan repayment terms for home loan borrowers</li>
        <li>No prepayment charges on early settlement of home loan</li>
        <li>Easy and fast approval process for home loans</li>
    </ul>

    <h3>3. Car Loan from ADCB</h3>
    <p><strong>Loan Amount for Car Loan:</strong> AED 20,000 to AED 1,000,000</p>
    <p><strong>Interest Rate for Car Loan:</strong> Starting from 3.99% APR</p>
    <p><strong>Loan Tenure for Car Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Car Loan:</strong> UAE residents aged 21 years or older with a stable income</p>
    <p><strong>Processing Fee for Car Loan:</strong> AED 500</p>
    <p><strong>Key Features of ADCB Car Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for car loan applicants</li>
        <li>Financing for both new and used cars</li>
        <li>Flexible repayment options tailored to the borrower’s financial situation</li>
        <li>No prepayment penalties for car loan early settlements</li>
        <li>Quick loan approval process for car financing</li>
    </ul>

    <h3>4. Business Loan from ADCB</h3>
    <p><strong>Loan Amount for Business Loan:</strong> AED 100,000 to AED 10,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 5.0% APR (variable)</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> UAE-based businesses with a proven track record and good credit history</p>
    <p><strong>Processing Fee for Business Loan:</strong> Depends on the loan amount</p>
    <p><strong>Key Features of ADCB Business Loan:</strong></p>
    <ul>
        <li>Flexible loan amounts to suit various business needs</li>
        <li>Short-term and long-term loan options for businesses</li>
        <li>Quick loan approval process for businesses in the UAE</li>
        <li>Loan repayment terms designed around business cash flow</li>
        <li>Easy and fast access to working capital</li>
    </ul>

    <h3>5. Personal Loan for Expats from ADCB</h3>
    <p><strong>Loan Amount for Expatriate Personal Loan:</strong> AED 5,000 to AED 1,000,000</p>
    <p><strong>Interest Rate for Expatriate Personal Loan:</strong> Starting from 4.25% APR</p>
    <p><strong>Loan Tenure for Expatriate Personal Loan:</strong> 1 to 4 years</p>
    <p><strong>Eligibility for Expatriate Personal Loan:</strong> Expatriates residing in the UAE with a stable income</p>
    <p><strong>Processing Fee for Expatriate Personal Loan:</strong> AED 500</p>
    <p><strong>Key Features of ADCB Expatriate Personal Loan:</strong></p>
    <ul>
        <li>Attractive loan offers for expatriates in the UAE</li>
        <li>Loan repayment options that suit expatriate needs</li>
        <li>Simple and quick approval process for expatriate loans</li>
        <li>No hidden charges or fees</li>
        <li>Loan amounts up to 20 times the monthly salary</li>
    </ul>

    <h3>6. Home Loan Refinance from ADCB</h3>
    <p><strong>Loan Amount for Home Loan Refinance:</strong> Up to 90% of the property’s market value</p>
    <p><strong>Interest Rate for Home Loan Refinance:</strong> Starting from 3.49%</p>
    <p><strong>Loan Tenure for Home Loan Refinance:</strong> Up to 25 years</p>
    <p><strong>Eligibility for Home Loan Refinance:</strong> UAE residents with an existing mortgage loan</p>
    <p><strong>Processing Fee for Home Loan Refinance:</strong> AED 1,000</p>
    <p><strong>Key Features of ADCB Home Loan Refinance:</strong></p>
    <ul>
        <li>Refinance your existing mortgage loan with better interest rates</li>
        <li>Flexible loan repayment terms for home loan refinancing</li>
        <li>Quick approval for home loan refinancing applications</li>
        <li>Finance up to 90% of your property’s value</li>
        <li>No prepayment fees for home loan refinancing</li>
    </ul>

    <br>
 <h1>Dubai Islamic Bank (DIB) Loan Products</h1>

    <h3>1. Personal Loan from DIB</h3>
    <p><strong>Loan Amount:</strong> AED 5,000 to AED 1,000,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 3.49% APR</p>
    <p><strong>Loan Tenure:</strong> 1 to 4 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> UAE residents with a minimum salary of AED 5,000 per month</p>
    <p><strong>Processing Fee for Personal Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of DIB Personal Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for personal loans</li>
        <li>Loan amounts up to AED 1,000,000</li>
        <li>Flexible repayment options for personal loans</li>
        <li>No early settlement fee for personal loans</li>
        <li>Quick approval process for personal loans</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from DIB</h3>
    <p><strong>Loan Amount for Home Loan:</strong> AED 500,000 to AED 15,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.49%</p>
    <p><strong>Loan Tenure for Home Loan:</strong> Up to 25 years</p>
    <p><strong>Eligibility for Home Loan:</strong> UAE residents, aged between 21 and 65 years, with a stable income and good credit history</p>
    <p><strong>Processing Fee for Home Loan:</strong> AED 1,000</p>
    <p><strong>Key Features of DIB Home Loan:</strong></p>
    <ul>
        <li>Sharia-compliant home loan options with competitive rates</li>
        <li>Financing up to 85% of the property’s value</li>
        <li>Flexible loan repayment terms for home loan borrowers</li>
        <li>No prepayment charges on early settlement</li>
        <li>Fast loan approval and easy documentation for home loan seekers</li>
    </ul>

    <h3>3. Car Loan from DIB</h3>
    <p><strong>Loan Amount for Car Loan:</strong> AED 20,000 to AED 1,000,000</p>
    <p><strong>Interest Rate for Car Loan:</strong> Starting from 3.99% APR</p>
    <p><strong>Loan Tenure for Car Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Car Loan:</strong> UAE residents with a stable income and a good credit score</p>
    <p><strong>Processing Fee for Car Loan:</strong> AED 500</p>
    <p><strong>Key Features of DIB Car Loan:</strong></p>
    <ul>
        <li>Sharia-compliant car loan options for new and used vehicles</li>
        <li>Competitive interest rates for car loans</li>
        <li>Quick approval and flexible repayment options</li>
        <li>No early settlement fees for car loan borrowers</li>
        <li>Easy documentation and processing for car loans</li>
    </ul>

    <h3>4. Business Loan from DIB</h3>
    <p><strong>Loan Amount for Business Loan:</strong> AED 100,000 to AED 5,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 5.0% APR</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> UAE-based businesses with a proven track record and good credit history</p>
    <p><strong>Processing Fee for Business Loan:</strong> AED 1,000</p>
    <p><strong>Key Features of DIB Business Loan:</strong></p>
    <ul>
        <li>Sharia-compliant business loans for all types of enterprises</li>
        <li>Quick loan approval and competitive interest rates for businesses</li>
        <li>Flexible repayment options based on the business's cash flow</li>
        <li>Loan amounts based on business requirements</li>
        <li>Quick access to working capital for businesses in the UAE</li>
    </ul>

    <h3>5. Personal Loan for Expats from DIB</h3>
    <p><strong>Loan Amount for Expatriate Personal Loan:</strong> AED 5,000 to AED 1,000,000</p>
    <p><strong>Interest Rate for Expatriate Personal Loan:</strong> Starting from 4.25% APR</p>
    <p><strong>Loan Tenure for Expatriate Personal Loan:</strong> 1 to 4 years</p>
    <p><strong>Eligibility for Expatriate Personal Loan:</strong> Expatriates residing in the UAE with a stable income</p>
    <p><strong>Processing Fee for Expatriate Personal Loan:</strong> AED 500</p>
    <p><strong>Key Features of DIB Expatriate Personal Loan:</strong></p>
    <ul>
        <li>Attractive loan offers for expatriates in the UAE</li>
        <li>Quick approval for expatriate loans with flexible repayment terms</li>
        <li>No hidden charges or fees for expatriate personal loans</li>
        <li>Loan amounts up to 20 times the monthly salary</li>
        <li>Sharia-compliant personal loans for expatriates</li>
    </ul>

    <h3>6. Home Loan Refinance from DIB</h3>
    <p><strong>Loan Amount for Home Loan Refinance:</strong> Up to 85% of the property’s market value</p>
    <p><strong>Interest Rate for Home Loan Refinance:</strong> Starting from 3.49%</p>
    <p><strong>Loan Tenure for Home Loan Refinance:</strong> Up to 25 years</p>
    <p><strong>Eligibility for Home Loan Refinance:</strong> UAE residents with an existing mortgage loan</p>
    <p><strong>Processing Fee for Home Loan Refinance:</strong> AED 1,000</p>
    <p><strong>Key Features of DIB Home Loan Refinance:</strong></p>
    <ul>
        <li>Sharia-compliant refinancing options for home loans</li>
        <li>Refinance your existing home loan with better interest rates</li>
        <li>Flexible repayment terms for home loan refinancing</li>
        <li>Quick and easy approval for home loan refinancing</li>
        <li>Finance up to 85% of your property’s market value</li>
    </ul>
    `;
} else if (getTimeZoneCountry() == "USA") {
  ContentContainer.innerHTML = `
          <h4>Types of Loans in USA</h4>
     <ul>
            <li>JPMorgan Chase & Co.</li>
            <li>Bank of America</li>
            <li>Wells Fargo</li>
            <li>Citigroup (Citi)</li>
        </ul>
        <br>

         <h1>JPMorgan Chase & Co. Loan Products</h1>

    <h3>1. Personal Loan from JPMorgan Chase</h3>
    <p><strong>Loan Amount:</strong> Up to $50,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 6.99% APR</p>
    <p><strong>Loan Tenure:</strong> 12 to 60 months</p>
    <p><strong>Eligibility for Personal Loan:</strong> U.S. citizens or permanent residents with a minimum credit score of 660 and a stable income</p>
    <p><strong>Processing Fee for Personal Loan:</strong> None</p>
    <p><strong>Key Features of JPMorgan Chase Personal Loan:</strong></p>
    <ul>
        <li>Competitive fixed rates for personal loans</li>
        <li>Flexible repayment options and terms</li>
        <li>No fees for early loan repayment</li>
        <li>Quick approval and disbursement process</li>
        <li>Easy online application and management of loans</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from JPMorgan Chase</h3>
    <p><strong>Loan Amount for Home Loan:</strong> $50,000 to $5,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.125% APR (for fixed-rate mortgages)</p>
    <p><strong>Loan Tenure for Home Loan:</strong> 15 to 30 years</p>
    <p><strong>Eligibility for Home Loan:</strong> U.S. residents with a stable income, a good credit score, and an existing home</p>
    <p><strong>Processing Fee for Home Loan:</strong> $400 – $1,000</p>
    <p><strong>Key Features of JPMorgan Chase Home Loan:</strong></p>
    <ul>
        <li>Sharia-compliant and competitive mortgage loan rates</li>
        <li>Refinancing options for existing homeowners</li>
        <li>Low down payment options for first-time homebuyers</li>
        <li>Dedicated mortgage specialists for seamless loan application</li>
        <li>Comprehensive online tools for mortgage calculators and rates</li>
    </ul>

    <h3>3. Auto Loan from JPMorgan Chase</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> $4,000 to $100,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 3.24% APR</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 36 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> U.S. residents with a minimum credit score of 620</p>
    <p><strong>Processing Fee for Auto Loan:</strong> None</p>
    <p><strong>Key Features of JPMorgan Chase Auto Loan:</strong></p>
    <ul>
        <li>Low interest rates and flexible terms for car loan borrowers</li>
        <li>Quick and easy approval process for auto loans</li>
        <li>Available for both new and used cars</li>
        <li>Dedicated customer service for auto loan inquiries</li>
        <li>Online tools for managing car loan payments and balance</li>
    </ul>

    <h3>4. Business Loan from JPMorgan Chase</h3>
    <p><strong>Loan Amount for Business Loan:</strong> $10,000 to $10,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 6.50% APR</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 10 years</p>
    <p><strong>Eligibility for Business Loan:</strong> U.S.-based businesses with stable financial history and operations</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies by loan size</p>
    <p><strong>Key Features of JPMorgan Chase Business Loan:</strong></p>
    <ul>
        <li>Sharia-compliant financing options for businesses</li>
        <li>Flexible loan terms for working capital and expansion</li>
        <li>Quick approval for small and large business loans</li>
        <li>Access to a dedicated business banker for loan management</li>
        <li>Loans available for all business sizes across industries</li>
    </ul>

    <h3>5. Home Equity Line of Credit (HELOC) from JPMorgan Chase</h3>
    <p><strong>Loan Amount for HELOC:</strong> $25,000 to $500,000</p>
    <p><strong>Interest Rate for HELOC:</strong> Starting from 7.25% APR</p>
    <p><strong>Loan Tenure for HELOC:</strong> Up to 30 years</p>
    <p><strong>Eligibility for HELOC:</strong> U.S. residents with a minimum credit score of 620 and sufficient equity in the home</p>
    <p><strong>Processing Fee for HELOC:</strong> Varies by loan amount</p>
    <p><strong>Key Features of JPMorgan Chase HELOC:</strong></p>
    <ul>
        <li>Competitive interest rates on home equity lines of credit</li>
        <li>Flexible borrowing options based on home equity</li>
        <li>Access to funds whenever needed through a line of credit</li>
        <li>No closing costs for eligible customers</li>
        <li>Easy access to funds for home improvement or debt consolidation</li>
    </ul>

    <h3>6. Student Loan from JPMorgan Chase</h3>
    <p><strong>Loan Amount for Student Loan:</strong> Up to $100,000</p>
    <p><strong>Interest Rate for Student Loan:</strong> Starting from 4.50% APR</p>
    <p><strong>Loan Tenure for Student Loan:</strong> 5 to 20 years</p>
    <p><strong>Eligibility for Student Loan:</strong> U.S. students enrolled in accredited institutions with a co-signer or credit history</p>
    <p><strong>Processing Fee for Student Loan:</strong> None</p>
    <p><strong>Key Features of JPMorgan Chase Student Loan:</strong></p>
    <ul>
        <li>Sharia-compliant student loan options with competitive rates</li>
        <li>Flexible repayment terms to accommodate students' financial needs</li>
        <li>Option for co-signers to help students with limited credit history</li>
        <li>Easy application process for both undergraduate and graduate students</li>
        <li>Dedicated support for managing student loan repayment</li>
    </ul>

     <h1>Bank of America Loan Products</h1>

    <h3>1. Personal Loan from Bank of America</h3>
    <p><strong>Loan Amount:</strong> Up to $35,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 6.99% APR</p>
    <p><strong>Loan Tenure:</strong> 12 to 60 months</p>
    <p><strong>Eligibility for Personal Loan:</strong> U.S. citizens or permanent residents with a minimum credit score of 660 and a stable income</p>
    <p><strong>Processing Fee for Personal Loan:</strong> None</p>
    <p><strong>Key Features of Bank of America Personal Loan:</strong></p>
    <ul>
        <li>Competitive fixed rates for personal loans</li>
        <li>Flexible repayment options and terms</li>
        <li>No fees for early loan repayment</li>
        <li>Quick approval and disbursement process</li>
        <li>Easy online application and management of loans</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from Bank of America</h3>
    <p><strong>Loan Amount for Home Loan:</strong> $50,000 to $5,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.250% APR (for fixed-rate mortgages)</p>
    <p><strong>Loan Tenure for Home Loan:</strong> 15 to 30 years</p>
    <p><strong>Eligibility for Home Loan:</strong> U.S. residents with a stable income, a good credit score, and an existing home</p>
    <p><strong>Processing Fee for Home Loan:</strong> $400 – $1,500</p>
    <p><strong>Key Features of Bank of America Home Loan:</strong></p>
    <ul>
        <li>Low down payment options for first-time homebuyers</li>
        <li>Refinancing options available to reduce monthly payments</li>
        <li>FHA and VA loan options for qualifying borrowers</li>
        <li>Dedicated mortgage specialists to help you through the process</li>
        <li>Comprehensive online tools for mortgage calculators and rates</li>
    </ul>

    <h3>3. Auto Loan from Bank of America</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> $7,500 to $100,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 3.24% APR</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 36 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> U.S. residents with a minimum credit score of 620</p>
    <p><strong>Processing Fee for Auto Loan:</strong> None</p>
    <p><strong>Key Features of Bank of America Auto Loan:</strong></p>
    <ul>
        <li>Low rates and flexible terms for new and used cars</li>
        <li>Quick and easy approval process</li>
        <li>Available for both new and used vehicles</li>
        <li>Loans for both individuals and businesses</li>
        <li>Convenient online management of loan payments and balance</li>
    </ul>

    <h3>4. Business Loan from Bank of America</h3>
    <p><strong>Loan Amount for Business Loan:</strong> $10,000 to $5,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 6.50% APR</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 10 years</p>
    <p><strong>Eligibility for Business Loan:</strong> U.S.-based businesses with stable financial history and operations</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies by loan size</p>
    <p><strong>Key Features of Bank of America Business Loan:</strong></p>
    <ul>
        <li>Flexible loan options for working capital and business expansion</li>
        <li>Quick approval process for small and large business loans</li>
        <li>Loans tailored to meet the needs of various industries</li>
        <li>Easy online access to business loan applications and updates</li>
        <li>Business resources and tools available to loan applicants</li>
    </ul>

    <h3>5. Home Equity Line of Credit (HELOC) from Bank of America</h3>
    <p><strong>Loan Amount for HELOC:</strong> $25,000 to $500,000</p>
    <p><strong>Interest Rate for HELOC:</strong> Starting from 5.99% APR</p>
    <p><strong>Loan Tenure for HELOC:</strong> 10 to 30 years</p>
    <p><strong>Eligibility for HELOC:</strong> U.S. residents with a minimum credit score of 620 and sufficient equity in the home</p>
    <p><strong>Processing Fee for HELOC:</strong> None</p>
    <p><strong>Key Features of Bank of America HELOC:</strong></p>
    <ul>
        <li>Flexible borrowing based on your home’s equity</li>
        <li>Low rates with easy access to funds as needed</li>
        <li>Ability to draw funds multiple times during the draw period</li>
        <li>Competitive rates and flexible repayment options</li>
        <li>Quick and simple application process with no hidden fees</li>
    </ul>

    <h3>6. Student Loan from Bank of America</h3>
    <p><strong>Loan Amount for Student Loan:</strong> Up to $100,000</p>
    <p><strong>Interest Rate for Student Loan:</strong> Starting from 4.50% APR</p>
    <p><strong>Loan Tenure for Student Loan:</strong> 5 to 20 years</p>
    <p><strong>Eligibility for Student Loan:</strong> U.S. students enrolled in accredited institutions with a co-signer or credit history</p>
    <p><strong>Processing Fee for Student Loan:</strong> None</p>
    <p><strong>Key Features of Bank of America Student Loan:</strong></p>
    <ul>
        <li>Low rates for undergraduate, graduate, and parent loans</li>
        <li>Option for co-signers to help with credit history</li>
        <li>Flexible repayment options for students</li>
        <li>Easy online application and management of student loans</li>
        <li>Dedicated support to help with loan repayment after graduation</li>
    </ul>

    <br>
    <h1>Wells Fargo Loan Products</h1>

    <h3>1. Personal Loan from Wells Fargo</h3>
    <p><strong>Loan Amount:</strong> $3,000 to $100,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 6.99% APR</p>
    <p><strong>Loan Tenure:</strong> 12 to 60 months</p>
    <p><strong>Eligibility for Personal Loan:</strong> U.S. residents with a minimum credit score of 660</p>
    <p><strong>Processing Fee for Personal Loan:</strong> None</p>
    <p><strong>Key Features of Wells Fargo Personal Loan:</strong></p>
    <ul>
        <li>Fixed rates and flexible repayment terms</li>
        <li>No application fees or origination fees</li>
        <li>Quick and easy online application process</li>
        <li>Same-day funding available for qualified applicants</li>
        <li>Convenient loan management via online tools</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from Wells Fargo</h3>
    <p><strong>Loan Amount for Home Loan:</strong> $50,000 to $3,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.125% APR (for fixed-rate mortgages)</p>
    <p><strong>Loan Tenure for Home Loan:</strong> 15 to 30 years</p>
    <p><strong>Eligibility for Home Loan:</strong> U.S. residents with a good credit history and stable income</p>
    <p><strong>Processing Fee for Home Loan:</strong> Varies based on loan type</p>
    <p><strong>Key Features of Wells Fargo Home Loan:</strong></p>
    <ul>
        <li>Competitive fixed and adjustable rates for various loan types</li>
        <li>Down payment assistance for first-time homebuyers</li>
        <li>Refinancing options for better rates or lower monthly payments</li>
        <li>FHA and VA loans available for qualifying borrowers</li>
        <li>Dedicated mortgage specialists to guide you through the process</li>
    </ul>

    <h3>3. Auto Loan from Wells Fargo</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> $5,000 to $100,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 5.49% APR</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 36 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> U.S. residents with a minimum credit score of 660</p>
    <p><strong>Processing Fee for Auto Loan:</strong> None</p>
    <p><strong>Key Features of Wells Fargo Auto Loan:</strong></p>
    <ul>
        <li>Fixed-rate auto loans for new and used cars</li>
        <li>Flexible terms to suit your budget</li>
        <li>Competitive rates with no application fee</li>
        <li>Easy online loan application process</li>
        <li>Quick approval and same-day funding for qualified buyers</li>
    </ul>

    <h3>4. Home Equity Loan (HEL) from Wells Fargo</h3>
    <p><strong>Loan Amount for Home Equity Loan:</strong> $10,000 to $500,000</p>
    <p><strong>Interest Rate for Home Equity Loan:</strong> Starting from 5.74% APR</p>
    <p><strong>Loan Tenure for Home Equity Loan:</strong> 5 to 30 years</p>
    <p><strong>Eligibility for Home Equity Loan:</strong> U.S. homeowners with sufficient equity in their property</p>
    <p><strong>Processing Fee for Home Equity Loan:</strong> $0 to $1,500</p>
    <p><strong>Key Features of Wells Fargo Home Equity Loan:</strong></p>
    <ul>
        <li>Fixed interest rates with predictable monthly payments</li>
        <li>Easy access to funds for home improvement, debt consolidation, and more</li>
        <li>No application fees or annual fees for most loans</li>
        <li>Loans available up to 85% of your home’s equity</li>
        <li>Flexible repayment terms with a variety of loan options</li>
    </ul>

    <h3>5. Small Business Loan from Wells Fargo</h3>
    <p><strong>Loan Amount for Small Business Loan:</strong> $5,000 to $5,000,000</p>
    <p><strong>Interest Rate for Small Business Loan:</strong> Starting from 7.25% APR</p>
    <p><strong>Loan Tenure for Small Business Loan:</strong> 1 to 10 years</p>
    <p><strong>Eligibility for Small Business Loan:</strong> U.S.-based businesses with an established financial track record</p>
    <p><strong>Processing Fee for Small Business Loan:</strong> Varies based on loan size</p>
    <p><strong>Key Features of Wells Fargo Small Business Loan:</strong></p>
    <ul>
        <li>Flexible loan terms for various business needs</li>
        <li>Fast approval and funding process for small businesses</li>
        <li>Customizable loans for equipment, working capital, or expansion</li>
        <li>Access to additional business resources and tools</li>
        <li>Personalized support from Wells Fargo’s business specialists</li>
    </ul>

    <h3>6. Student Loan from Wells Fargo</h3>
    <p><strong>Loan Amount for Student Loan:</strong> $1,000 to $120,000</p>
    <p><strong>Interest Rate for Student Loan:</strong> Starting from 5.74% APR</p>
    <p><strong>Loan Tenure for Student Loan:</strong> 5 to 15 years</p>
    <p><strong>Eligibility for Student Loan:</strong> U.S. students enrolled in accredited institutions with or without a co-signer</p>
    <p><strong>Processing Fee for Student Loan:</strong> None</p>
    <p><strong>Key Features of Wells Fargo Student Loan:</strong></p>
    <ul>
        <li>Flexible repayment options with interest-only and deferred payment plans</li>
        <li>Co-signer release option after 12 consecutive on-time payments</li>
        <li>Loans available for both undergraduate and graduate programs</li>
        <li>Competitive rates for both fixed and variable interest loans</li>
        <li>Online account management and automatic payment discounts</li>
    </ul>

    <br>
<h1>Citigroup (Citi) Loan Products</h1>

    <h3>1. Personal Loan from Citi</h3>
    <p><strong>Loan Amount:</strong> $2,000 to $30,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 7.99% APR</p>
    <p><strong>Loan Tenure:</strong> 12 to 60 months</p>
    <p><strong>Eligibility for Personal Loan:</strong> U.S. residents with a minimum credit score of 660</p>
    <p><strong>Processing Fee for Personal Loan:</strong> None</p>
    <p><strong>Key Features of Citi Personal Loan:</strong></p>
    <ul>
        <li>Fixed interest rates with predictable monthly payments</li>
        <li>No application fee or origination fee</li>
        <li>Flexible loan terms to suit your financial needs</li>
        <li>Fast approval and funding process</li>
        <li>Easy online application and loan management tools</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from Citi</h3>
    <p><strong>Loan Amount for Home Loan:</strong> $50,000 to $3,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.125% APR (for fixed-rate mortgages)</p>
    <p><strong>Loan Tenure for Home Loan:</strong> 15 to 30 years</p>
    <p><strong>Eligibility for Home Loan:</strong> U.S. residents with a good credit history and stable income</p>
    <p><strong>Processing Fee for Home Loan:</strong> Varies based on loan type</p>
    <p><strong>Key Features of Citi Home Loan:</strong></p>
    <ul>
        <li>Competitive fixed and adjustable rates</li>
        <li>Down payment assistance options available for first-time homebuyers</li>
        <li>Refinancing options available for better terms</li>
        <li>FHA and VA loans for qualified borrowers</li>
        <li>Personalized mortgage advisors for seamless loan management</li>
    </ul>

    <h3>3. Auto Loan from Citi</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> $5,000 to $100,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 6.99% APR</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 36 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> U.S. residents with a minimum credit score of 660</p>
    <p><strong>Processing Fee for Auto Loan:</strong> None</p>
    <p><strong>Key Features of Citi Auto Loan:</strong></p>
    <ul>
        <li>Flexible loan terms for new and used cars</li>
        <li>Fixed-rate loans with competitive interest rates</li>
        <li>Quick approval and funding process for buyers</li>
        <li>Easy online application process with fast decisions</li>
        <li>Options for loan refinancing to lower monthly payments</li>
    </ul>

    <h3>4. Home Equity Loan (HEL) from Citi</h3>
    <p><strong>Loan Amount for Home Equity Loan:</strong> $10,000 to $500,000</p>
    <p><strong>Interest Rate for Home Equity Loan:</strong> Starting from 5.25% APR</p>
    <p><strong>Loan Tenure for Home Equity Loan:</strong> 5 to 30 years</p>
    <p><strong>Eligibility for Home Equity Loan:</strong> U.S. homeowners with equity in their property</p>
    <p><strong>Processing Fee for Home Equity Loan:</strong> None</p>
    <p><strong>Key Features of Citi Home Equity Loan:</strong></p>
    <ul>
        <li>Fixed interest rates with predictable monthly payments</li>
        <li>Access to funds for home improvements, debt consolidation, or other financial needs</li>
        <li>Loans available up to 85% of your home’s equity</li>
        <li>No annual fees or application fees for most loans</li>
        <li>Personalized loan terms and easy access to funds</li>
    </ul>

    <h3>5. Small Business Loan from Citi</h3>
    <p><strong>Loan Amount for Small Business Loan:</strong> $10,000 to $5,000,000</p>
    <p><strong>Interest Rate for Small Business Loan:</strong> Starting from 7.50% APR</p>
    <p><strong>Loan Tenure for Small Business Loan:</strong> 1 to 10 years</p>
    <p><strong>Eligibility for Small Business Loan:</strong> U.S.-based businesses with a track record of financial performance</p>
    <p><strong>Processing Fee for Small Business Loan:</strong> Varies based on loan size</p>
    <p><strong>Key Features of Citi Small Business Loan:</strong></p>
    <ul>
        <li>Flexible loan options for various business needs</li>
        <li>Fast processing and funding for qualified businesses</li>
        <li>Competitive rates and terms for business owners</li>
        <li>Access to business lines of credit and term loans</li>
        <li>Personalized financial advice from Citi’s business specialists</li>
    </ul>

    <h3>6. Student Loan from Citi</h3>
    <p><strong>Loan Amount for Student Loan:</strong> $1,000 to $120,000</p>
    <p><strong>Interest Rate for Student Loan:</strong> Starting from 6.99% APR</p>
    <p><strong>Loan Tenure for Student Loan:</strong> 5 to 15 years</p>
    <p><strong>Eligibility for Student Loan:</strong> U.S. students enrolled in accredited institutions, with or without a co-signer</p>
    <p><strong>Processing Fee for Student Loan:</strong> None</p>
    <p><strong>Key Features of Citi Student Loan:</strong></p>
    <ul>
        <li>Flexible repayment options with deferment or interest-only payments</li>
        <li>Loans for both undergraduate and graduate programs</li>
        <li>Co-signer release option after making 12 consecutive on-time payments</li>
        <li>Competitive interest rates with both fixed and variable options</li>
        <li>Easy online management and automatic payment discounts</li>
    </ul>
    `;
} else if (getTimeZoneCountry() == "Thailand") {
  ContentContainer.innerHTML = `
          <h4>Types of Loans in Thailand</h4>
        <ul>
            <li>Bangkok Bank (BBL)</li>
            <li>Kasikornbank (KBank)</li>
            <li>Thai Military Bank (TMB)</li>
            <li>Siam Commercial Bank (SCB)</li>
        </ul>
        <br>
        
         <h1>Bangkok Bank (BBL) Loan Products</h1>

    <h3>1. Personal Loan from Bangkok Bank</h3>
    <p><strong>Loan Amount:</strong> THB 10,000 to THB 1,000,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 15.99% per annum</p>
    <p><strong>Loan Tenure:</strong> 12 to 60 months</p>
    <p><strong>Eligibility for Personal Loan:</strong> Thai residents with a stable income and a good credit history</p>
    <p><strong>Processing Fee for Personal Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of Bangkok Bank Personal Loan:</strong></p>
    <ul>
        <li>Fixed interest rates with easy repayment options</li>
        <li>Fast approval process</li>
        <li>No collateral required</li>
        <li>Flexible loan terms that can be tailored to your needs</li>
        <li>Instant approval for qualified applicants</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from Bangkok Bank</h3>
    <p><strong>Loan Amount for Home Loan:</strong> THB 500,000 to THB 10,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.75% per annum (Fixed rate for the first 3 years)</p>
    <p><strong>Loan Tenure for Home Loan:</strong> 10 to 30 years</p>
    <p><strong>Eligibility for Home Loan:</strong> Thai citizens with proof of income and stable employment</p>
    <p><strong>Processing Fee for Home Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of Bangkok Bank Home Loan:</strong></p>
    <ul>
        <li>Fixed or floating interest rates to suit different preferences</li>
        <li>Flexible loan repayment terms</li>
        <li>Flexible down payment options</li>
        <li>Home loan calculators available for precise budgeting</li>
        <li>Online mortgage application and management tools</li>
    </ul>

    <h3>3. Auto Loan from Bangkok Bank</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> THB 100,000 to THB 2,000,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 5.99% per annum</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 12 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> Thai citizens with a stable income and a good credit record</p>
    <p><strong>Processing Fee for Auto Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of Bangkok Bank Auto Loan:</strong></p>
    <ul>
        <li>Flexible loan terms and competitive interest rates</li>
        <li>Loans available for new and used cars</li>
        <li>No collateral required for qualified applicants</li>
        <li>Quick loan approval process</li>
        <li>Insurance options available for your vehicle</li>
    </ul>

    <h3>4. Business Loan from Bangkok Bank</h3>
    <p><strong>Loan Amount for Business Loan:</strong> THB 100,000 to THB 50,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 6.5% per annum</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 12 months to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> Thai business owners with a stable cash flow and financial records</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies based on loan type</p>
    <p><strong>Key Features of Bangkok Bank Business Loan:</strong></p>
    <ul>
        <li>Flexible loan terms with lower interest rates for established businesses</li>
        <li>Loans available for working capital, machinery, and expansion needs</li>
        <li>Quick application process and fast decision-making</li>
        <li>Comprehensive loan options for both small and large businesses</li>
        <li>Additional support for business advice and financial planning</li>
    </ul>

    <h3>5. Home Equity Loan from Bangkok Bank</h3>
    <p><strong>Loan Amount for Home Equity Loan:</strong> THB 100,000 to THB 5,000,000</p>
    <p><strong>Interest Rate for Home Equity Loan:</strong> Starting from 4.75% per annum</p>
    <p><strong>Loan Tenure for Home Equity Loan:</strong> 5 to 20 years</p>
    <p><strong>Eligibility for Home Equity Loan:</strong> Thai homeowners with equity in their property</p>
    <p><strong>Processing Fee for Home Equity Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of Bangkok Bank Home Equity Loan:</strong></p>
    <ul>
        <li>Access to funds for home renovations, education, or debt consolidation</li>
        <li>Competitive interest rates and flexible repayment options</li>
        <li>Loan amount based on your property’s value</li>
        <li>Fast approval process with minimal paperwork</li>
        <li>Online application and loan tracking tools</li>
    </ul>

    <br>
      <h1>Kasikornbank (KBank) Loan Products</h1>

    <h3>1. Personal Loan from Kasikornbank (KBank)</h3>
    <p><strong>Loan Amount:</strong> THB 10,000 to THB 1,000,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 15.99% per annum</p>
    <p><strong>Loan Tenure:</strong> 12 to 60 months</p>
    <p><strong>Eligibility for Personal Loan:</strong> Thai citizens with a stable income and good credit history</p>
    <p><strong>Processing Fee for Personal Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of Kasikornbank Personal Loan:</strong></p>
    <ul>
        <li>Quick approval with minimal paperwork</li>
        <li>Flexible repayment terms</li>
        <li>No collateral required</li>
        <li>Attractive interest rates</li>
        <li>Fixed-rate options available for easier budgeting</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from Kasikornbank (KBank)</h3>
    <p><strong>Loan Amount for Home Loan:</strong> THB 500,000 to THB 10,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.45% per annum (Fixed rate for the first 3 years)</p>
    <p><strong>Loan Tenure for Home Loan:</strong> 10 to 30 years</p>
    <p><strong>Eligibility for Home Loan:</strong> Thai citizens with proof of income and stable employment</p>
    <p><strong>Processing Fee for Home Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of Kasikornbank Home Loan:</strong></p>
    <ul>
        <li>Fixed or floating interest rates</li>
        <li>Competitive loan tenure options</li>
        <li>Flexible down payment options</li>
        <li>Prepayment options with no penalty</li>
        <li>Easy online application process</li>
    </ul>

    <h3>3. Auto Loan from Kasikornbank (KBank)</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> THB 100,000 to THB 2,000,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 5.99% per annum</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 12 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> Thai citizens with a stable income and a good credit record</p>
    <p><strong>Processing Fee for Auto Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of Kasikornbank Auto Loan:</strong></p>
    <ul>
        <li>Loans for new and used cars</li>
        <li>Flexible loan terms</li>
        <li>Competitive interest rates</li>
        <li>Fast approval with online application</li>
        <li>Insurance options available for the vehicle</li>
    </ul>

    <h3>4. Business Loan from Kasikornbank (KBank)</h3>
    <p><strong>Loan Amount for Business Loan:</strong> THB 100,000 to THB 50,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 6.5% per annum</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 12 months to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> Thai business owners with a stable cash flow and financial records</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies based on loan type</p>
    <p><strong>Key Features of Kasikornbank Business Loan:</strong></p>
    <ul>
        <li>Flexible repayment terms</li>
        <li>Loans for working capital, expansion, and equipment purchase</li>
        <li>Online loan application and management system</li>
        <li>Fast loan approval and decision-making</li>
        <li>Advisory services available for business growth</li>
    </ul>

    <h3>5. Home Equity Loan from Kasikornbank (KBank)</h3>
    <p><strong>Loan Amount for Home Equity Loan:</strong> THB 100,000 to THB 5,000,000</p>
    <p><strong>Interest Rate for Home Equity Loan:</strong> Starting from 4.75% per annum</p>
    <p><strong>Loan Tenure for Home Equity Loan:</strong> 5 to 20 years</p>
    <p><strong>Eligibility for Home Equity Loan:</strong> Thai homeowners with equity in their property</p>
    <p><strong>Processing Fee for Home Equity Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of Kasikornbank Home Equity Loan:</strong></p>
    <ul>
        <li>Access funds for personal or business needs</li>
        <li>Flexible loan terms and repayment schedules</li>
        <li>Loan amount based on property value</li>
        <li>Online application process for fast approval</li>
        <li>No collateral required, secured by home equity</li>
    </ul>
    <br>
     <h1>Thai Military Bank (TMB) Loan Products</h1>

    <h3>1. Personal Loan from Thai Military Bank (TMB)</h3>
    <p><strong>Loan Amount:</strong> THB 10,000 to THB 1,000,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 16% per annum</p>
    <p><strong>Loan Tenure:</strong> 12 to 60 months</p>
    <p><strong>Eligibility for Personal Loan:</strong> Thai citizens with a stable income and good credit history</p>
    <p><strong>Processing Fee for Personal Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of TMB Personal Loan:</strong></p>
    <ul>
        <li>Fast approval process with minimal paperwork</li>
        <li>Flexible loan tenure options</li>
        <li>No collateral required</li>
        <li>Attractive interest rates</li>
        <li>Fixed-rate loan options available</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from Thai Military Bank (TMB)</h3>
    <p><strong>Loan Amount for Home Loan:</strong> THB 500,000 to THB 10,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.65% per annum (Fixed rate for the first 3 years)</p>
    <p><strong>Loan Tenure for Home Loan:</strong> 10 to 30 years</p>
    <p><strong>Eligibility for Home Loan:</strong> Thai citizens with proof of income and stable employment</p>
    <p><strong>Processing Fee for Home Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of TMB Home Loan:</strong></p>
    <ul>
        <li>Fixed or floating interest rates based on customer preference</li>
        <li>Competitive loan tenure options</li>
        <li>Flexibility in the down payment</li>
        <li>Online application available for quick processing</li>
        <li>Prepayment options with no penalty</li>
    </ul>

    <h3>3. Auto Loan from Thai Military Bank (TMB)</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> THB 100,000 to THB 2,000,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 5.25% per annum</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 12 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> Thai citizens with a stable income and a good credit history</p>
    <p><strong>Processing Fee for Auto Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of TMB Auto Loan:</strong></p>
    <ul>
        <li>Loans for both new and used vehicles</li>
        <li>Fast approval with online loan application</li>
        <li>Flexible loan tenure options</li>
        <li>Competitive interest rates</li>
        <li>Insurance options available for vehicle</li>
    </ul>

    <h3>4. Business Loan from Thai Military Bank (TMB)</h3>
    <p><strong>Loan Amount for Business Loan:</strong> THB 100,000 to THB 50,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 6% per annum</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 12 months to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> Thai business owners with a stable financial background and records</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies based on loan type</p>
    <p><strong>Key Features of TMB Business Loan:</strong></p>
    <ul>
        <li>Loans available for working capital, business expansion, and equipment purchases</li>
        <li>Flexible repayment options</li>
        <li>Easy online application and approval process</li>
        <li>Personalized loan advisory services</li>
        <li>Loans available for both small and large enterprises</li>
    </ul>

    <h3>5. Home Equity Loan from Thai Military Bank (TMB)</h3>
    <p><strong>Loan Amount for Home Equity Loan:</strong> THB 100,000 to THB 5,000,000</p>
    <p><strong>Interest Rate for Home Equity Loan:</strong> Starting from 4.5% per annum</p>
    <p><strong>Loan Tenure for Home Equity Loan:</strong> 5 to 20 years</p>
    <p><strong>Eligibility for Home Equity Loan:</strong> Thai homeowners with equity in their property</p>
    <p><strong>Processing Fee for Home Equity Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of TMB Home Equity Loan:</strong></p>
    <ul>
        <li>Access funds by leveraging home equity</li>
        <li>Competitive interest rates for a secured loan</li>
        <li>Flexible loan tenure options</li>
        <li>Prepayment options available with no penalty</li>
        <li>Fast and simple online application</li>
    </ul>
    <br>
        <h1>Siam Commercial Bank (SCB) Loan Products</h1>

    <h3>1. Personal Loan from Siam Commercial Bank (SCB)</h3>
    <p><strong>Loan Amount:</strong> THB 10,000 to THB 1,000,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 15.99% per annum</p>
    <p><strong>Loan Tenure:</strong> 12 to 60 months</p>
    <p><strong>Eligibility for Personal Loan:</strong> Thai citizens with a stable income and good credit history</p>
    <p><strong>Processing Fee for Personal Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of SCB Personal Loan:</strong></p>
    <ul>
        <li>Fast approval process with minimal paperwork</li>
        <li>Flexible loan tenure options</li>
        <li>No collateral required</li>
        <li>Attractive interest rates</li>
        <li>Fixed-rate loan options available</li>
    </ul>

    <h3>2. Home Loan (Mortgage) from Siam Commercial Bank (SCB)</h3>
    <p><strong>Loan Amount for Home Loan:</strong> THB 500,000 to THB 10,000,000</p>
    <p><strong>Interest Rate for Home Loan:</strong> Starting from 3.55% per annum (Fixed rate for the first 3 years)</p>
    <p><strong>Loan Tenure for Home Loan:</strong> 10 to 30 years</p>
    <p><strong>Eligibility for Home Loan:</strong> Thai citizens with proof of income and stable employment</p>
    <p><strong>Processing Fee for Home Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of SCB Home Loan:</strong></p>
    <ul>
        <li>Fixed or floating interest rates based on customer preference</li>
        <li>Competitive loan tenure options</li>
        <li>Flexibility in the down payment</li>
        <li>Online application available for quick processing</li>
        <li>Prepayment options with no penalty</li>
    </ul>

    <h3>3. Auto Loan from Siam Commercial Bank (SCB)</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> THB 100,000 to THB 2,000,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 5.25% per annum</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 12 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> Thai citizens with a stable income and a good credit history</p>
    <p><strong>Processing Fee for Auto Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of SCB Auto Loan:</strong></p>
    <ul>
        <li>Loans for both new and used vehicles</li>
        <li>Fast approval with online loan application</li>
        <li>Flexible loan tenure options</li>
        <li>Competitive interest rates</li>
        <li>Insurance options available for vehicle</li>
    </ul>

    <h3>4. Business Loan from Siam Commercial Bank (SCB)</h3>
    <p><strong>Loan Amount for Business Loan:</strong> THB 100,000 to THB 50,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 6% per annum</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 12 months to 5 years</p>
    <p><strong>Eligibility for Business Loan:</strong> Thai business owners with a stable financial background and records</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies based on loan type</p>
    <p><strong>Key Features of SCB Business Loan:</strong></p>
    <ul>
        <li>Loans available for working capital, business expansion, and equipment purchases</li>
        <li>Flexible repayment options</li>
        <li>Easy online application and approval process</li>
        <li>Personalized loan advisory services</li>
        <li>Loans available for both small and large enterprises</li>
    </ul>

    <h3>5. Home Equity Loan from Siam Commercial Bank (SCB)</h3>
    <p><strong>Loan Amount for Home Equity Loan:</strong> THB 100,000 to THB 5,000,000</p>
    <p><strong>Interest Rate for Home Equity Loan:</strong> Starting from 4.5% per annum</p>
    <p><strong>Loan Tenure for Home Equity Loan:</strong> 5 to 20 years</p>
    <p><strong>Eligibility for Home Equity Loan:</strong> Thai homeowners with equity in their property</p>
    <p><strong>Processing Fee for Home Equity Loan:</strong> 1% of the loan amount</p>
    <p><strong>Key Features of SCB Home Equity Loan:</strong></p>
    <ul>
        <li>Access funds by leveraging home equity</li>
        <li>Competitive interest rates for a secured loan</li>
        <li>Flexible loan tenure options</li>
        <li>Prepayment options available with no penalty</li>
        <li>Fast and simple online application</li>
    </ul>
    <br>`;
} else if (getTimeZoneCountry() == "Canada") {
  ContentContainer.innerHTML = `
     <h4>Types of Loans in Canada</h4>
        <ul>
            <li>Royal Bank of Canada (RBC)</li>
            <li>Toronto Dominion Bank (TD Canada Trust)</li>
            <li>Scotiabank</li>
            <li>Bank of Montreal (BMO)</li>
        </ul>
        
         <h1>Royal Bank of Canada (RBC) Loan Products</h1>

    <h3>1. Personal Loan from Royal Bank of Canada (RBC)</h3>
    <p><strong>Loan Amount:</strong> CAD 1,000 to CAD 50,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 5.99% per annum</p>
    <p><strong>Loan Tenure:</strong> 6 months to 5 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> Canadian citizens with a stable income and good credit history</p>
    <p><strong>Processing Fee for Personal Loan:</strong> No application fee required</p>
    <p><strong>Key Features of RBC Personal Loan:</strong></p>
    <ul>
        <li>Fixed interest rate for the life of the loan</li>
        <li>No collateral required for personal loans</li>
        <li>Flexible repayment options (weekly, bi-weekly, monthly)</li>
        <li>Fast approval process</li>
        <li>Online application available for convenience</li>
    </ul>

    <h3>2. Mortgage Loan from Royal Bank of Canada (RBC)</h3>
    <p><strong>Loan Amount for Mortgage:</strong> CAD 50,000 to CAD 10,000,000</p>
    <p><strong>Interest Rate for Mortgage:</strong> Starting from 2.65% for a 5-year fixed-rate mortgage</p>
    <p><strong>Loan Tenure for Mortgage:</strong> 5 to 30 years</p>
    <p><strong>Eligibility for Mortgage:</strong> Canadian citizens with a stable income and good credit score</p>
    <p><strong>Processing Fee for Mortgage:</strong> No fee for regular applications</p>
    <p><strong>Key Features of RBC Mortgage Loan:</strong></p>
    <ul>
        <li>Fixed-rate, variable-rate, and hybrid mortgage options</li>
        <li>Prepayment options to help you pay off your mortgage faster</li>
        <li>High loan-to-value (LTV) ratio options for first-time homebuyers</li>
        <li>Special promotions for homebuyers, including cashback offers</li>
        <li>Ability to port your mortgage when you move</li>
    </ul>

    <h3>3. Auto Loan from Royal Bank of Canada (RBC)</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> CAD 5,000 to CAD 100,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 4.99% per annum</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 24 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> Canadian citizens with a stable income and a good credit history</p>
    <p><strong>Processing Fee for Auto Loan:</strong> No application fee</p>
    <p><strong>Key Features of RBC Auto Loan:</strong></p>
    <ul>
        <li>Loans for new and used vehicles</li>
        <li>Competitive interest rates and flexible terms</li>
        <li>Option to finance up to 100% of the vehicle’s purchase price</li>
        <li>Quick approval process with online applications</li>
        <li>No prepayment penalty</li>
    </ul>

    <h3>4. Business Loan from Royal Bank of Canada (RBC)</h3>
    <p><strong>Loan Amount for Business Loan:</strong> CAD 10,000 to CAD 5,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 6% per annum</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 10 years</p>
    <p><strong>Eligibility for Business Loan:</strong> Canadian businesses with a strong financial track record</p>
    <p><strong>Processing Fee for Business Loan:</strong> Varies depending on the loan type</p>
    <p><strong>Key Features of RBC Business Loan:</strong></p>
    <ul>
        <li>Lines of credit, term loans, and commercial mortgages available</li>
        <li>Competitive interest rates tailored to your business needs</li>
        <li>Flexible repayment schedules to align with business cash flow</li>
        <li>Pre-approval options for faster access to funds</li>
        <li>Advisory services for businesses to help manage finances</li>
    </ul>

    <h3>5. Home Equity Line of Credit (HELOC) from Royal Bank of Canada (RBC)</h3>
    <p><strong>Loan Amount for HELOC:</strong> Up to 80% of the value of your home</p>
    <p><strong>Interest Rate for HELOC:</strong> Starting from 4.75% per annum</p>
    <p><strong>Loan Tenure for HELOC:</strong> Flexible, depending on your repayment schedule</p>
    <p><strong>Eligibility for HELOC:</strong> Canadian homeowners with equity in their property</p>
    <p><strong>Processing Fee for HELOC:</strong> No application fee</p>
    <p><strong>Key Features of RBC HELOC:</strong></p>
    <ul>
        <li>Access funds as needed, with a credit limit based on your home’s equity</li>
        <li>Flexible interest rate and repayment options</li>
        <li>Draw on the line of credit as required for home renovations, education, or other needs</li>
        <li>No restrictions on how the funds can be used</li>
        <li>Easy access through RBC online banking</li>
    </ul>
    
    <br>

     <h1>Toronto Dominion Bank (TD Canada Trust) Loan Products</h1>

    <h3>1. Personal Loan from Toronto Dominion Bank (TD Canada Trust)</h3>
    <p><strong>Loan Amount:</strong> CAD 1,000 to CAD 50,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 5.99% per annum</p>
    <p><strong>Loan Tenure for Personal Loan:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> Canadian citizens with a stable income and good credit history</p>
    <p><strong>Processing Fee for Personal Loan:</strong> No application fee required for personal loan applications</p>
    <p><strong>Key Features of TD Canada Trust Personal Loan:</strong></p>
    <ul>
        <li>Fixed interest rates for the duration of the loan</li>
        <li>No collateral required for unsecured loans</li>
        <li>Flexible loan amounts starting from CAD 1,000 up to CAD 50,000</li>
        <li>Quick approval process with minimal documentation required</li>
        <li>Easy online loan application available for convenience</li>
        <li>Ability to make additional payments or pay off the loan early without penalty</li>
        <li>Fixed or flexible repayment options (weekly, bi-weekly, monthly)</li>
        <li>Loan amounts can be used for various purposes, such as debt consolidation, home improvements, or personal expenses</li>
    </ul>

    <h3>2. Mortgage Loan from Toronto Dominion Bank (TD Canada Trust)</h3>
    <p><strong>Loan Amount for Mortgage:</strong> CAD 50,000 to CAD 10,000,000</p>
    <p><strong>Interest Rate for Mortgage:</strong> Starting from 2.75% for a 5-year fixed-rate mortgage</p>
    <p><strong>Loan Tenure for Mortgage:</strong> 5 to 30 years</p>
    <p><strong>Eligibility for Mortgage Loan:</strong> Canadian citizens with stable income, good credit score, and a suitable property</p>
    <p><strong>Processing Fee for Mortgage Loan:</strong> No processing fee for regular mortgage applications</p>
    <p><strong>Key Features of TD Canada Trust Mortgage Loan:</strong></p>
    <ul>
        <li>Fixed-rate and variable-rate mortgage options</li>
        <li>Personalized mortgage solutions, including options for first-time homebuyers</li>
        <li>Large loan amounts available for purchasing homes, refinancing, or switching your mortgage</li>
        <li>Prepayment options available to help you pay off your mortgage faster</li>
        <li>Flexible payment options to suit your budget (monthly, accelerated weekly, or bi-weekly)</li>
        <li>Competitive interest rates with potential for discounts for first-time homebuyers or loyal customers</li>
        <li>Online tools to help calculate your mortgage payments and plan your budget</li>
        <li>Ability to take advantage of promotional rates and cashback mortgage offers</li>
        <li>Access to expert mortgage advisors to guide you through the home buying process</li>
    </ul>

    <h3>3. Auto Loan from Toronto Dominion Bank (TD Canada Trust)</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> CAD 5,000 to CAD 100,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 4.99% per annum</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 24 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> Canadian citizens with a stable income and good credit history</p>
    <p><strong>Processing Fee for Auto Loan:</strong> No processing fee</p>
    <p><strong>Key Features of TD Canada Trust Auto Loan:</strong></p>
    <ul>
        <li>Loans available for new or used cars, trucks, or SUVs</li>
        <li>Flexible loan amounts for financing up to 100% of the vehicle's price</li>
        <li>Low interest rates and customizable repayment terms</li>
        <li>Quick and easy online application process</li>
        <li>Pre-approval options available for faster access to funds</li>
        <li>No prepayment penalties, allowing you to pay off your loan early without extra charges</li>
        <li>Option to choose from flexible payment schedules: weekly, bi-weekly, or monthly</li>
        <li>Ability to add optional insurance for your vehicle loan</li>
        <li>Expert advice available for customers seeking guidance in choosing the best loan for their car purchase</li>
    </ul>

    <h3>4. Business Loan from Toronto Dominion Bank (TD Canada Trust)</h3>
    <p><strong>Loan Amount for Business Loan:</strong> CAD 10,000 to CAD 5,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 6.25% per annum</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 10 years</p>
    <p><strong>Eligibility for Business Loan:</strong> Canadian businesses with a solid financial track record</p>
    <p><strong>Processing Fee for Business Loan:</strong> Fees depend on the loan type</p>
    <p><strong>Key Features of TD Canada Trust Business Loan:</strong></p>
    <ul>
        <li>Offers a variety of business loan types including term loans, business lines of credit, and equipment financing</li>
        <li>Competitive interest rates tailored to business needs</li>
        <li>Flexible loan amounts for businesses of all sizes</li>
        <li>Repayment options designed to align with business cash flow</li>
        <li>Quick approval process with personalized loan terms</li>
        <li>Dedicated business advisors available for guidance</li>
        <li>Access to lines of credit to help businesses manage their working capital</li>
        <li>Commercial mortgage options for purchasing or refinancing business properties</li>
        <li>Flexible loan terms to match the specific needs of the business</li>
    </ul>

    <h3>5. Home Equity Line of Credit (HELOC) from Toronto Dominion Bank (TD Canada Trust)</h3>
    <p><strong>Loan Amount for HELOC:</strong> Up to 80% of the value of your home</p>
    <p><strong>Interest Rate for HELOC:</strong> Starting from 4.75% per annum</p>
    <p><strong>Loan Tenure for HELOC:</strong> Flexible, based on your repayment schedule</p>
    <p><strong>Eligibility for HELOC:</strong> Homeowners in Canada with sufficient equity in their property</p>
    <p><strong>Processing Fee for HELOC:</strong> No application fee</p>
    <p><strong>Key Features of TD Canada Trust HELOC:</strong></p>
    <ul>
        <li>Borrow against the equity of your home for major expenses like home renovations, education, or debt consolidation</li>
        <li>Flexible repayment terms with interest-only options available</li>
        <li>Access funds as needed through your TD Canada Trust online banking account</li>
        <li>Competitive interest rates with potential for tax benefits on interest payments</li>
        <li>Option to convert part of the HELOC into a fixed-rate loan for stability</li>
        <li>Pre-approval process available for faster access to funds</li>
        <li>Ability to borrow, repay, and borrow again, providing ongoing access to funds</li>
    </ul>

     <h1>Scotiabank Loan Products</h1>

    <h3>1. Personal Loan from Scotiabank</h3>
    <p><strong>Loan Amount:</strong> CAD 1,000 to CAD 50,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 5.99% per annum</p>
    <p><strong>Loan Tenure for Personal Loan:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> Canadian citizens with a stable income and good credit history</p>
    <p><strong>Processing Fee for Personal Loan:</strong> No application fee required for personal loan applications</p>
    <p><strong>Key Features of Scotiabank Personal Loan:</strong></p>
    <ul>
        <li>Fixed interest rates throughout the loan term</li>
        <li>No collateral required for unsecured loans</li>
        <li>Flexible loan amounts starting from CAD 1,000 up to CAD 50,000</li>
        <li>Fast approval process with minimal documentation</li>
        <li>Easy online loan application for convenience</li>
        <li>Flexible repayment options (weekly, bi-weekly, monthly)</li>
        <li>Loan amounts can be used for various purposes including debt consolidation, education, or home renovation</li>
        <li>No penalty for paying off the loan early</li>
    </ul>

    <h3>2. Mortgage Loan from Scotiabank</h3>
    <p><strong>Loan Amount for Mortgage:</strong> CAD 50,000 to CAD 5,000,000</p>
    <p><strong>Interest Rate for Mortgage:</strong> Starting from 2.75% for a 5-year fixed-rate mortgage</p>
    <p><strong>Loan Tenure for Mortgage:</strong> 5 to 30 years</p>
    <p><strong>Eligibility for Mortgage Loan:</strong> Canadian citizens with a stable income and good credit score</p>
    <p><strong>Processing Fee for Mortgage Loan:</strong> No processing fee for regular mortgage applications</p>
    <p><strong>Key Features of Scotiabank Mortgage Loan:</strong></p>
    <ul>
        <li>Fixed-rate and variable-rate mortgage options available</li>
        <li>Prepayment options to allow you to pay off your mortgage faster without penalties</li>
        <li>Mortgage loan amounts for first-time homebuyers, property refinancing, and home purchases</li>
        <li>Competitive interest rates for both fixed and adjustable-rate mortgages</li>
        <li>Customized payment schedules, including weekly, bi-weekly, and monthly options</li>
        <li>Promotional rates available for new customers</li>
        <li>Access to online tools for budgeting and calculating mortgage payments</li>
        <li>Professional mortgage advice and consultation services available to guide you through the process</li>
    </ul>

    <h3>3. Auto Loan from Scotiabank</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> CAD 5,000 to CAD 100,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 4.99% per annum</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 24 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> Canadian citizens with a stable income and good credit history</p>
    <p><strong>Processing Fee for Auto Loan:</strong> No processing fee</p>
    <p><strong>Key Features of Scotiabank Auto Loan:</strong></p>
    <ul>
        <li>Loans available for purchasing new or used cars, trucks, or SUVs</li>
        <li>Competitive interest rates and flexible loan repayment terms</li>
        <li>Option to finance up to 100% of the vehicle’s value</li>
        <li>Quick and easy application process</li>
        <li>Pre-approval available for faster access to loan amounts</li>
        <li>Flexible payment options (weekly, bi-weekly, or monthly)</li>
        <li>No prepayment penalties</li>
        <li>Ability to add optional loan protection and insurance</li>
    </ul>

    <h3>4. Business Loan from Scotiabank</h3>
    <p><strong>Loan Amount for Business Loan:</strong> CAD 10,000 to CAD 10,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 6.50% per annum</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 10 years</p>
    <p><strong>Eligibility for Business Loan:</strong> Canadian businesses with a solid financial track record</p>
    <p><strong>Processing Fee for Business Loan:</strong> Fees may apply based on loan type</p>
    <p><strong>Key Features of Scotiabank Business Loan:</strong></p>
    <ul>
        <li>Customized business loan options including term loans, lines of credit, and equipment financing</li>
        <li>Competitive interest rates tailored for businesses</li>
        <li>Quick approval process for business loans</li>
        <li>Flexible repayment options to suit your cash flow</li>
        <li>Access to working capital through business lines of credit</li>
        <li>Commercial mortgage loans available for purchasing or refinancing commercial properties</li>
        <li>Business advisors available to help structure the loan to fit your needs</li>
        <li>Loan options designed to help businesses with expansion, equipment purchases, or operational costs</li>
    </ul>

    <h3>5. Home Equity Line of Credit (HELOC) from Scotiabank</h3>
    <p><strong>Loan Amount for HELOC:</strong> Up to 80% of the value of your home</p>
    <p><strong>Interest Rate for HELOC:</strong> Starting from 4.75% per annum</p>
    <p><strong>Loan Tenure for HELOC:</strong> Flexible, based on your repayment schedule</p>
    <p><strong>Eligibility for HELOC:</strong> Homeowners in Canada with sufficient equity in their property</p>
    <p><strong>Processing Fee for HELOC:</strong> No application fee</p>
    <p><strong>Key Features of Scotiabank HELOC:</strong></p>
    <ul>
        <li>Use your home equity to finance major expenses like home renovations, education, or debt consolidation</li>
        <li>Flexible repayment terms with interest-only options</li>
        <li>Access funds as needed through Scotiabank online banking</li>
        <li>Competitive interest rates with the possibility of tax benefits</li>
        <li>Ability to convert part of the HELOC to a fixed-rate loan</li>
        <li>Pre-approval available for quicker access to funds</li>
        <li>Borrow, repay, and borrow again—providing ongoing access to credit</li>
    </ul>

    <h1>Bank of Montreal (BMO) Loan Products</h1>

    <h3>1. Personal Loan from BMO</h3>
    <p><strong>Loan Amount:</strong> CAD 1,000 to CAD 50,000</p>
    <p><strong>Interest Rate for Personal Loan:</strong> Starting from 5.99% per annum</p>
    <p><strong>Loan Tenure for Personal Loan:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loan:</strong> Canadian citizens with a stable income and good credit history</p>
    <p><strong>Processing Fee for Personal Loan:</strong> No application fee required for personal loan applications</p>
    <p><strong>Key Features of BMO Personal Loan:</strong></p>
    <ul>
        <li>Fixed interest rates for the entire loan term</li>
        <li>No collateral required for unsecured loans</li>
        <li>Flexible loan amounts starting from CAD 1,000 to CAD 50,000</li>
        <li>Quick approval process with minimal documentation</li>
        <li>Easy online application for convenience</li>
        <li>Flexible repayment options (weekly, bi-weekly, monthly)</li>
        <li>Can be used for various purposes such as debt consolidation, education, or home renovation</li>
        <li>No penalty for early loan repayment</li>
    </ul>

    <h3>2. Mortgage Loan from BMO</h3>
    <p><strong>Loan Amount for Mortgage:</strong> CAD 50,000 to CAD 5,000,000</p>
    <p><strong>Interest Rate for Mortgage:</strong> Starting from 2.79% for a 5-year fixed-rate mortgage</p>
    <p><strong>Loan Tenure for Mortgage:</strong> 5 to 30 years</p>
    <p><strong>Eligibility for Mortgage Loan:</strong> Canadian citizens with stable income and good credit score</p>
    <p><strong>Processing Fee for Mortgage Loan:</strong> No processing fee for regular mortgage applications</p>
    <p><strong>Key Features of BMO Mortgage Loan:</strong></p>
    <ul>
        <li>Fixed-rate and variable-rate mortgage options</li>
        <li>Prepayment options allowing you to pay off your mortgage faster without penalty</li>
        <li>Mortgage options for first-time homebuyers, property refinancing, or home purchases</li>
        <li>Competitive interest rates for both fixed and adjustable-rate mortgages</li>
        <li>Flexible payment schedules (weekly, bi-weekly, or monthly)</li>
        <li>Special promotions for new mortgage customers</li>
        <li>Access to online mortgage calculators and budgeting tools</li>
        <li>Professional mortgage advisors available to assist with loan options</li>
    </ul>

    <h3>3. Auto Loan from BMO</h3>
    <p><strong>Loan Amount for Auto Loan:</strong> CAD 5,000 to CAD 100,000</p>
    <p><strong>Interest Rate for Auto Loan:</strong> Starting from 4.49% per annum</p>
    <p><strong>Loan Tenure for Auto Loan:</strong> 24 to 72 months</p>
    <p><strong>Eligibility for Auto Loan:</strong> Canadian citizens with a stable income and good credit history</p>
    <p><strong>Processing Fee for Auto Loan:</strong> No processing fee</p>
    <p><strong>Key Features of BMO Auto Loan:</strong></p>
    <ul>
        <li>Loans available for purchasing new or used cars, trucks, or SUVs</li>
        <li>Competitive interest rates and flexible loan repayment terms</li>
        <li>Option to finance up to 100% of the vehicle’s value</li>
        <li>Pre-approval available for faster loan processing</li>
        <li>Easy application process with minimal documentation</li>
        <li>Flexible payment options (weekly, bi-weekly, or monthly)</li>
        <li>No prepayment penalties</li>
        <li>Optional insurance and loan protection available</li>
    </ul>

    <h3>4. Business Loan from BMO</h3>
    <p><strong>Loan Amount for Business Loan:</strong> CAD 10,000 to CAD 10,000,000</p>
    <p><strong>Interest Rate for Business Loan:</strong> Starting from 6.99% per annum</p>
    <p><strong>Loan Tenure for Business Loan:</strong> 1 to 10 years</p>
    <p><strong>Eligibility for Business Loan:</strong> Canadian businesses with a stable financial track record</p>
    <p><strong>Processing Fee for Business Loan:</strong> Fees may apply depending on the type of loan</p>
    <p><strong>Key Features of BMO Business Loan:</strong></p>
    <ul>
        <li>Customized business loan options including term loans, business lines of credit, and equipment financing</li>
        <li>Competitive interest rates specifically for business customers</li>
        <li>Fast approval process for business loans</li>
        <li>Flexible repayment options designed to suit your business cash flow</li>
        <li>Commercial mortgage loans available for property purchases or refinancing</li>
        <li>Support from professional advisors for structuring your loan</li>
        <li>Loan options for businesses looking to expand, purchase equipment, or manage operational costs</li>
        <li>Quick access to working capital with flexible business credit options</li>
    </ul>

    <h3>5. Home Equity Line of Credit (HELOC) from BMO</h3>
    <p><strong>Loan Amount for HELOC:</strong> Up to 80% of the value of your home</p>
    <p><strong>Interest Rate for HELOC:</strong> Starting from 4.60% per annum</p>
    <p><strong>Loan Tenure for HELOC:</strong> Flexible, based on your repayment schedule</p>
    <p><strong>Eligibility for HELOC:</strong> Homeowners in Canada with sufficient equity in their property</p>
    <p><strong>Processing Fee for HELOC:</strong> No application fee</p>
    <p><strong>Key Features of BMO HELOC:</strong></p>
    <ul>
        <li>Use your home equity for financing major expenses like home renovations, education, or debt consolidation</li>
        <li>Flexible repayment terms with interest-only payment options</li>
        <li>Access funds whenever needed through BMO online banking or mobile app</li>
        <li>Competitive interest rates with potential tax advantages</li>
        <li>Option to convert part of the HELOC to a fixed-rate loan for added stability</li>
        <li>Pre-approval available for easier access to funds</li>
        <li>Ongoing access to credit after you’ve paid down the balance</li>
        <li>Ability to borrow, repay, and borrow again as needed</li>
    </ul>

        `;
} else if (getTimeZoneCountry() == "Australia") {
  ContentContainer.innerHTML = `
         <h4>Types of Loans in Australia</h4>
        <ul>
            <li> Commonwealth Bank of Australia (CBA)</li>
            <li>Westpac Banking Corporation</li>
            <li>ANZ Bank</li>
            <li>National Australia Bank (NAB)</li>
        </ul>

          <h1>Commonwealth Bank of Australia (CBA) Loan Products</h1>

    <h3>1. Personal Loans from Commonwealth Bank</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> AUD 4,000 to AUD 50,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 6.99% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 7 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> Australian citizens or permanent residents with a stable income and a good credit score.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> No application fees required.</p>
    <p><strong>Key Features of CBA Personal Loan:</strong></p>
    <ul>
        <li>Flexible loan amounts, ranging from AUD 4,000 to AUD 50,000</li>
        <li>Fixed interest rates that remain consistent throughout the loan term</li>
        <li>Unsecured loan option with no need for collateral</li>
        <li>Flexible repayment options, including weekly, fortnightly, or monthly payments</li>
        <li>Quick loan approval process with minimal documentation</li>
        <li>Loan amounts can be used for various purposes such as debt consolidation, travel, home renovations, and emergencies</li>
        <li>No early repayment penalties</li>
    </ul>

    <h3>2. Home Loans from Commonwealth Bank</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 95% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 2.59% for a variable rate loan</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 1 year to 30 years</p>
    <p><strong>Eligibility for Home Loans:</strong> Australian citizens or permanent residents, with a stable income and a good credit score</p>
    <p><strong>Processing Fee for Home Loans:</strong> No processing fees for standard home loan products.</p>
    <p><strong>Key Features of CBA Home Loan:</strong></p>
    <ul>
        <li>Competitive fixed and variable interest rates for home loans</li>
        <li>Options for first-time homebuyers, home investors, and refinancers</li>
        <li>Flexible loan terms of up to 30 years to make repayments affordable</li>
        <li>Redraw facility for extra repayments made on the loan</li>
        <li>Access to offset accounts to reduce the amount of interest paid on the loan</li>
        <li>No upfront fees for many standard home loan products</li>
        <li>Flexible repayment options, such as weekly, fortnightly, or monthly</li>
        <li>Loan amounts available for purchasing new homes, investment properties, or refinancing existing loans</li>
    </ul>

    <h3>3. Car Loans from Commonwealth Bank</h3>
    <p><strong>Loan Amount for Car Loans:</strong> AUD 5,000 to AUD 100,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 5.99% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 7 years</p>
    <p><strong>Eligibility for Car Loans:</strong> Australian citizens or permanent residents with a stable income and good credit history</p>
    <p><strong>Processing Fee for Car Loans:</strong> No application fee for car loans</p>
    <p><strong>Key Features of CBA Car Loan:</strong></p>
    <ul>
        <li>Competitive fixed interest rates for both new and used car loans</li>
        <li>Secured car loans requiring the car as collateral</li>
        <li>Flexible loan terms (from 1 to 7 years) to match your budget</li>
        <li>Fast approval process with a simple online application</li>
        <li>Option to pre-approve your car loan for better budgeting</li>
        <li>Quick access to funds after loan approval for car purchase</li>
        <li>Flexible repayment options, including weekly, fortnightly, or monthly payments</li>
        <li>Loan amounts can be used to purchase new or used vehicles, including cars, trucks, and SUVs</li>
        <li>No early repayment penalties, giving you flexibility to pay off the loan faster</li>
    </ul>

    <h3>4. Business Loans from Commonwealth Bank</h3>
    <p><strong>Loan Amount for Business Loans:</strong> AUD 10,000 to AUD 10,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 6.50% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> Australian businesses with stable financials and good credit history</p>
    <p><strong>Processing Fee for Business Loans:</strong> Application fees may apply depending on the loan type.</p>
    <p><strong>Key Features of CBA Business Loan:</strong></p>
    <ul>
        <li>Flexible loan amounts for businesses of all sizes, from AUD 10,000 to AUD 10,000,000</li>
        <li>Competitive interest rates for various business financing needs</li>
        <li>Term loans, working capital loans, and equipment financing options</li>
        <li>Business overdraft and line of credit facilities for short-term financing</li>
        <li>Fast approval process for time-sensitive funding</li>
        <li>Flexible loan repayment terms to suit the cash flow of your business</li>
        <li>Financing options for expanding businesses, buying equipment, or refinancing existing debt</li>
        <li>Access to business advisors who can help structure your loan to meet specific needs</li>
    </ul>

    <h3>5. Home Equity Loans from Commonwealth Bank</h3>
    <p><strong>Loan Amount for Home Equity Loans:</strong> Up to 80% of the value of your home</p>
    <p><strong>Interest Rate for Home Equity Loans:</strong> Starting from 4.99% per annum</p>
    <p><strong>Loan Tenure for Home Equity Loans:</strong> Flexible terms based on loan agreement</p>
    <p><strong>Eligibility for Home Equity Loans:</strong> Homeowners with sufficient equity in their property</p>
    <p><strong>Processing Fee for Home Equity Loans:</strong> Minimal processing fees</p>
    <p><strong>Key Features of CBA Home Equity Loan:</strong></p>
    <ul>
        <li>Access up to 80% of your home's value as a line of credit</li>
        <li>Use your home equity for home renovations, debt consolidation, or major life expenses</li>
        <li>Flexible repayment options, including interest-only repayments</li>
        <li>Ability to access funds through online banking or ATMs</li>
        <li>Competitive interest rates and potential tax advantages</li>
        <li>Pre-approval for easy access to credit when needed</li>
        <li>Option to convert part of your home equity loan into a fixed-rate loan</li>
    </ul>
<br>

  <h1>Westpac Banking Corporation Loan Products</h1>

    <h3>1. Personal Loans from Westpac</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> AUD 4,000 to AUD 50,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 6.99% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 7 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> Australian citizens or permanent residents with a stable income and a good credit score.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> No application fees required.</p>
    <p><strong>Key Features of Westpac Personal Loan:</strong></p>
    <ul>
        <li>Flexible loan amounts from AUD 4,000 to AUD 50,000</li>
        <li>Fixed interest rates, offering repayment certainty over the loan term</li>
        <li>Unsecured loans, no need for collateral</li>
        <li>Flexible repayment schedules: weekly, fortnightly, or monthly</li>
        <li>Quick approval process with minimal documentation</li>
        <li>Use the loan for various purposes, including debt consolidation, home renovations, travel, and more</li>
        <li>No early repayment penalties</li>
    </ul>

    <h3>2. Home Loans from Westpac</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 95% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 2.69% for a variable rate loan</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 1 year to 30 years</p>
    <p><strong>Eligibility for Home Loans:</strong> Australian citizens or permanent residents with a stable income and a good credit score</p>
    <p><strong>Processing Fee for Home Loans:</strong> No processing fees for standard home loan products.</p>
    <p><strong>Key Features of Westpac Home Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for both fixed and variable home loans</li>
        <li>Loan options for first-time homebuyers, investors, and refinancing customers</li>
        <li>Flexible loan terms (1 to 30 years) to suit your financial situation</li>
        <li>Access to an offset account to reduce the interest paid on your loan</li>
        <li>Redraw facility available for additional repayments made</li>
        <li>Option to pay interest only on your home loan for a set period</li>
        <li>Flexible repayment options to help manage your budget</li>
        <li>Loan amounts available for buying, building, or refinancing homes</li>
    </ul>

    <h3>3. Car Loans from Westpac</h3>
    <p><strong>Loan Amount for Car Loans:</strong> AUD 5,000 to AUD 100,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 5.99% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 7 years</p>
    <p><strong>Eligibility for Car Loans:</strong> Australian citizens or permanent residents with stable income and a good credit score</p>
    <p><strong>Processing Fee for Car Loans:</strong> No application fee for car loans</p>
    <p><strong>Key Features of Westpac Car Loan:</strong></p>
    <ul>
        <li>Competitive interest rates on new and used car loans</li>
        <li>Secured car loans, with the car acting as collateral</li>
        <li>Loan amounts from AUD 5,000 to AUD 100,000</li>
        <li>Flexible repayment terms from 1 year to 7 years</li>
        <li>Pre-approval process for car loans to make budgeting easier</li>
        <li>Quick loan approval and access to funds for car purchases</li>
        <li>Option to pay the loan off early without penalties</li>
        <li>Flexible repayment options, such as weekly, fortnightly, or monthly payments</li>
    </ul>

    <h3>4. Business Loans from Westpac</h3>
    <p><strong>Loan Amount for Business Loans:</strong> AUD 10,000 to AUD 10,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 6.50% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> Australian businesses with stable financials and good credit history</p>
    <p><strong>Processing Fee for Business Loans:</strong> Application fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Westpac Business Loan:</strong></p>
    <ul>
        <li>Flexible loan amounts for small to large businesses, from AUD 10,000 to AUD 10,000,000</li>
        <li>Competitive interest rates with flexible loan structures</li>
        <li>Term loans, working capital loans, and equipment financing options available</li>
        <li>Business overdrafts and lines of credit for short-term financing needs</li>
        <li>Quick loan approval process to meet urgent business needs</li>
        <li>Repayment flexibility to align with your business cash flow</li>
        <li>Business advisors available to assist with loan structuring and financial guidance</li>
        <li>Loan amounts can be used for expansion, capital expenditure, equipment purchase, and more</li>
    </ul>

    <h3>5. Home Equity Loans from Westpac</h3>
    <p><strong>Loan Amount for Home Equity Loans:</strong> Up to 80% of the value of your home</p>
    <p><strong>Interest Rate for Home Equity Loans:</strong> Starting from 4.99% per annum</p>
    <p><strong>Loan Tenure for Home Equity Loans:</strong> Flexible terms based on loan agreement</p>
    <p><strong>Eligibility for Home Equity Loans:</strong> Homeowners with sufficient equity in their property</p>
    <p><strong>Processing Fee for Home Equity Loans:</strong> Minimal processing fees</p>
    <p><strong>Key Features of Westpac Home Equity Loan:</strong></p>
    <ul>
        <li>Access up to 80% of your home's value with a line of credit</li>
        <li>Use home equity for personal needs such as home improvements, debt consolidation, or large purchases</li>
        <li>Flexible repayment options with interest-only payment terms available</li>
        <li>Easy access to funds via online banking and ATMs</li>
        <li>Competitive interest rates and possible tax advantages</li>
        <li>Pre-approval for a smoother access to credit when needed</li>
        <li>Ability to convert part of your loan into a fixed-rate loan for stability</li>
    </ul>

    <br>
  <h1>ANZ Bank Loan Products</h1>

    <h3>1. Personal Loans from ANZ</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> AUD 5,000 to AUD 50,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 7.50% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> Australian citizens or permanent residents with a stable income and a good credit history.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> No application fees for personal loans.</p>
    <p><strong>Key Features of ANZ Personal Loan:</strong></p>
    <ul>
        <li>Flexible loan amounts ranging from AUD 5,000 to AUD 50,000</li>
        <li>Fixed interest rates for repayment certainty</li>
        <li>Unsecured personal loans, no collateral required</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Quick approval process with minimal documentation</li>
        <li>Use the loan for various purposes such as debt consolidation, home improvements, travel, or education</li>
        <li>No early repayment penalties</li>
    </ul>

    <h3>2. Home Loans from ANZ</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 95% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 2.79% for a variable rate loan</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 1 year to 30 years</p>
    <p><strong>Eligibility for Home Loans:</strong> Australian citizens or permanent residents with a stable income, good credit score, and a deposit.</p>
    <p><strong>Processing Fee for Home Loans:</strong> No processing fees for standard home loans.</p>
    <p><strong>Key Features of ANZ Home Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for both fixed and variable home loans</li>
        <li>Loan options for first-time homebuyers, investors, and refinancing customers</li>
        <li>Flexible loan terms (1 year to 30 years) to suit your financial situation</li>
        <li>Access to offset accounts to reduce interest paid on the loan</li>
        <li>Redraw facility available for additional repayments made</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Option to make interest-only payments for a set period</li>
        <li>Loan amounts available for purchasing, refinancing, or renovating your home</li>
    </ul>

    <h3>3. Car Loans from ANZ</h3>
    <p><strong>Loan Amount for Car Loans:</strong> AUD 5,000 to AUD 100,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 5.75% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 7 years</p>
    <p><strong>Eligibility for Car Loans:</strong> Australian citizens or permanent residents with a stable income and a good credit history.</p>
    <p><strong>Processing Fee for Car Loans:</strong> No application fees for car loans.</p>
    <p><strong>Key Features of ANZ Car Loan:</strong></p>
    <ul>
        <li>Loan amounts from AUD 5,000 to AUD 100,000</li>
        <li>Competitive interest rates for new and used car loans</li>
        <li>Fixed-rate car loans, offering certainty on repayments</li>
        <li>Secured loan with the car acting as collateral</li>
        <li>Pre-approval process available for faster car buying</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Quick approval process with minimal documentation</li>
        <li>No penalties for early repayments</li>
    </ul>

    <h3>4. Business Loans from ANZ</h3>
    <p><strong>Loan Amount for Business Loans:</strong> AUD 10,000 to AUD 10,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 6.00% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> Australian businesses with a stable financial situation and a good credit history.</p>
    <p><strong>Processing Fee for Business Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of ANZ Business Loan:</strong></p>
    <ul>
        <li>Flexible loan amounts from AUD 10,000 to AUD 10,000,000</li>
        <li>Competitive interest rates for small to medium enterprises</li>
        <li>Working capital, equipment financing, and term loans available</li>
        <li>Short-term and long-term loan options with flexible repayment structures</li>
        <li>Line of credit and overdraft facilities available for cash flow management</li>
        <li>Quick approval process to address urgent business financing needs</li>
        <li>Access to business advisers to help with loan structuring and financial management</li>
        <li>Repayment options: weekly, monthly, or annual installments</li>
    </ul>

    <h3>5. Home Equity Loans from ANZ</h3>
    <p><strong>Loan Amount for Home Equity Loans:</strong> Up to 80% of the value of your home</p>
    <p><strong>Interest Rate for Home Equity Loans:</strong> Starting from 5.60% per annum</p>
    <p><strong>Loan Tenure for Home Equity Loans:</strong> Flexible terms based on loan agreement</p>
    <p><strong>Eligibility for Home Equity Loans:</strong> Homeowners with sufficient equity in their property</p>
    <p><strong>Processing Fee for Home Equity Loans:</strong> Minimal processing fees may apply.</p>
    <p><strong>Key Features of ANZ Home Equity Loan:</strong></p>
    <ul>
        <li>Access up to 80% of your home's value with a home equity line of credit</li>
        <li>Use home equity for personal needs, such as home renovations, debt consolidation, or large purchases</li>
        <li>Flexible repayment terms to suit your financial situation</li>
        <li>Redraw facility available to access additional funds</li>
        <li>Competitive interest rates with the option to switch to a fixed-rate loan</li>
        <li>Pre-approval process for home equity loans for quicker access to funds</li>
        <li>Access funds through online banking and ATM withdrawals</li>
        <li>No penalties for early repayment of the loan</li>
    </ul>
    <br>

     <h1>National Australia Bank (NAB) Loan Products</h1>

    <h3>1. Personal Loans from NAB</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> AUD 5,000 to AUD 50,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 7.99% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> Australian citizens or permanent residents with a stable income and a good credit history.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> No application fees for personal loans.</p>
    <p><strong>Key Features of NAB Personal Loan:</strong></p>
    <ul>
        <li>Loan amounts from AUD 5,000 to AUD 50,000 for various personal needs</li>
        <li>Competitive fixed interest rates starting from 7.99% per annum</li>
        <li>Flexible loan terms ranging from 1 year to 5 years</li>
        <li>Unsecured loans with no need for collateral</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Easy online application and quick approval process</li>
        <li>Use the loan for purposes such as debt consolidation, home renovations, travel, or education</li>
        <li>No early repayment penalties for personal loans</li>
    </ul>

    <h3>2. Home Loans from NAB</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 95% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 2.69% for a variable rate loan</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 1 year to 30 years</p>
    <p><strong>Eligibility for Home Loans:</strong> Australian citizens or permanent residents with a stable income, good credit score, and a deposit.</p>
    <p><strong>Processing Fee for Home Loans:</strong> No processing fees for standard home loans.</p>
    <p><strong>Key Features of NAB Home Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for both fixed and variable rate home loans</li>
        <li>Loan options for first-time homebuyers, investors, and refinancing customers</li>
        <li>Loan amounts available up to 95% of the property value</li>
        <li>Flexible loan terms from 1 year to 30 years to suit your needs</li>
        <li>Access to offset accounts to reduce interest payments</li>
        <li>Redraw facility for additional repayments made</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Fast online approval and quick processing of home loan applications</li>
    </ul>

    <h3>3. Car Loans from NAB</h3>
    <p><strong>Loan Amount for Car Loans:</strong> AUD 5,000 to AUD 100,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 5.99% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 7 years</p>
    <p><strong>Eligibility for Car Loans:</strong> Australian citizens or permanent residents with a stable income and a good credit history.</p>
    <p><strong>Processing Fee for Car Loans:</strong> No application fees for car loans.</p>
    <p><strong>Key Features of NAB Car Loan:</strong></p>
    <ul>
        <li>Loan amounts from AUD 5,000 to AUD 100,000 for new and used cars</li>
        <li>Competitive interest rates starting from 5.99% per annum</li>
        <li>Fixed-rate car loans with a clear repayment schedule</li>
        <li>Secured loan with the vehicle acting as collateral</li>
        <li>Pre-approval option available for a quicker car purchase</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>No early repayment penalties for car loans</li>
        <li>Fast approval and quick disbursement of car loan funds</li>
    </ul>

    <h3>4. Business Loans from NAB</h3>
    <p><strong>Loan Amount for Business Loans:</strong> AUD 10,000 to AUD 10,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 6.00% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> Australian businesses with a stable financial situation and a good credit history.</p>
    <p><strong>Processing Fee for Business Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of NAB Business Loan:</strong></p>
    <ul>
        <li>Loan amounts available from AUD 10,000 to AUD 10,000,000</li>
        <li>Competitive interest rates for small and medium businesses</li>
        <li>Flexible loan terms: short-term and long-term loan options</li>
        <li>Line of credit and overdraft facilities available for cash flow management</li>
        <li>Business loans for working capital, equipment financing, or expansion</li>
        <li>Repayment options: weekly, monthly, or annual installments</li>
        <li>Quick approval process with minimal paperwork</li>
        <li>Access to financial advice and business support from NAB's team</li>
    </ul>

    <h3>5. Home Equity Loans from NAB</h3>
    <p><strong>Loan Amount for Home Equity Loans:</strong> Up to 80% of the value of your home</p>
    <p><strong>Interest Rate for Home Equity Loans:</strong> Starting from 5.65% per annum</p>
    <p><strong>Loan Tenure for Home Equity Loans:</strong> Flexible terms based on loan agreement</p>
    <p><strong>Eligibility for Home Equity Loans:</strong> Homeowners with sufficient equity in their property</p>
    <p><strong>Processing Fee for Home Equity Loans:</strong> Minimal processing fees may apply.</p>
    <p><strong>Key Features of NAB Home Equity Loan:</strong></p>
    <ul>
        <li>Access up to 80% of your home's value with a home equity line of credit</li>
        <li>Use home equity for personal needs, debt consolidation, home renovations, or other large expenses</li>
        <li>Competitive interest rates with flexible repayment options</li>
        <li>Redraw facility for additional funds made on the home loan</li>
        <li>Fast approval process and minimal documentation</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>No penalties for early repayment of the home equity loan</li>
        <li>Access funds through NAB’s online banking system or ATMs</li>
    </ul>
    `;
} else if (getTimeZoneCountry() == "New Zealand") {
  ContentContainer.innerHTML = `
    <h4>Types of Loans in India</h4>
        <ul>
           <li>ASB Bank</li>
           <li>ANZ Bank New Zealand</li>
           <li>Westpac New Zealand</li>
           <li>BNZ (Bank of New Zealand)</li>
        </ul>

         <h1>ASB Bank Loan Products</h1>

    <h3>1. Personal Loans from ASB Bank</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> From NZD 1,000 to NZD 50,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 9.95% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> New Zealand citizens or permanent residents with a stable income and a good credit history.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> No application fees for personal loans.</p>
    <p><strong>Key Features of ASB Personal Loan:</strong></p>
    <ul>
        <li>Loan amounts from NZD 1,000 to NZD 50,000 for personal use</li>
        <li>Competitive interest rates starting from 9.95% per annum</li>
        <li>Loan terms from 1 to 5 years</li>
        <li>Unsecured personal loans with no collateral required</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Easy online application process and quick loan approval</li>
        <li>Flexible use of personal loans, such as debt consolidation, home renovations, travel, or emergencies</li>
        <li>No early repayment penalties on personal loans</li>
    </ul>

    <h3>2. Home Loans from ASB Bank</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 95% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 3.49% for a variable rate loan</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 1 year to 30 years</p>
    <p><strong>Eligibility for Home Loans:</strong> New Zealand citizens or permanent residents with sufficient deposit and a stable income.</p>
    <p><strong>Processing Fee for Home Loans:</strong> Application fees may apply depending on the loan type.</p>
    <p><strong>Key Features of ASB Home Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for both fixed and variable home loans</li>
        <li>Home loans up to 95% of the property value</li>
        <li>Loan terms from 1 year to 30 years to suit your financial goals</li>
        <li>Multiple home loan options: first home buyers, refinancing, and investment property loans</li>
        <li>Redraw facility for additional repayments made on your home loan</li>
        <li>Offset accounts available to reduce interest payments</li>
        <li>Repayment options: weekly, fortnightly, or monthly to suit your income cycle</li>
        <li>No early repayment fees on some loan products</li>
    </ul>

    <h3>3. Car Loans from ASB Bank</h3>
    <p><strong>Loan Amount for Car Loans:</strong> NZD 5,000 to NZD 100,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 7.95% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Car Loans:</strong> New Zealand citizens or permanent residents with a stable income and a good credit history.</p>
    <p><strong>Processing Fee for Car Loans:</strong> No application fees for car loans.</p>
    <p><strong>Key Features of ASB Car Loan:</strong></p>
    <ul>
        <li>Loan amounts from NZD 5,000 to NZD 100,000 for new or used cars</li>
        <li>Competitive interest rates starting from 7.95% per annum</li>
        <li>Secured loan with the vehicle acting as collateral</li>
        <li>Fixed interest rate with clear repayment terms</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Quick approval process and fast disbursement of funds</li>
        <li>No early repayment penalties for car loans</li>
        <li>Pre-approval option available for quick car purchase</li>
    </ul>

    <h3>4. Business Loans from ASB Bank</h3>
    <p><strong>Loan Amount for Business Loans:</strong> NZD 10,000 to NZD 5,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 7.50% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> New Zealand businesses with a stable financial history and good credit standing.</p>
    <p><strong>Processing Fee for Business Loans:</strong> Fees may apply depending on the loan type and size.</p>
    <p><strong>Key Features of ASB Business Loan:</strong></p>
    <ul>
        <li>Business loans from NZD 10,000 to NZD 5,000,000 for working capital, expansion, or new projects</li>
        <li>Flexible loan terms from 1 year to 10 years</li>
        <li>Competitive interest rates for businesses of all sizes</li>
        <li>Unsecured and secured business loan options</li>
        <li>Access to a revolving line of credit for short-term cash flow management</li>
        <li>Repayment options: weekly, monthly, or quarterly</li>
        <li>Simple application process with fast approval</li>
        <li>Free business consultation and support from ASB’s business banking team</li>
    </ul>

    <h3>5. Student Loans from ASB Bank</h3>
    <p><strong>Loan Amount for Student Loans:</strong> Up to NZD 10,000 per year</p>
    <p><strong>Interest Rate for Student Loans:</strong> 5.90% per annum</p>
    <p><strong>Loan Tenure for Student Loans:</strong> Repayment starts after graduation</p>
    <p><strong>Eligibility for Student Loans:</strong> New Zealand students enrolled in eligible tertiary education programs.</p>
    <p><strong>Processing Fee for Student Loans:</strong> No processing fee for student loans.</p>
    <p><strong>Key Features of ASB Student Loan:</strong></p>
    <ul>
        <li>Loan amounts up to NZD 10,000 per year to cover tuition fees, living expenses, and more</li>
        <li>Low-interest rates starting from 5.90% per annum for full-time students</li>
        <li>Repayment begins once the student graduates or starts earning above a set threshold</li>
        <li>Flexible repayment terms with no early repayment penalties</li>
        <li>Easy online application process with quick approval</li>
        <li>Access to ASB’s financial tools to manage student loan repayments</li>
        <li>Customizable loan options based on individual needs and course requirements</li>
    </ul>

    <br>

     <h1>ANZ Bank Loan Products</h1>

    <h3>1. Personal Loans from ANZ Bank</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> From NZD 1,000 to NZD 50,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 9.99% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> New Zealand citizens or permanent residents with a stable income and a good credit history.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> No application fees for personal loans.</p>
    <p><strong>Key Features of ANZ Personal Loan:</strong></p>
    <ul>
        <li>Loan amounts from NZD 1,000 to NZD 50,000 for personal use</li>
        <li>Competitive interest rates starting from 9.99% per annum</li>
        <li>Loan terms from 1 to 5 years</li>
        <li>Unsecured personal loans with no collateral required</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Easy online application process with fast approval</li>
        <li>Flexible use of personal loans, such as debt consolidation, home renovations, travel, or emergencies</li>
        <li>No early repayment penalties on personal loans</li>
    </ul>

    <h3>2. Home Loans from ANZ Bank</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 90% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 3.19% for a variable rate loan</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 1 year to 30 years</p>
    <p><strong>Eligibility for Home Loans:</strong> New Zealand citizens or permanent residents with sufficient deposit and stable income.</p>
    <p><strong>Processing Fee for Home Loans:</strong> Application fees may apply depending on the loan type.</p>
    <p><strong>Key Features of ANZ Home Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for both fixed and variable home loans</li>
        <li>Home loans up to 90% of the property value</li>
        <li>Loan terms from 1 year to 30 years to suit your financial goals</li>
        <li>Flexible options for first home buyers, refinancing, and investment property loans</li>
        <li>Redraw facility available for extra repayments made on your loan</li>
        <li>Offset accounts to reduce interest payments on your home loan</li>
        <li>Repayment options: weekly, fortnightly, or monthly to match your income</li>
        <li>No early repayment fees on some loan products</li>
    </ul>

    <h3>3. Car Loans from ANZ Bank</h3>
    <p><strong>Loan Amount for Car Loans:</strong> NZD 5,000 to NZD 100,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 7.95% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Car Loans:</strong> New Zealand citizens or permanent residents with a stable income and good credit history.</p>
    <p><strong>Processing Fee for Car Loans:</strong> No application fees for car loans.</p>
    <p><strong>Key Features of ANZ Car Loan:</strong></p>
    <ul>
        <li>Loan amounts from NZD 5,000 to NZD 100,000 for new or used cars</li>
        <li>Competitive interest rates starting from 7.95% per annum</li>
        <li>Secured loan with the vehicle acting as collateral</li>
        <li>Fixed interest rate with clear repayment terms</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Quick approval process and fast disbursement of funds</li>
        <li>No early repayment penalties for car loans</li>
        <li>Pre-approval option for fast car purchase</li>
    </ul>

    <h3>4. Business Loans from ANZ Bank</h3>
    <p><strong>Loan Amount for Business Loans:</strong> NZD 10,000 to NZD 5,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 7.25% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> New Zealand businesses with a stable financial history and a good credit standing.</p>
    <p><strong>Processing Fee for Business Loans:</strong> Fees may apply depending on the loan type and size.</p>
    <p><strong>Key Features of ANZ Business Loan:</strong></p>
    <ul>
        <li>Business loans from NZD 10,000 to NZD 5,000,000 for working capital, expansion, or new ventures</li>
        <li>Flexible loan terms from 1 year to 10 years</li>
        <li>Competitive interest rates for businesses of all sizes</li>
        <li>Unsecured and secured loan options available</li>
        <li>Access to a revolving line of credit for short-term cash flow management</li>
        <li>Repayment options: weekly, monthly, or quarterly</li>
        <li>Simple application process with fast approval</li>
        <li>Free business consultations with ANZ’s dedicated business banking team</li>
    </ul>

    <h3>5. Student Loans from ANZ Bank</h3>
    <p><strong>Loan Amount for Student Loans:</strong> Up to NZD 12,000 per year</p>
    <p><strong>Interest Rate for Student Loans:</strong> 5.90% per annum</p>
    <p><strong>Loan Tenure for Student Loans:</strong> Repayment begins after graduation</p>
    <p><strong>Eligibility for Student Loans:</strong> New Zealand students enrolled in eligible tertiary education programs.</p>
    <p><strong>Processing Fee for Student Loans:</strong> No processing fee for student loans.</p>
    <p><strong>Key Features of ANZ Student Loan:</strong></p>
    <ul>
        <li>Loan amounts up to NZD 12,000 per year to cover tuition fees and living expenses</li>
        <li>Low-interest rates starting from 5.90% per annum for full-time students</li>
        <li>Repayment starts after graduation or once income exceeds a certain threshold</li>
        <li>Flexible repayment terms, with no penalties for early repayment</li>
        <li>Easy online application process with quick approval</li>
        <li>Access to ANZ financial tools to manage student loan repayments</li>
        <li>Customizable loan options to suit the individual needs of students</li>
    </ul>

    <br>
    <h3>1. Personal Loans from Westpac New Zealand</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> From NZD 1,000 to NZD 50,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 9.95% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> New Zealand citizens or permanent residents with a stable income and good credit score.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> No application fees for personal loans.</p>
    <p><strong>Key Features of Westpac Personal Loan:</strong></p>
    <ul>
        <li>Loan amounts from NZD 1,000 to NZD 50,000 for personal use</li>
        <li>Competitive interest rates starting from 9.95% per annum</li>
        <li>Loan terms from 1 to 5 years</li>
        <li>Unsecured personal loans with no collateral required</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Quick online application process with fast approval</li>
        <li>Flexible use of personal loans for various purposes like travel, debt consolidation, or emergency expenses</li>
        <li>No penalties for early repayment of personal loans</li>
    </ul>

    <h3>2. Home Loans from Westpac New Zealand</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 80% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 3.69% for a variable rate loan</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 1 year to 30 years</p>
    <p><strong>Eligibility for Home Loans:</strong> New Zealand citizens or permanent residents with sufficient deposit and stable income.</p>
    <p><strong>Processing Fee for Home Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Westpac Home Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for both fixed and variable home loans</li>
        <li>Home loans up to 80% of the property value</li>
        <li>Loan terms from 1 year to 30 years to suit your financial needs</li>
        <li>First home buyer, refinancing, and investment property loan options</li>
        <li>Redraw facility for extra repayments made on your home loan</li>
        <li>Offset accounts to help reduce interest payments on your home loan</li>
        <li>Flexible repayment options: weekly, fortnightly, or monthly</li>
        <li>No early repayment fees for some home loan products</li>
    </ul>

    <h3>3. Car Loans from Westpac New Zealand</h3>
    <p><strong>Loan Amount for Car Loans:</strong> NZD 5,000 to NZD 100,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 7.95% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Car Loans:</strong> New Zealand citizens or permanent residents with stable income and good credit history.</p>
    <p><strong>Processing Fee for Car Loans:</strong> No application fees for car loans.</p>
    <p><strong>Key Features of Westpac Car Loan:</strong></p>
    <ul>
        <li>Loan amounts from NZD 5,000 to NZD 100,000 for new or used vehicles</li>
        <li>Competitive interest rates starting from 7.95% per annum</li>
        <li>Secured loan with the car as collateral</li>
        <li>Fixed interest rate with clear repayment terms</li>
        <li>Repayment options: weekly, fortnightly, or monthly</li>
        <li>Fast approval and quick disbursement of funds</li>
        <li>No early repayment fees for car loans</li>
        <li>Pre-approval option for quicker car purchase process</li>
    </ul>

    <h3>4. Business Loans from Westpac New Zealand</h3>
    <p><strong>Loan Amount for Business Loans:</strong> NZD 10,000 to NZD 5,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 7.45% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> New Zealand businesses with a stable financial history and a good credit standing.</p>
    <p><strong>Processing Fee for Business Loans:</strong> Fees may apply depending on the loan type and amount.</p>
    <p><strong>Key Features of Westpac Business Loan:</strong></p>
    <ul>
        <li>Business loans from NZD 10,000 to NZD 5,000,000 for business needs</li>
        <li>Flexible loan terms ranging from 1 to 10 years</li>
        <li>Competitive interest rates for businesses of all sizes</li>
        <li>Secured and unsecured loan options available</li>
        <li>Revolving credit facility for short-term cash flow management</li>
        <li>Repayment options: weekly, monthly, or quarterly</li>
        <li>Simple application process with fast approval</li>
        <li>Free consultations with Westpac's business banking experts</li>
    </ul>

    <h3>5. Student Loans from Westpac New Zealand</h3>
    <p><strong>Loan Amount for Student Loans:</strong> Up to NZD 12,000 per year</p>
    <p><strong>Interest Rate for Student Loans:</strong> 5.90% per annum</p>
    <p><strong>Loan Tenure for Student Loans:</strong> Repayment begins after graduation</p>
    <p><strong>Eligibility for Student Loans:</strong> New Zealand students enrolled in eligible tertiary education programs.</p>
    <p><strong>Processing Fee for Student Loans:</strong> No processing fees for student loans.</p>
    <p><strong>Key Features of Westpac Student Loan:</strong></p>
    <ul>
        <li>Loan amounts up to NZD 12,000 per year to cover tuition fees and living expenses</li>
        <li>Low-interest rates starting from 5.90% per annum</li>
        <li>Repayment starts after graduation or once income exceeds a set threshold</li>
        <li>Flexible repayment terms with no penalties for early repayment</li>
        <li>Simple online application process with fast approval</li>
        <li>Access to tools to manage student loan repayments</li>
        <li>Customizable loan options to meet individual needs</li>
    </ul>

    <br>

       <h1>BNZ (Bank of New Zealand) Loan Products</h1>

    <h3>1. Personal Loans from BNZ</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> From NZD 1,000 to NZD 50,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 12.95% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> New Zealand citizens or permanent residents with a stable income and good credit history.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> No application fees for personal loans.</p>
    <p><strong>Key Features of BNZ Personal Loan:</strong></p>
    <ul>
        <li>Loan amounts ranging from NZD 1,000 to NZD 50,000 for personal expenses</li>
        <li>Interest rates starting from 12.95% per annum</li>
        <li>Loan terms from 1 to 5 years</li>
        <li>Flexible repayment options: weekly, fortnightly, or monthly</li>
        <li>No collateral required for unsecured personal loans</li>
        <li>Quick and easy online application process with fast approval</li>
        <li>Ability to consolidate debt or finance personal projects with a personal loan</li>
        <li>No penalties for early repayment of loans</li>
    </ul>

    <h3>2. Home Loans from BNZ</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 80% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 3.59% for a variable rate home loan</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 1 year to 30 years</p>
    <p><strong>Eligibility for Home Loans:</strong> New Zealand citizens or permanent residents with a stable income and sufficient deposit.</p>
    <p><strong>Processing Fee for Home Loans:</strong> Application fees may apply depending on the loan type.</p>
    <p><strong>Key Features of BNZ Home Loan:</strong></p>
    <ul>
        <li>Competitive interest rates for both fixed and variable home loans</li>
        <li>Loan amounts up to 80% of the property value</li>
        <li>Terms ranging from 1 year to 30 years to suit your budget</li>
        <li>Options for first-time home buyers, refinancing, and investment properties</li>
        <li>Redraw facilities to access extra repayments on your home loan</li>
        <li>Offset account options to reduce your interest payments</li>
        <li>Online tools to calculate repayments and manage your home loan</li>
        <li>Flexible repayment terms: weekly, fortnightly, or monthly</li>
    </ul>

    <h3>3. Car Loans from BNZ</h3>
    <p><strong>Loan Amount for Car Loans:</strong> NZD 5,000 to NZD 100,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 10.99% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Car Loans:</strong> New Zealand citizens or permanent residents with good credit and stable income.</p>
    <p><strong>Processing Fee for Car Loans:</strong> No application fees for car loans.</p>
    <p><strong>Key Features of BNZ Car Loan:</strong></p>
    <ul>
        <li>Loan amounts between NZD 5,000 and NZD 100,000 for purchasing new or used vehicles</li>
        <li>Fixed interest rates starting from 10.99% per annum</li>
        <li>Secured loan with the car as collateral</li>
        <li>Repayment terms ranging from 1 year to 5 years</li>
        <li>Flexible payment options: weekly, fortnightly, or monthly</li>
        <li>Quick approval and fast disbursement of funds</li>
        <li>No early repayment penalties for car loans</li>
        <li>Pre-approval process available for smoother car purchase</li>
    </ul>

    <h3>4. Business Loans from BNZ</h3>
    <p><strong>Loan Amount for Business Loans:</strong> NZD 10,000 to NZD 5,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 7.45% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> New Zealand businesses with a stable financial track record.</p>
    <p><strong>Processing Fee for Business Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of BNZ Business Loan:</strong></p>
    <ul>
        <li>Loans ranging from NZD 10,000 to NZD 5,000,000 for business expansion, working capital, or equipment</li>
        <li>Flexible loan terms from 1 to 10 years</li>
        <li>Secured and unsecured loan options available</li>
        <li>Revolving credit facility to assist with short-term business cash flow</li>
        <li>Competitive interest rates starting from 7.45% per annum</li>
        <li>Flexible repayment options: weekly, monthly, or quarterly</li>
        <li>Dedicated business banking specialists available to help you with your business loan</li>
        <li>Simple application process with fast approval</li>
    </ul>

    <h3>5. Student Loans from BNZ</h3>
    <p><strong>Loan Amount for Student Loans:</strong> Up to NZD 15,000 per year</p>
    <p><strong>Interest Rate for Student Loans:</strong> 6.50% per annum</p>
    <p><strong>Loan Tenure for Student Loans:</strong> Repayment starts after graduation or when income exceeds a set threshold</p>
    <p><strong>Eligibility for Student Loans:</strong> New Zealand citizens or permanent residents studying at approved tertiary institutions.</p>
    <p><strong>Processing Fee for Student Loans:</strong> No processing fees for student loans.</p>
    <p><strong>Key Features of BNZ Student Loan:</strong></p>
    <ul>
        <li>Loans up to NZD 15,000 per year for tuition fees and living expenses</li>
        <li>Low-interest rates of 6.50% per annum</li>
        <li>Repayment deferral until after graduation or once you earn above a certain income threshold</li>
        <li>Simple and quick online application process</li>
        <li>Flexible repayment plans after graduation based on income levels</li>
        <li>Option to make voluntary extra repayments</li>
        <li>Access to BNZ's student loan management tools</li>
    </ul>

    


       `;
} else if (getTimeZoneCountry() == "Kenya") {
  ContentContainer.innerHTML = `
     <h4>Types of Loans in Kenya</h4>
        <ul>
            <li>Kenya Commercial Bank (KCB)</li>
            <li>Equity Bank</li>
            <li>Co-operative Bank of Kenya</li>
            <li>Standard Chartered Bank Kenya</li>
        </ul>
 
         <h1>Kenya Commercial Bank (KCB) Loan Products</h1>

    <h3>1. Personal Loans from KCB</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> From KES 5,000 to KES 5,000,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 14% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> Kenyan citizens or permanent residents with a steady income and good credit history.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> Application fees may apply.</p>
    <p><strong>Key Features of KCB Personal Loan:</strong></p>
    <ul>
        <li>Loan amounts ranging from KES 5,000 to KES 5,000,000 for various personal needs</li>
        <li>Competitive interest rates starting from 14% per annum</li>
        <li>Flexible repayment terms of 1 to 5 years</li>
        <li>No collateral required for unsecured loans</li>
        <li>Quick and easy online application process</li>
        <li>Ability to use personal loan funds for debt consolidation, education, medical expenses, or home improvement</li>
        <li>Quick approval and disbursement of funds</li>
        <li>No penalties for early repayment</li>
    </ul>

    <h3>2. Home Loans from KCB</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 90% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 13.5% per annum</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 5 years to 25 years</p>
    <p><strong>Eligibility for Home Loans:</strong> Kenyan citizens or permanent residents with a stable income and a good credit record.</p>
    <p><strong>Processing Fee for Home Loans:</strong> Fees may apply depending on the loan type and application.</p>
    <p><strong>Key Features of KCB Home Loan:</strong></p>
    <ul>
        <li>Loan amounts up to 90% of the property value for purchasing or refinancing homes</li>
        <li>Competitive interest rates starting from 13.5% per annum</li>
        <li>Flexible loan terms of 5 to 25 years</li>
        <li>Fixed and variable interest rates available</li>
        <li>Options for purchasing land, constructing, or renovating properties</li>
        <li>Ability to take a top-up loan on an existing home loan</li>
        <li>Personalized advice and assistance from KCB’s mortgage experts</li>
        <li>Access to KCB's Home Loan Calculator for better financial planning</li>
    </ul>

    <h3>3. Car Loans from KCB</h3>
    <p><strong>Loan Amount for Car Loans:</strong> KES 100,000 to KES 10,000,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 14.5% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Car Loans:</strong> Kenyan citizens or permanent residents with stable income and a clean credit history.</p>
    <p><strong>Processing Fee for Car Loans:</strong> Processing fees may apply depending on the loan agreement.</p>
    <p><strong>Key Features of KCB Car Loan:</strong></p>
    <ul>
        <li>Loan amounts from KES 100,000 to KES 10,000,000 for new and used vehicles</li>
        <li>Interest rates starting from 14.5% per annum</li>
        <li>Flexible loan repayment terms from 1 year to 5 years</li>
        <li>Secured loan with the vehicle as collateral</li>
        <li>Flexible repayment options: monthly, quarterly, or annually</li>
        <li>Quick approval and fast disbursement</li>
        <li>Option to refinance an existing car loan</li>
        <li>No penalties for early repayment</li>
    </ul>

    <h3>4. Business Loans from KCB</h3>
    <p><strong>Loan Amount for Business Loans:</strong> KES 10,000 to KES 50,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 12% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> Businesses registered in Kenya with a viable business plan and stable financial performance.</p>
    <p><strong>Processing Fee for Business Loans:</strong> Fees may apply depending on loan type and application.</p>
    <p><strong>Key Features of KCB Business Loan:</strong></p>
    <ul>
        <li>Loan amounts from KES 10,000 to KES 50,000,000 for working capital, expansion, or business investment</li>
        <li>Competitive interest rates starting from 12% per annum</li>
        <li>Flexible loan terms from 1 to 10 years</li>
        <li>Secured and unsecured loan options available</li>
        <li>Tailored business loan solutions for SMEs and large enterprises</li>
        <li>Revolving credit options for ongoing business needs</li>
        <li>Dedicated relationship managers to support your business loan application</li>
        <li>Fast and straightforward approval process</li>
    </ul>

    <h3>5. Agricultural Loans from KCB</h3>
    <p><strong>Loan Amount for Agricultural Loans:</strong> KES 5,000 to KES 10,000,000</p>
    <p><strong>Interest Rate for Agricultural Loans:</strong> Starting from 10% per annum</p>
    <p><strong>Loan Tenure for Agricultural Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Agricultural Loans:</strong> Farmers and agricultural enterprises in Kenya with a solid farming plan.</p>
    <p><strong>Processing Fee for Agricultural Loans:</strong> Application fees may apply.</p>
    <p><strong>Key Features of KCB Agricultural Loan:</strong></p>
    <ul>
        <li>Loans for purchasing farm equipment, seeds, livestock, or farm expansion</li>
        <li>Loan amounts from KES 5,000 to KES 10,000,000</li>
        <li>Interest rates starting from 10% per annum</li>
        <li>Flexible repayment terms from 1 year to 5 years</li>
        <li>Secured loan options for larger agricultural investments</li>
        <li>Assistance from KCB’s agricultural loan specialists for planning and advisory</li>
        <li>Loans tailored for small-scale, medium-scale, and large agricultural enterprises</li>
        <li>Quick processing and approval for time-sensitive agricultural needs</li>
    </ul>

    <br>

    <h1>Equity Bank Loan Products</h1>

    <h3>1. Personal Loans from Equity Bank</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> From KES 10,000 to KES 3,000,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 13.5% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> Kenyan citizens or permanent residents with a steady income and good credit history.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Equity Bank Personal Loan:</strong></p>
    <ul>
        <li>Loan amounts from KES 10,000 to KES 3,000,000 for personal needs</li>
        <li>Competitive interest rates starting from 13.5% per annum</li>
        <li>Flexible repayment terms from 1 to 5 years</li>
        <li>Unsecured loans, no collateral required</li>
        <li>Quick and easy application process through the bank’s mobile app</li>
        <li>Funds can be used for various purposes like education, medical bills, home improvement, and debt consolidation</li>
        <li>No penalties for early loan repayment</li>
    </ul>

    <h3>2. Home Loans from Equity Bank</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 90% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 13.25% per annum</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 5 years to 20 years</p>
    <p><strong>Eligibility for Home Loans:</strong> Kenyan citizens or permanent residents with a steady income and a good credit record.</p>
    <p><strong>Processing Fee for Home Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Equity Bank Home Loan:</strong></p>
    <ul>
        <li>Loan amounts up to 90% of the property value</li>
        <li>Flexible repayment terms from 5 to 20 years</li>
        <li>Interest rates starting from 13.25% per annum</li>
        <li>Loans for purchasing, building, or renovating a home</li>
        <li>Fixed or variable interest rates available</li>
        <li>Ability to access home loan calculators to understand monthly repayments</li>
        <li>Fast approval and disbursement of funds</li>
        <li>Personalized mortgage advice</li>
    </ul>

    <h3>3. Car Loans from Equity Bank</h3>
    <p><strong>Loan Amount for Car Loans:</strong> From KES 100,000 to KES 10,000,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 14% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Car Loans:</strong> Kenyan citizens or permanent residents with stable income and good credit.</p>
    <p><strong>Processing Fee for Car Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Equity Bank Car Loan:</strong></p>
    <ul>
        <li>Loan amounts from KES 100,000 to KES 10,000,000 for new and used vehicles</li>
        <li>Competitive interest rates starting from 14% per annum</li>
        <li>Flexible repayment options from 1 to 5 years</li>
        <li>Secured loan, where the vehicle acts as collateral</li>
        <li>Quick approval and easy processing</li>
        <li>Option for both new and used cars</li>
        <li>No penalties for early repayment</li>
    </ul>

    <h3>4. Business Loans from Equity Bank</h3>
    <p><strong>Loan Amount for Business Loans:</strong> KES 100,000 to KES 50,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 12.5% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> Registered businesses in Kenya with a viable business plan and a good credit history.</p>
    <p><strong>Processing Fee for Business Loans:</strong> Processing fees may apply based on loan type.</p>
    <p><strong>Key Features of Equity Bank Business Loan:</strong></p>
    <ul>
        <li>Loan amounts ranging from KES 100,000 to KES 50,000,000 for working capital, expansion, and business investment</li>
        <li>Competitive interest rates starting from 12.5% per annum</li>
        <li>Flexible repayment terms from 1 to 10 years</li>
        <li>Secured and unsecured loan options available</li>
        <li>Support for SMEs, including advisory services and financial planning</li>
        <li>Fast processing and disbursement of funds</li>
        <li>Online and mobile application for ease of access</li>
        <li>Dedicated business relationship managers to assist in loan processing</li>
    </ul>

    <h3>5. Agricultural Loans from Equity Bank</h3>
    <p><strong>Loan Amount for Agricultural Loans:</strong> KES 10,000 to KES 10,000,000</p>
    <p><strong>Interest Rate for Agricultural Loans:</strong> Starting from 10% per annum</p>
    <p><strong>Loan Tenure for Agricultural Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Agricultural Loans:</strong> Farmers and agricultural businesses with a solid farming plan and proof of income.</p>
    <p><strong>Processing Fee for Agricultural Loans:</strong> Processing fees may apply.</p>
    <p><strong>Key Features of Equity Bank Agricultural Loan:</strong></p>
    <ul>
        <li>Loan amounts from KES 10,000 to KES 10,000,000 for purchasing farm inputs, machinery, seeds, or livestock</li>
        <li>Interest rates starting from 10% per annum</li>
        <li>Flexible repayment terms from 1 year to 5 years</li>
        <li>Support for both small-scale and large-scale agricultural projects</li>
        <li>Quick processing and disbursement of funds</li>
        <li>Customized loans for different agricultural needs including crop production and livestock farming</li>
        <li>Access to financial and agricultural advisory services from Equity’s specialists</li>
        <li>Option to top-up your loan for additional funding requirements</li>
    </ul>
        
    <br>
      <h1>Co-operative Bank of Kenya Loan Products</h1>

    <h3>1. Personal Loans from Co-operative Bank of Kenya</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> From KES 10,000 to KES 3,000,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 13% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> Kenyan citizens or permanent residents with a stable income and good credit history.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Co-operative Bank Personal Loan:</strong></p>
    <ul>
        <li>Loan amounts ranging from KES 10,000 to KES 3,000,000</li>
        <li>Interest rates starting from 13% per annum</li>
        <li>Flexible repayment periods from 1 to 5 years</li>
        <li>Unsecured loans, no collateral required</li>
        <li>Fast loan approval and disbursement process</li>
        <li>Loan funds can be used for education, medical expenses, home improvement, and more</li>
        <li>No penalties for early repayment</li>
    </ul>

    <h3>2. Home Loans from Co-operative Bank of Kenya</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 90% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 13.5% per annum</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 5 years to 20 years</p>
    <p><strong>Eligibility for Home Loans:</strong> Kenyan citizens or permanent residents with a stable income and a good credit record.</p>
    <p><strong>Processing Fee for Home Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Co-operative Bank Home Loan:</strong></p>
    <ul>
        <li>Loan amounts up to 90% of the property value</li>
        <li>Flexible repayment terms from 5 to 20 years</li>
        <li>Competitive interest rates starting from 13.5% per annum</li>
        <li>Fixed and variable interest rates available</li>
        <li>Loans available for purchasing, building, or renovating homes</li>
        <li>Fast and easy application process with minimal paperwork</li>
        <li>Loan prequalification based on affordability</li>
    </ul>

    <h3>3. Car Loans from Co-operative Bank of Kenya</h3>
    <p><strong>Loan Amount for Car Loans:</strong> From KES 100,000 to KES 10,000,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 14% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Car Loans:</strong> Kenyan citizens or permanent residents with stable income and good credit.</p>
    <p><strong>Processing Fee for Car Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Co-operative Bank Car Loan:</strong></p>
    <ul>
        <li>Loan amounts from KES 100,000 to KES 10,000,000 for new and used vehicles</li>
        <li>Competitive interest rates starting from 14% per annum</li>
        <li>Flexible repayment terms ranging from 1 to 5 years</li>
        <li>Secured loan, where the car acts as collateral</li>
        <li>Quick loan processing with easy application</li>
        <li>Loans for both new and used vehicles</li>
        <li>No prepayment penalties</li>
    </ul>

    <h3>4. Business Loans from Co-operative Bank of Kenya</h3>
    <p><strong>Loan Amount for Business Loans:</strong> KES 100,000 to KES 50,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 12.5% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> Registered businesses in Kenya with a viable business plan and good credit history.</p>
    <p><strong>Processing Fee for Business Loans:</strong> Processing fees may apply based on loan type.</p>
    <p><strong>Key Features of Co-operative Bank Business Loan:</strong></p>
    <ul>
        <li>Loan amounts ranging from KES 100,000 to KES 50,000,000 for working capital, expansion, and investment purposes</li>
        <li>Competitive interest rates starting from 12.5% per annum</li>
        <li>Flexible repayment terms from 1 to 10 years</li>
        <li>Secured and unsecured loan options available</li>
        <li>Quick processing and approval for business owners</li>
        <li>Access to financial advice and business coaching</li>
        <li>Tailored solutions to meet the specific needs of businesses in various sectors</li>
    </ul>

    <h3>5. Agricultural Loans from Co-operative Bank of Kenya</h3>
    <p><strong>Loan Amount for Agricultural Loans:</strong> KES 10,000 to KES 10,000,000</p>
    <p><strong>Interest Rate for Agricultural Loans:</strong> Starting from 9% per annum</p>
    <p><strong>Loan Tenure for Agricultural Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Agricultural Loans:</strong> Farmers, farming groups, and agricultural businesses with a viable farming plan.</p>
    <p><strong>Processing Fee for Agricultural Loans:</strong> Processing fees may apply.</p>
    <p><strong>Key Features of Co-operative Bank Agricultural Loan:</strong></p>
    <ul>
        <li>Loan amounts ranging from KES 10,000 to KES 10,000,000 for various agricultural purposes</li>
        <li>Interest rates starting from 9% per annum</li>
        <li>Flexible repayment terms from 1 year to 5 years</li>
        <li>Loan products tailored for both small-scale and large-scale farmers</li>
        <li>Financing for crop production, livestock, and farming equipment</li>
        <li>Access to agricultural advisory services</li>
        <li>Fast loan approval and processing</li>
        <li>Support for sustainable farming practices</li>
    </ul>

    <br>
     <h1>Standard Chartered Bank Kenya Loan Products</h1>

    <h3>1. Personal Loans from Standard Chartered Bank Kenya</h3>
    <p><strong>Loan Amount for Personal Loans:</strong> From KES 30,000 to KES 10,000,000</p>
    <p><strong>Interest Rate for Personal Loans:</strong> Starting from 14% per annum</p>
    <p><strong>Loan Tenure for Personal Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Personal Loans:</strong> Kenyan citizens or permanent residents with a stable income and a good credit history.</p>
    <p><strong>Processing Fee for Personal Loans:</strong> Processing fees may apply based on loan type.</p>
    <p><strong>Key Features of Standard Chartered Bank Personal Loan:</strong></p>
    <ul>
        <li>Loan amounts ranging from KES 30,000 to KES 10,000,000</li>
        <li>Interest rates starting from 14% per annum</li>
        <li>Flexible repayment terms ranging from 1 to 5 years</li>
        <li>Unsecured loans, no collateral required</li>
        <li>Quick loan processing and approval</li>
        <li>Loan funds can be used for various personal purposes including medical expenses, education, and home improvement</li>
        <li>No penalties for early repayment</li>
    </ul>

    <h3>2. Home Loans from Standard Chartered Bank Kenya</h3>
    <p><strong>Loan Amount for Home Loans:</strong> Up to 90% of the property value</p>
    <p><strong>Interest Rate for Home Loans:</strong> Starting from 13.5% per annum</p>
    <p><strong>Loan Tenure for Home Loans:</strong> 5 years to 20 years</p>
    <p><strong>Eligibility for Home Loans:</strong> Kenyan citizens or permanent residents with a stable income and good credit history.</p>
    <p><strong>Processing Fee for Home Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Standard Chartered Bank Home Loan:</strong></p>
    <ul>
        <li>Loan amounts up to 90% of the property value</li>
        <li>Flexible repayment terms from 5 to 20 years</li>
        <li>Competitive interest rates starting from 13.5% per annum</li>
        <li>Fixed and variable interest rates available</li>
        <li>Loans available for purchasing, building, or renovating homes</li>
        <li>Quick and easy loan approval process</li>
        <li>Ability to prequalify based on income and affordability</li>
    </ul>

    <h3>3. Car Loans from Standard Chartered Bank Kenya</h3>
    <p><strong>Loan Amount for Car Loans:</strong> From KES 100,000 to KES 10,000,000</p>
    <p><strong>Interest Rate for Car Loans:</strong> Starting from 14% per annum</p>
    <p><strong>Loan Tenure for Car Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Car Loans:</strong> Kenyan citizens or permanent residents with stable income and a good credit history.</p>
    <p><strong>Processing Fee for Car Loans:</strong> Processing fees may apply based on loan type.</p>
    <p><strong>Key Features of Standard Chartered Bank Car Loan:</strong></p>
    <ul>
        <li>Loan amounts from KES 100,000 to KES 10,000,000 for both new and used vehicles</li>
        <li>Competitive interest rates starting from 14% per annum</li>
        <li>Flexible repayment terms from 1 to 5 years</li>
        <li>Secured loan, with the car acting as collateral</li>
        <li>Easy loan application process</li>
        <li>Loans for both new and used cars, with financing available for a variety of vehicle models</li>
        <li>No penalties for early repayment</li>
    </ul>

    <h3>4. Business Loans from Standard Chartered Bank Kenya</h3>
    <p><strong>Loan Amount for Business Loans:</strong> From KES 200,000 to KES 50,000,000</p>
    <p><strong>Interest Rate for Business Loans:</strong> Starting from 12% per annum</p>
    <p><strong>Loan Tenure for Business Loans:</strong> 1 year to 10 years</p>
    <p><strong>Eligibility for Business Loans:</strong> Registered businesses in Kenya with a sound business plan and a good credit record.</p>
    <p><strong>Processing Fee for Business Loans:</strong> Processing fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Standard Chartered Bank Business Loan:</strong></p>
    <ul>
        <li>Loan amounts ranging from KES 200,000 to KES 50,000,000 for working capital, expansion, or investment</li>
        <li>Competitive interest rates starting from 12% per annum</li>
        <li>Flexible repayment terms from 1 year to 10 years</li>
        <li>Secured and unsecured loan options available</li>
        <li>Fast and easy loan application process</li>
        <li>Access to advisory services and business insights</li>
        <li>Loans tailored for businesses in various industries including retail, agriculture, and manufacturing</li>
    </ul>

    <h3>5. Agricultural Loans from Standard Chartered Bank Kenya</h3>
    <p><strong>Loan Amount for Agricultural Loans:</strong> From KES 10,000 to KES 10,000,000</p>
    <p><strong>Interest Rate for Agricultural Loans:</strong> Starting from 9.5% per annum</p>
    <p><strong>Loan Tenure for Agricultural Loans:</strong> 1 year to 5 years</p>
    <p><strong>Eligibility for Agricultural Loans:</strong> Farmers, farming groups, and agricultural businesses with a proven track record in farming.</p>
    <p><strong>Processing Fee for Agricultural Loans:</strong> Fees may apply depending on the loan type.</p>
    <p><strong>Key Features of Standard Chartered Bank Agricultural Loan:</strong></p>
    <ul>
        <li>Loan amounts ranging from KES 10,000 to KES 10,000,000 for various agricultural activities</li>
        <li>Interest rates starting from 9.5% per annum</li>
        <li>Flexible repayment terms from 1 year to 5 years</li>
        <li>Loans for crop production, livestock, and farming equipment</li>
        <li>Quick processing with minimal paperwork</li>
        <li>Support for sustainable agricultural practices</li>
        <li>Access to agricultural expertise and training programs</li>
    </ul>


        `;
} else if (getTimeZoneCountry() == "Ghana") {
  ContentContainer.innerHTML = `
     <h4>Types of Loans in Ghana</h4>
        <ul>
            <li>Ghana Commercial Bank (GCB)</li>
            <li>Standard Chartered Bank Ghana</li>
            <li>Ecobank Ghana</li>
            <li>Barclays Bank Ghana (Now Absa Bank Ghana)</li>
        </ul>
        
        <h3>Ghana Commercial Bank (GCB)</h3>
<p>Ghana Commercial Bank (GCB) is one of the leading banks in Ghana, with over 60 years of operation. It is recognized for offering a variety of loan products to meet the financial needs of individuals, businesses, and corporate clients. Below are some of the loan products provided by GCB:</p>

<h3>Loan Products Offered by GCB:</h3>

<h4>1. Personal Loans</h4>
<p><strong>Description:</strong> GCB offers personal loans to salaried individuals to help meet various personal needs such as medical expenses, education, travel, and home improvement. The loan is typically unsecured and provides quick access to funds.</p>
<p><strong>Loan Amount:</strong> The loan amount is based on the applicant’s income and repayment capacity, with a maximum amount determined by the bank.</p>
<p><strong>Interest Rates:</strong> Personal loan interest rates typically start from 20% per annum. Rates may vary based on the loan amount, repayment term, and credit profile.</p>
<p><strong>Repayment Term:</strong> Repayment terms are flexible, with options typically ranging from 6 to 24 months, depending on the loan amount and applicant’s financial situation.</p>
<p><strong>Eligibility:</strong> To be eligible for a personal loan, applicants must have a steady income from employment. Additional requirements include proof of employment, identification, and salary verification. A good credit history is essential.</p>

<h4>2. Business Loans</h4>
<p><strong>Description:</strong> GCB offers loans to small, medium, and large businesses to support working capital, expansion, or capital expenditures. The loans are tailored to meet the specific needs of businesses at different stages of growth.</p>
<p><strong>Loan Amount:</strong> Business loan amounts are dependent on the business’s financial standing and loan purpose. Small businesses may access working capital loans, while larger enterprises may secure funds for expansion.</p>
<p><strong>Interest Rates:</strong> Interest rates for business loans generally start from 18% per annum. Rates may vary depending on the loan amount and type of business.</p>
<p><strong>Repayment Term:</strong> The repayment term for business loans is typically up to 5 years, with flexible repayment structures depending on the loan size and business type.</p>
<p><strong>Eligibility:</strong> To qualify for a business loan, businesses must provide financial records, proof of operations, and demonstrate their ability to repay. Collateral may be required for larger loans.</p>

<h4>3. Car Loans</h4>
<p><strong>Description:</strong> GCB provides car loans to individuals who wish to purchase new or used vehicles. This loan allows the borrower to finance the cost of a car and pay in installments over a set period.</p>
<p><strong>Loan Amount:</strong> GCB finances up to 80% of the vehicle’s value. The loan amount is based on the cost of the car and the applicant's financial profile.</p>
<p><strong>Interest Rates:</strong> Interest rates for car loans typically start from 20% per annum, depending on the type of vehicle and the applicant's creditworthiness.</p>
<p><strong>Repayment Term:</strong> The repayment term for car loans typically ranges from 12 to 60 months, with flexibility in monthly payments.</p>
<p><strong>Eligibility:</strong> To be eligible for a car loan, applicants must have a steady income, proof of employment, and identification. A good credit history is essential, and the vehicle must be registered in the applicant’s name.</p>

<h4>4. Mortgage Loans</h4>
<p><strong>Description:</strong> GCB offers home loans, also known as mortgage loans, to assist individuals in purchasing, building, or renovating a home. These loans are secured by the property and are available to both salaried and self-employed individuals.</p>
<p><strong>Loan Amount:</strong> Mortgage loan amounts depend on the value of the property being financed and the applicant’s income. GCB finances up to 80% of the property's value.</p>
<p><strong>Interest Rates:</strong> Interest rates for mortgage loans typically start from 18% per annum, with rates depending on the applicant’s financial profile and loan amount.</p>
<p><strong>Repayment Term:</strong> The repayment term for mortgage loans typically ranges from 5 to 20 years, depending on the loan amount and the applicant's financial status.</p>
<p><strong>Eligibility:</strong> Applicants must have a steady income, and the property must be in the applicant’s name or legally registered in their favor. A good credit score and proof of income are required for approval.</p>

<h4>5. Student Loans</h4>
<p><strong>Description:</strong> GCB offers student loans to help students finance their education. These loans are available for both undergraduate and postgraduate students to cover tuition fees, books, and other educational expenses.</p>
<p><strong>Loan Amount:</strong> The loan amount depends on the cost of tuition and the educational institution. GCB provides loans based on the student’s financial needs and repayment capacity.</p>
<p><strong>Interest Rates:</strong> Interest rates for student loans typically start from 15% per annum.</p>
<p><strong>Repayment Term:</strong> Repayment terms are flexible, with a grace period provided for students after completion of studies.</p>
<p><strong>Eligibility:</strong> Applicants must be enrolled in an accredited educational institution, and the loan may require a guarantor with a stable income.</p>

<h3>Conclusion</h3>
<p>Ghana Commercial Bank (GCB) offers a wide range of loan products to meet the financial needs of individuals and businesses. Whether you're looking for personal, business, car, or home loans, GCB provides tailored financial solutions with competitive interest rates and flexible repayment terms. The bank’s extensive loan offerings are designed to support the growth of individuals and businesses in Ghana.</p>
<br>

<h3>Standard Chartered Bank Ghana</h3>
<p>Standard Chartered Bank Ghana is a leading financial institution in Ghana, offering a wide array of banking services, including personal, business, and corporate loans. The bank is renowned for its customer-centric approach and providing loans that cater to the diverse needs of its clients. Below are the loan products offered by Standard Chartered Bank Ghana:</p>

<h3>Loan Products Offered by Standard Chartered Bank Ghana:</h3>

<h4>1. Personal Loans</h4>
<p><strong>Description:</strong> Standard Chartered Bank offers personal loans to individuals who are looking for financial assistance to cover various personal needs such as medical expenses, education, travel, or home improvements. These loans are typically unsecured and provide easy access to funds.</p>
<p><strong>Loan Amount:</strong> Personal loan amounts vary depending on the applicant’s income and repayment capacity. The bank offers flexible loan amounts tailored to the customer’s financial profile.</p>
<p><strong>Interest Rates:</strong> Interest rates for personal loans start from 24% per annum. Rates may vary depending on the applicant’s credit profile, loan amount, and repayment period.</p>
<p><strong>Repayment Term:</strong> Personal loan repayment terms are flexible, typically ranging from 6 to 24 months, depending on the loan amount and the borrower’s ability to repay.</p>
<p><strong>Eligibility:</strong> To be eligible for a personal loan, applicants must have a steady income, proof of employment, and a good credit history. Additional documents such as identification and proof of income may be required.</p>

<h4>2. Business Loans</h4>
<p><strong>Description:</strong> Standard Chartered Bank offers business loans designed for small and medium-sized enterprises (SMEs) as well as large corporations. These loans provide financial support for working capital, business expansion, or equipment purchases.</p>
<p><strong>Loan Amount:</strong> Business loan amounts are tailored to the size and needs of the business. SMEs may access working capital loans, while larger businesses can secure loans for capital expenditures or expansion projects.</p>
<p><strong>Interest Rates:</strong> Business loan interest rates start at approximately 18% per annum. The rates may vary depending on the loan amount, business profile, and creditworthiness.</p>
<p><strong>Repayment Term:</strong> Business loans generally have a repayment period ranging from 12 months to 5 years, depending on the type of loan and the borrower’s financial situation.</p>
<p><strong>Eligibility:</strong> Businesses must provide financial statements, proof of business operations, and a solid repayment plan. Collateral may be required for larger loan amounts, and the business must demonstrate a stable cash flow to qualify.</p>

<h4>3. Auto Loans</h4>
<p><strong>Description:</strong> Standard Chartered Bank provides auto loans for individuals who wish to purchase new or used vehicles. The loan allows borrowers to finance the purchase of a car, truck, or other vehicles, with convenient monthly repayments.</p>
<p><strong>Loan Amount:</strong> The loan amount typically covers up to 80% of the vehicle's cost, with the remaining 20% covered by the borrower as a down payment.</p>
<p><strong>Interest Rates:</strong> Auto loan interest rates start from 21% per annum, with rates depending on the type of vehicle, loan amount, and the applicant’s credit history.</p>
<p><strong>Repayment Term:</strong> The repayment term for auto loans ranges from 12 to 60 months, providing flexibility in how borrowers pay back the loan.</p>
<p><strong>Eligibility:</strong> Applicants must have a regular income, proof of employment, and a good credit history. The vehicle must be registered in the borrower’s name, and the borrower must meet the bank’s financial requirements.</p>

<h4>4. Mortgage Loans</h4>
<p><strong>Description:</strong> Standard Chartered Bank offers mortgage loans for individuals looking to purchase, build, or renovate their homes. The mortgage loans are secured by the property and have competitive interest rates with flexible repayment terms.</p>
<p><strong>Loan Amount:</strong> Standard Chartered Bank finances up to 80% of the property’s value, depending on the borrower’s financial capacity and the property value.</p>
<p><strong>Interest Rates:</strong> Mortgage loan interest rates start at 18% per annum. Rates may vary based on the applicant’s financial profile, loan term, and the type of property being financed.</p>
<p><strong>Repayment Term:</strong> The repayment term for mortgage loans typically ranges from 5 to 20 years, with flexibility in monthly payments based on the loan amount and borrower’s repayment ability.</p>
<p><strong>Eligibility:</strong> Applicants must be employed with a stable income. They must provide proof of income, identification, and documents related to the property they wish to purchase. A good credit score is essential for loan approval.</p>

<h4>5. Education Loans</h4>
<p><strong>Description:</strong> Standard Chartered Bank provides education loans to students who wish to pursue higher education in Ghana or abroad. The loan covers tuition fees, books, and other related educational expenses.</p>
<p><strong>Loan Amount:</strong> The loan amount is based on the tuition fees and educational expenses incurred by the student. The loan may cover up to 100% of the student’s educational needs.</p>
<p><strong>Interest Rates:</strong> Education loan interest rates start from 15% per annum, depending on the applicant’s profile and the loan amount.</p>
<p><strong>Repayment Term:</strong> Education loans generally have a repayment term of up to 10 years, with a grace period provided after the student completes their studies.</p>
<p><strong>Eligibility:</strong> Applicants must be enrolled in an accredited institution, and the loan may require a co-signer or guarantor with a stable income.</p>

<h3>Conclusion</h3>
<p>Standard Chartered Bank Ghana offers a variety of loan products designed to meet the needs of individuals and businesses. Whether you're looking for personal, business, auto, or mortgage loans, Standard Chartered provides tailored financial solutions to suit your requirements. With competitive interest rates, flexible repayment terms, and a straightforward application process, Standard Chartered Bank Ghana remains a leading choice for borrowers in the country.</p>

<h3>Ecobank Ghana</h3>
<p>Ecobank Ghana is one of the leading banks in Ghana, offering a wide range of banking services, including personal loans, business loans, and mortgage loans. The bank is well-known for its customer-centric approach and a variety of loan options tailored to meet the diverse financial needs of individuals and businesses in Ghana.</p>

<h3>Loan Products Offered by Ecobank Ghana:</h3>

<h4>1. Personal Loans</h4>
<p><strong>Description:</strong> Ecobank Ghana provides personal loans designed for individuals looking for financial assistance to cover a variety of personal expenses such as medical bills, education, travel, home improvement, and emergencies. These loans are often unsecured and are available to both salary earners and non-salary earners.</p>
<p><strong>Loan Amount:</strong> Personal loan amounts vary depending on the applicant’s income, creditworthiness, and financial profile. Ecobank provides flexible loan amounts tailored to the individual needs of the borrower.</p>
<p><strong>Interest Rates:</strong> The interest rates for personal loans at Ecobank Ghana typically start from around 25% per annum. The rates may vary depending on the applicant’s credit profile and loan amount.</p>
<p><strong>Repayment Term:</strong> Personal loans generally have flexible repayment terms, with typical loan periods ranging from 6 months to 36 months, based on the loan amount and the borrower’s repayment capacity.</p>
<p><strong>Eligibility:</strong> To qualify for a personal loan, applicants must have a steady source of income, proof of employment, and a good credit history. Additional documentation such as identification and proof of income may be required.</p>

<h4>2. Business Loans</h4>
<p><strong>Description:</strong> Ecobank Ghana offers a wide range of business loans to support small, medium, and large enterprises in their operations. These loans can be used for working capital, business expansion, asset acquisition, or project financing. Ecobank Ghana provides financial solutions to businesses across different industries, helping them grow and succeed.</p>
<p><strong>Loan Amount:</strong> Business loans from Ecobank Ghana can vary based on the type of business and the loan purpose. Loan amounts are generally customized to meet the specific financial needs of the business.</p>
<p><strong>Interest Rates:</strong> Business loan interest rates at Ecobank start from 18% per annum, but the rates can vary depending on the business size, financial stability, and loan terms.</p>
<p><strong>Repayment Term:</strong> Business loan repayment terms are generally flexible, with repayment periods ranging from 12 months to 60 months, depending on the loan amount and financial profile of the business.</p>
<p><strong>Eligibility:</strong> Businesses must have a stable financial history and a proven track record of operation. Ecobank may require financial statements, tax returns, and a business plan for loan approval. Collateral may be required for higher loan amounts.</p>

<h4>3. Mortgage Loans</h4>
<p><strong>Description:</strong> Ecobank Ghana offers mortgage loans to individuals and families looking to purchase, build, or renovate their homes. These loans are secured by the property and come with competitive interest rates and flexible repayment terms.</p>
<p><strong>Loan Amount:</strong> Ecobank finances up to 80% of the property value, with the remaining 20% to be covered by the borrower. The loan amount can be customized to meet the borrower’s needs.</p>
<p><strong>Interest Rates:</strong> Mortgage loan interest rates at Ecobank start from around 18% per annum. The rates may vary depending on the borrower’s credit profile and the loan amount.</p>
<p><strong>Repayment Term:</strong> The repayment period for mortgage loans typically ranges from 5 to 20 years, depending on the amount of the loan and the borrower’s repayment capacity.</p>
<p><strong>Eligibility:</strong> To be eligible for a mortgage loan, applicants must have a regular income and good credit history. The property being purchased or constructed must meet Ecobank’s standards, and the borrower must provide proof of income, identification, and property documents.</p>

<h4>4. Auto Loans</h4>
<p><strong>Description:</strong> Ecobank Ghana provides auto loans to individuals who wish to purchase new or used vehicles. These loans offer financing options for the purchase of cars, trucks, or other vehicles, with attractive interest rates and flexible repayment options.</p>
<p><strong>Loan Amount:</strong> Ecobank finances up to 80% of the vehicle's purchase price, with the borrower responsible for the remaining 20% as a down payment.</p>
<p><strong>Interest Rates:</strong> Auto loan interest rates at Ecobank start from around 22% per annum. Rates can vary depending on the type of vehicle, the applicant’s credit score, and loan amount.</p>
<p><strong>Repayment Term:</strong> The repayment period for auto loans typically ranges from 12 to 60 months, depending on the loan amount and borrower’s ability to repay.</p>
<p><strong>Eligibility:</strong> To qualify for an auto loan, applicants must have a steady income and a good credit score. The vehicle being financed must be registered in the applicant’s name, and a down payment is required.</p>

<h4>5. Education Loans</h4>
<p><strong>Description:</strong> Ecobank Ghana offers education loans to students who wish to pursue higher education. These loans are designed to cover tuition fees, textbooks, and other academic-related expenses for both local and international students.</p>
<p><strong>Loan Amount:</strong> The amount of the education loan is based on the total cost of tuition and related expenses. Ecobank Ghana can finance up to 100% of the student’s educational needs.</p>
<p><strong>Interest Rates:</strong> Education loan interest rates start at approximately 14% per annum. The rates may vary depending on the applicant’s financial profile and the loan amount.</p>
<p><strong>Repayment Term:</strong> Education loan repayment terms are generally flexible, with the option for a grace period after the student graduates. The repayment period can extend from 5 to 10 years.</p>
<p><strong>Eligibility:</strong> Applicants must be enrolled in an accredited institution and may require a co-signer or guarantor. Ecobank requires proof of admission and documentation related to the student’s academic program.</p>

<h3>Conclusion</h3>
<p>Ecobank Ghana offers a wide range of loan products designed to meet the diverse needs of individuals and businesses. Whether you're looking for a personal loan, business loan, mortgage, auto loan, or education loan, Ecobank provides tailored financial solutions with flexible repayment terms and competitive interest rates. The bank’s customer-centric approach and comprehensive loan options make it a popular choice for those seeking financial support in Ghana.</p>

<br>
<h3>Ecobank Ghana</h3>
<p>Ecobank Ghana is one of the leading banks in Ghana, offering a wide range of banking services, including personal loans, business loans, and mortgage loans. The bank is well-known for its customer-centric approach and a variety of loan options tailored to meet the diverse financial needs of individuals and businesses in Ghana.</p>

<h3>Loan Products Offered by Ecobank Ghana:</h3>

<h4>1. Personal Loans</h4>
<p><strong>Description:</strong> Ecobank Ghana provides personal loans designed for individuals looking for financial assistance to cover a variety of personal expenses such as medical bills, education, travel, home improvement, and emergencies. These loans are often unsecured and are available to both salary earners and non-salary earners.</p>
<p><strong>Loan Amount:</strong> Personal loan amounts vary depending on the applicant’s income, creditworthiness, and financial profile. Ecobank provides flexible loan amounts tailored to the individual needs of the borrower.</p>
<p><strong>Interest Rates:</strong> The interest rates for personal loans at Ecobank Ghana typically start from around 25% per annum. The rates may vary depending on the applicant’s credit profile and loan amount.</p>
<p><strong>Repayment Term:</strong> Personal loans generally have flexible repayment terms, with typical loan periods ranging from 6 months to 36 months, based on the loan amount and the borrower’s repayment capacity.</p>
<p><strong>Eligibility:</strong> To qualify for a personal loan, applicants must have a steady source of income, proof of employment, and a good credit history. Additional documentation such as identification and proof of income may be required.</p>

<h4>2. Business Loans</h4>
<p><strong>Description:</strong> Ecobank Ghana offers a wide range of business loans to support small, medium, and large enterprises in their operations. These loans can be used for working capital, business expansion, asset acquisition, or project financing. Ecobank Ghana provides financial solutions to businesses across different industries, helping them grow and succeed.</p>
<p><strong>Loan Amount:</strong> Business loans from Ecobank Ghana can vary based on the type of business and the loan purpose. Loan amounts are generally customized to meet the specific financial needs of the business.</p>
<p><strong>Interest Rates:</strong> Business loan interest rates at Ecobank start from 18% per annum, but the rates can vary depending on the business size, financial stability, and loan terms.</p>
<p><strong>Repayment Term:</strong> Business loan repayment terms are generally flexible, with repayment periods ranging from 12 months to 60 months, depending on the loan amount and financial profile of the business.</p>
<p><strong>Eligibility:</strong> Businesses must have a stable financial history and a proven track record of operation. Ecobank may require financial statements, tax returns, and a business plan for loan approval. Collateral may be required for higher loan amounts.</p>

<h4>3. Mortgage Loans</h4>
<p><strong>Description:</strong> Ecobank Ghana offers mortgage loans to individuals and families looking to purchase, build, or renovate their homes. These loans are secured by the property and come with competitive interest rates and flexible repayment terms.</p>
<p><strong>Loan Amount:</strong> Ecobank finances up to 80% of the property value, with the remaining 20% to be covered by the borrower. The loan amount can be customized to meet the borrower’s needs.</p>
<p><strong>Interest Rates:</strong> Mortgage loan interest rates at Ecobank start from around 18% per annum. The rates may vary depending on the borrower’s credit profile and the loan amount.</p>
<p><strong>Repayment Term:</strong> The repayment period for mortgage loans typically ranges from 5 to 20 years, depending on the amount of the loan and the borrower’s repayment capacity.</p>
<p><strong>Eligibility:</strong> To be eligible for a mortgage loan, applicants must have a regular income and good credit history. The property being purchased or constructed must meet Ecobank’s standards, and the borrower must provide proof of income, identification, and property documents.</p>

<h4>4. Auto Loans</h4>
<p><strong>Description:</strong> Ecobank Ghana provides auto loans to individuals who wish to purchase new or used vehicles. These loans offer financing options for the purchase of cars, trucks, or other vehicles, with attractive interest rates and flexible repayment options.</p>
<p><strong>Loan Amount:</strong> Ecobank finances up to 80% of the vehicle's purchase price, with the borrower responsible for the remaining 20% as a down payment.</p>
<p><strong>Interest Rates:</strong> Auto loan interest rates at Ecobank start from around 22% per annum. Rates can vary depending on the type of vehicle, the applicant’s credit score, and loan amount.</p>
<p><strong>Repayment Term:</strong> The repayment period for auto loans typically ranges from 12 to 60 months, depending on the loan amount and borrower’s ability to repay.</p>
<p><strong>Eligibility:</strong> To qualify for an auto loan, applicants must have a steady income and a good credit score. The vehicle being financed must be registered in the applicant’s name, and a down payment is required.</p>

<h4>5. Education Loans</h4>
<p><strong>Description:</strong> Ecobank Ghana offers education loans to students who wish to pursue higher education. These loans are designed to cover tuition fees, textbooks, and other academic-related expenses for both local and international students.</p>
<p><strong>Loan Amount:</strong> The amount of the education loan is based on the total cost of tuition and related expenses. Ecobank Ghana can finance up to 100% of the student’s educational needs.</p>
<p><strong>Interest Rates:</strong> Education loan interest rates start at approximately 14% per annum. The rates may vary depending on the applicant’s financial profile and the loan amount.</p>
<p><strong>Repayment Term:</strong> Education loan repayment terms are generally flexible, with the option for a grace period after the student graduates. The repayment period can extend from 5 to 10 years.</p>
<p><strong>Eligibility:</strong> Applicants must be enrolled in an accredited institution and may require a co-signer or guarantor. Ecobank requires proof of admission and documentation related to the student’s academic program.</p>

<h3>Conclusion</h3>
<p>Ecobank Ghana offers a wide range of loan products designed to meet the diverse needs of individuals and businesses. Whether you're looking for a personal loan, business loan, mortgage, auto loan, or education loan, Ecobank provides tailored financial solutions with flexible repayment terms and competitive interest rates. The bank’s customer-centric approach and comprehensive loan options make it a popular choice for those seeking financial support in Ghana.</p>

<br>
<h3>Absa Bank Ghana (formerly Barclays Bank Ghana)</h3>
<p>Absa Bank Ghana, formerly known as Barclays Bank Ghana, is one of the leading financial institutions in Ghana. The bank offers a wide variety of banking services, including personal loans, business loans, mortgages, and other financing options tailored to meet the financial needs of individuals and businesses. Absa Bank Ghana is renowned for its excellent customer service and comprehensive loan products designed to help customers achieve their financial goals.</p>

<h3>Loan Products Offered by Absa Bank Ghana:</h3>

<h4>1. Personal Loans</h4>
<p><strong>Description:</strong> Absa Bank Ghana provides personal loans to individuals who need financial assistance for various personal expenses such as medical emergencies, home improvements, education, and travel. These loans are often unsecured, and borrowers do not need to provide collateral.</p>
<p><strong>Loan Amount:</strong> The loan amounts are flexible and are determined based on the borrower’s income and financial profile. Absa offers personal loans that can range from small amounts to larger sums to meet personal needs.</p>
<p><strong>Interest Rates:</strong> The interest rates for personal loans at Absa Bank Ghana are competitive and generally start from around 25% per annum. The exact rates vary depending on the borrower’s credit profile and the loan amount.</p>
<p><strong>Repayment Term:</strong> Personal loan repayment terms can range from 6 months to 36 months, offering borrowers the flexibility to repay based on their financial situation.</p>
<p><strong>Eligibility:</strong> To be eligible for a personal loan, applicants must demonstrate a regular source of income, proof of employment, and a good credit history. Documents such as identification, proof of income, and other supporting documents are required for loan approval.</p>

<h4>2. Business Loans</h4>
<p><strong>Description:</strong> Absa Bank Ghana offers business loans to both small and large enterprises to help them grow and expand their operations. These loans are suitable for businesses that need funding for working capital, equipment purchases, or business expansion.</p>
<p><strong>Loan Amount:</strong> Business loans are tailored to the financial needs of the business, and loan amounts vary depending on the size of the business and the loan purpose.</p>
<p><strong>Interest Rates:</strong> Interest rates for business loans at Absa Bank Ghana start from around 18% per annum, but the rates can vary depending on the business’s financial stability, loan amount, and repayment terms.</p>
<p><strong>Repayment Term:</strong> Repayment terms for business loans are flexible, typically ranging from 12 months to 60 months, depending on the loan amount and the business’s financial situation.</p>
<p><strong>Eligibility:</strong> Businesses must demonstrate good financial health, including a proven track record of performance. Absa requires documents such as financial statements, tax returns, and a business plan. In some cases, collateral may be required for larger loans.</p>

<h4>3. Mortgage Loans</h4>
<p><strong>Description:</strong> Absa Bank Ghana offers mortgage loans to help individuals purchase, build, or renovate their homes. These loans are secured by the property, and the bank provides financing options that are tailored to the borrower’s needs and property type.</p>
<p><strong>Loan Amount:</strong> Mortgage loans at Absa Bank can cover up to 80% of the property value. The remaining 20% is typically provided by the borrower as a down payment.</p>
<p><strong>Interest Rates:</strong> Interest rates for mortgage loans at Absa Bank Ghana start from around 18% per annum, with the exact rate depending on the borrower’s credit profile and the loan amount.</p>
<p><strong>Repayment Term:</strong> Mortgage loan repayment terms can range from 5 to 20 years, depending on the loan amount, the borrower’s financial capacity, and the property value.</p>
<p><strong>Eligibility:</strong> Applicants must have a steady income and good credit history. The property being purchased or renovated must meet Absa’s approval standards, and additional documentation such as proof of income and property documents are required.</p>

<h4>4. Car Loans</h4>
<p><strong>Description:</strong> Absa Bank Ghana provides car loans to help individuals purchase new or used vehicles. These loans are designed to offer affordable financing options for those looking to buy a car, truck, or other vehicles.</p>
<p><strong>Loan Amount:</strong> Absa finances up to 80% of the vehicle's purchase price, with the borrower required to cover the remaining 20% as a down payment.</p>
<p><strong>Interest Rates:</strong> Car loan interest rates at Absa Bank typically start from around 22% per annum. Rates may vary depending on the vehicle’s type, the borrower’s creditworthiness, and the loan terms.</p>
<p><strong>Repayment Term:</strong> The repayment period for car loans generally ranges from 12 to 60 months, depending on the loan amount and the borrower’s ability to repay.</p>
<p><strong>Eligibility:</strong> To be eligible for a car loan, the applicant must have a stable income and a good credit score. The vehicle being financed must be registered in the applicant’s name, and a down payment is required.</p>

<h4>5. Education Loans</h4>
<p><strong>Description:</strong> Absa Bank Ghana offers education loans to students pursuing higher education, both locally and internationally. The loan is designed to cover tuition fees, textbooks, and other academic-related expenses.</p>
<p><strong>Loan Amount:</strong> The loan amount can cover up to 100% of the total cost of the student’s education, including tuition fees, living expenses, and books.</p>
<p><strong>Interest Rates:</strong> Education loan interest rates typically start at around 14% per annum, with the exact rate depending on the borrower’s financial situation and loan amount.</p>
<p><strong>Repayment Term:</strong> Education loan repayment terms are flexible, with a grace period after graduation. The repayment period can range from 5 to 10 years, giving students ample time to begin repaying once they have completed their studies and secured employment.</p>
<p><strong>Eligibility:</strong> To qualify for an education loan, applicants must be enrolled in an accredited institution. Proof of admission and academic records are required. A co-signer or guarantor may be required for loan approval.</p>

<h3>Conclusion</h3>
<p>Absa Bank Ghana (formerly Barclays Bank Ghana) provides a broad range of loan products designed to meet the financial needs of individuals and businesses. Whether you are looking for a personal loan, business loan, mortgage, car loan, or education loan, Absa Bank offers tailored solutions with competitive interest rates, flexible repayment terms, and a commitment to excellent customer service. With a strong reputation in the Ghanaian banking industry, Absa Bank Ghana remains a trusted choice for financial services and loan solutions.</p>


        `;
} else if (getTimeZoneCountry() == "Indonesia") {
  ContentContainer.innerHTML = `
    <h4>Types of Loans in Indonesia</h4>
        <ul>
           <li>Bank Rakyat Indonesia (BRI)</li>
           <li>Bank Mandiri)</li>
           <li>Bank Central Asia (BCA)</li>
           <li>Bank Negara Indonesia (BNI)</li>
        </ul>

         <p><strong>Bank Rakyat Indonesia (BRI) Loan Types</strong></p>
<ul>
    <li>
        <p><strong>1. KUR (Kredit Usaha Rakyat):</strong></p>
        <p><strong>Interest Rate:</strong> Starts from 6% annually (subject to government subsidy).</p>
        <p><strong>Benefits:</strong> Affordable rates, government-backed, and designed for MSMEs.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts up to IDR 500 million.</li>
            <li>No collateral required for micro KUR.</li>
            <li>Flexible repayment terms.</li>
        </ul>
    </li>
    <li>
        <p><strong>2. KPR (Kredit Pemilikan Rumah):</strong></p>
        <p><strong>Interest Rate:</strong> Fixed rates starting at 6.5% annually, variable rates apply thereafter.</p>
        <p><strong>Benefits:</strong> Long tenure (up to 20 years), competitive rates, and low down payment.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Financing for purchasing, building, or renovating homes.</li>
            <li>Applicable for new or second-hand properties.</li>
            <li>Customizable repayment schedules.</li>
        </ul>
    </li>
    <li>
        <p><strong>3. KKB (Kredit Kendaraan Bermotor):</strong></p>
        <p><strong>Interest Rate:</strong> Starting at 3.5% annually for new vehicles.</p>
        <p><strong>Benefits:</strong> Low rates, quick approval, and flexible repayment.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loans for cars and motorcycles.</li>
            <li>Tenure options from 1 to 5 years.</li>
            <li>Partnerships with authorized dealerships.</li>
        </ul>
    </li>
    <li>
        <p><strong>4. BRIGuna:</strong></p>
        <p><strong>Interest Rate:</strong> Varies based on loan amount and tenure, starting at 8% annually.</p>
        <p><strong>Benefits:</strong> No collateral required, suitable for fixed-income earners.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Personal loans for education, medical, or other needs.</li>
            <li>Repayment tenure up to 15 years.</li>
            <li>Open to retirees with pension as collateral.</li>
        </ul>
    </li>
    <li>
        <p><strong>5. Micro Loans:</strong></p>
        <p><strong>Interest Rate:</strong> Starting at 9% annually.</p>
        <p><strong>Benefits:</strong> Minimal documentation, easy access for entrepreneurs.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Small loans for business expansion.</li>
            <li>Collateral requirements vary.</li>
            <li>Quick processing and disbursal.</li>
        </ul>
    </li>
    <li>
        <p><strong>6. Investment Loans:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 7.5% annually.</p>
        <p><strong>Benefits:</strong> Long-term financing for business growth.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Funding for infrastructure, machinery, or expansion.</li>
            <li>Loan tenure up to 15 years.</li>
            <li>Flexible collateral options.</li>
        </ul>
    </li>
    <li>
        <p><strong>7. Working Capital Loans:</strong></p>
        <p><strong>Interest Rate:</strong> Starting at 8% annually.</p>
        <p><strong>Benefits:</strong> Ensures smooth cash flow for daily operations.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Short-term loan for operational needs.</li>
            <li>Loan tenure up to 3 years.</li>
            <li>Designed for MSMEs and corporates.</li>
        </ul>
    </li>
</ul>
<br>

<p><strong>Bank Mandiri Loan Types</strong></p>
<ul>
    <li>
        <p><strong>1. KPR Mandiri (Home Ownership Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 5.99% annually for fixed-rate packages.</p>
        <p><strong>Benefits:</strong> Low down payment, long repayment period, and flexible rates.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Financing for purchasing new or second-hand houses.</li>
            <li>Tenure up to 25 years.</li>
            <li>Option for refinancing existing home loans.</li>
        </ul>
    </li>
    <li>
        <p><strong>2. Mandiri KKB (Vehicle Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 3.25% annually for new vehicles.</p>
        <p><strong>Benefits:</strong> Competitive rates, partnerships with leading dealerships, and fast processing.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loans for cars, motorcycles, or commercial vehicles.</li>
            <li>Flexible repayment terms from 1 to 5 years.</li>
            <li>Special rates during promotional periods.</li>
        </ul>
    </li>
    <li>
        <p><strong>3. Mandiri Kredit Usaha Mikro (Micro Business Loans):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 6% annually (government-subsidized KUR).</p>
        <p><strong>Benefits:</strong> Simplified application, no collateral for smaller amounts.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts up to IDR 500 million.</li>
            <li>Specifically designed for MSMEs.</li>
            <li>Flexible repayment schedules.</li>
        </ul>
    </li>
    <li>
        <p><strong>4. Mandiri Personal Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 10% annually (varies based on tenure and amount).</p>
        <p><strong>Benefits:</strong> No collateral required, easy approval for salaried individuals.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loans for personal needs such as education, travel, or medical expenses.</li>
            <li>Tenure up to 5 years.</li>
            <li>Fixed monthly installments.</li>
        </ul>
    </li>
    <li>
        <p><strong>5. Mandiri Investment Loans:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 7% annually.</p>
        <p><strong>Benefits:</strong> Tailored for business expansion and growth.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Financing for purchasing machinery, property, or long-term projects.</li>
            <li>Loan tenure up to 15 years.</li>
            <li>Flexible collateral options.</li>
        </ul>
    </li>
    <li>
        <p><strong>6. Mandiri Working Capital Loans:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 8% annually.</p>
        <p><strong>Benefits:</strong> Helps maintain smooth business operations.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Short-term financing for operational costs.</li>
            <li>Repayment terms from 6 months to 3 years.</li>
            <li>Available for MSMEs and large businesses.</li>
        </ul>
    </li>
    <li>
        <p><strong>7. Mandiri Kredit Modal Kerja (Business Loans):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 9% annually.</p>
        <p><strong>Benefits:</strong> Ideal for entrepreneurs looking to expand their business.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts customized to business needs.</li>
            <li>Collateral may be required for larger amounts.</li>
            <li>Dedicated support from Mandiri’s business team.</li>
        </ul>
    </li>
</ul>


<br>

<p><strong>Bank Central Asia (BCA) Loan Types</strong></p>
<ul>
    <li>
        <p><strong>1. KPR BCA (Home Ownership Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts from 4.5% annually for fixed-rate packages.</p>
        <p><strong>Benefits:</strong> Competitive rates, customizable repayment plans, and promotional offers.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Financing for purchasing new or second-hand properties.</li>
            <li>Tenure options up to 25 years.</li>
            <li>Flexible installment plans based on customer needs.</li>
        </ul>
    </li>
    <li>
        <p><strong>2. KKB BCA (Vehicle Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts from 3.5% annually for new vehicles.</p>
        <p><strong>Benefits:</strong> Low rates, partnerships with authorized dealers, and easy approval.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loans for cars, motorcycles, and commercial vehicles.</li>
            <li>Flexible repayment terms up to 5 years.</li>
            <li>Special rates during promotional periods.</li>
        </ul>
    </li>
    <li>
        <p><strong>3. BCA Personal Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts from 10% annually (varies by loan amount and tenure).</p>
        <p><strong>Benefits:</strong> No collateral required, fast approval process, and fixed installments.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loans for education, travel, or other personal needs.</li>
            <li>Tenure options up to 3 years.</li>
            <li>Open to BCA account holders and credit card users.</li>
        </ul>
    </li>
    <li>
        <p><strong>4. KUR BCA (Small Business Loans):</strong></p>
        <p><strong>Interest Rate:</strong> Starts from 6% annually (government-subsidized).</p>
        <p><strong>Benefits:</strong> Affordable rates, no collateral for smaller loans, and quick processing.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts up to IDR 500 million.</li>
            <li>Specifically designed for MSMEs.</li>
            <li>Flexible repayment options to suit business cash flow.</li>
        </ul>
    </li>
    <li>
        <p><strong>5. BCA Investment Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts from 7.5% annually.</p>
        <p><strong>Benefits:</strong> Tailored for long-term business growth.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Funding for machinery, infrastructure, or business expansion.</li>
            <li>Loan tenure up to 15 years.</li>
            <li>Flexible collateral requirements.</li>
        </ul>
    </li>
    <li>
        <p><strong>6. BCA Working Capital Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts from 8% annually.</p>
        <p><strong>Benefits:</strong> Smooth cash flow for operational needs.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Short-term financing for business operations.</li>
            <li>Tenure options from 6 months to 3 years.</li>
            <li>Available for MSMEs and corporates.</li>
        </ul>
    </li>
    <li>
        <p><strong>7. BCA Multiguna Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Varies based on collateral and tenure.</p>
        <p><strong>Benefits:</strong> Loans secured against assets for larger amounts.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Secured loans for personal or business needs.</li>
            <li>Flexible repayment terms up to 10 years.</li>
            <li>Collateral options include property, vehicles, or other assets.</li>
        </ul>
    </li>
</ul>

<br>

<p><strong>Bank Negara Indonesia (BNI) Loan Types</strong></p>
<ul>
    <li>
        <p><strong>1. BNI Griya (Home Ownership Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 4.75% annually for fixed-rate packages.</p>
        <p><strong>Benefits:</strong> Flexible loan tenure, competitive rates, and refinancing options.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Financing for purchasing new or second-hand houses, apartments, or renovations.</li>
            <li>Tenure options up to 25 years.</li>
            <li>Available for refinancing existing mortgages.</li>
        </ul>
    </li>
    <li>
        <p><strong>2. BNI Fleksi (Personal Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts from 10% annually (varies based on amount and tenure).</p>
        <p><strong>Benefits:</strong> No collateral required, quick approval, and fixed installments.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loans for education, travel, or emergencies.</li>
            <li>Tenure options up to 5 years.</li>
            <li>Exclusively for BNI payroll account holders.</li>
        </ul>
    </li>
    <li>
        <p><strong>3. BNI KUR (Small Business Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 6% annually (government-subsidized).</p>
        <p><strong>Benefits:</strong> Affordable rates, no collateral for small loans, and streamlined application.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts up to IDR 500 million.</li>
            <li>Specifically designed for MSMEs (Micro, Small, and Medium Enterprises).</li>
            <li>Repayment terms that align with business cash flow.</li>
        </ul>
    </li>
    <li>
        <p><strong>4. BNI Wirausaha (Entrepreneur Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 7% annually.</p>
        <p><strong>Benefits:</strong> Tailored for business expansion, flexible repayment options.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Financing for business growth or operational needs.</li>
            <li>Loan tenure up to 10 years.</li>
            <li>Collateral may be required based on the loan amount.</li>
        </ul>
    </li>
    <li>
        <p><strong>5. BNI Multiguna (Multipurpose Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 9% annually.</p>
        <p><strong>Benefits:</strong> High loan amounts, long repayment periods, and secured against assets.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loans for personal or business needs.</li>
            <li>Flexible tenure up to 15 years.</li>
            <li>Collateral options include property or other valuable assets.</li>
        </ul>
    </li>
    <li>
        <p><strong>6. BNI Oto (Vehicle Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 3.5% annually for new vehicles.</p>
        <p><strong>Benefits:</strong> Low down payment, competitive interest rates, and fast processing.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loans for purchasing cars or motorcycles.</li>
            <li>Repayment terms from 1 to 5 years.</li>
            <li>Exclusive offers through partnerships with dealers.</li>
        </ul>
    </li>
    <li>
        <p><strong>7. BNI Instant (Quick Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Varies based on loan type and amount.</p>
        <p><strong>Benefits:</strong> Fast approval, minimal requirements, and no collateral for smaller loans.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Small loans for urgent needs like medical or educational expenses.</li>
            <li>Flexible repayment terms up to 3 years.</li>
            <li>Available for BNI account holders.</li>
        </ul>
    </li>
</ul>
       
       `;
} else if (getTimeZoneCountry() == "Philippines") {
  ContentContainer.innerHTML = `
     <h4>Types of Loans in Philippines</h4>
        <ul>
            <li>BDO Unibank (Banco de Oro)</li>
            <li>Metrobank (Metropolitan Bank & Trust Company)</li>
            <li>BPI (Bank of the Philippine Islands)</li>
            <li>Land Bank of the Philippines</li>
        </ul>

        <p><strong>BDO Unibank (Banco de Oro) Loan Types</strong></p>
<ul>
    <li>
        <p><strong>1. Personal Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 1.25% monthly add-on rate.</p>
        <p><strong>Benefits:</strong> No collateral required, multi-purpose, and quick approval.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amount ranges from PHP 10,000 to PHP 1,000,000.</li>
            <li>Repayment tenure from 6 to 36 months.</li>
            <li>Open to salaried employees, professionals, and business owners.</li>
        </ul>
    </li>
    <li>
        <p><strong>2. Auto Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 4.78% annually.</p>
        <p><strong>Benefits:</strong> Flexible financing options for new and used cars, fast loan processing.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Financing up to 80% of the vehicle's price.</li>
            <li>Loan tenure from 12 to 60 months.</li>
            <li>Partnerships with major car dealers for exclusive discounts.</li>
        </ul>
    </li>
    <li>
        <p><strong>3. Home Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 6.25% annually for fixed-term packages.</p>
        <p><strong>Benefits:</strong> Long repayment terms, refinancing options, and low down payment.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amount starting at PHP 500,000.</li>
            <li>Tenure options up to 20 years.</li>
            <li>Financing for home purchase, construction, or renovation.</li>
        </ul>
    </li>
    <li>
        <p><strong>4. SME Loan (Small and Medium Enterprises):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 7% annually (varies by loan type).</p>
        <p><strong>Benefits:</strong> Tailored financing solutions, competitive rates, and quick disbursement.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan options for working capital, asset acquisition, or business expansion.</li>
            <li>Flexible repayment terms aligned with business cash flow.</li>
            <li>Collateral may be required based on loan type and amount.</li>
        </ul>
    </li>
    <li>
        <p><strong>5. Kabayan Personal Loan (For OFWs):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 1.25% monthly add-on rate.</p>
        <p><strong>Benefits:</strong> Designed for Overseas Filipino Workers (OFWs), no collateral required.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amount ranges from PHP 10,000 to PHP 1,000,000.</li>
            <li>Repayment tenure up to 36 months.</li>
            <li>Exclusive support for OFW family members in the Philippines.</li>
        </ul>
    </li>
</ul>

<br>

<p><strong>Metrobank (Metropolitan Bank & Trust Company) Loan Types</strong></p>
<ul>
    <li>
        <p><strong>1. Personal Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 1.25% monthly add-on rate.</p>
        <p><strong>Benefits:</strong> No collateral required, fast approval, and multi-purpose financing.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts ranging from PHP 20,000 to PHP 1,000,000.</li>
            <li>Repayment terms of 6 to 36 months.</li>
            <li>Designed for salaried employees, self-employed individuals, and professionals.</li>
        </ul>
    </li>
    <li>
        <p><strong>2. Car Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 4.5% annually for new vehicles.</p>
        <p><strong>Benefits:</strong> Flexible down payment options, fast processing, and competitive rates.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amount up to 80% of the vehicle's price.</li>
            <li>Loan tenure options from 12 to 60 months.</li>
            <li>Available for new and pre-owned cars.</li>
        </ul>
    </li>
    <li>
        <p><strong>3. Home Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 6.5% annually for fixed-term packages.</p>
        <p><strong>Benefits:</strong> Long-term financing, low down payment, and refinancing options.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts starting from PHP 500,000.</li>
            <li>Repayment tenure up to 25 years.</li>
            <li>Financing for home purchase, construction, or renovation.</li>
        </ul>
    </li>
    <li>
        <p><strong>4. SME Business Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Varies based on loan amount and purpose.</p>
        <p><strong>Benefits:</strong> Tailored solutions for businesses, competitive rates, and quick disbursement.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Financing options for working capital, business expansion, and asset acquisition.</li>
            <li>Flexible repayment schedules.</li>
            <li>Loan amounts and tenure depend on business needs and creditworthiness.</li>
        </ul>
    </li>
    <li>
        <p><strong>5. OFW Loan (For Overseas Filipino Workers):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 1.5% monthly add-on rate.</p>
        <p><strong>Benefits:</strong> Exclusive for OFWs and their families, no collateral required.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amount ranges from PHP 50,000 to PHP 1,000,000.</li>
            <li>Repayment tenure up to 36 months.</li>
            <li>Accessible for both land-based and sea-based OFWs.</li>
        </ul>
    </li>
</ul>

<br>

<p><strong>BPI (Bank of the Philippine Islands) Loan Types</strong></p>
<ul>
    <li>
        <p><strong>1. Personal Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 1.15% monthly add-on rate.</p>
        <p><strong>Benefits:</strong> No collateral required, flexible loan amounts, and quick approval.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts ranging from PHP 20,000 to PHP 1,000,000.</li>
            <li>Flexible repayment terms from 6 to 36 months.</li>
            <li>Open to salaried employees, self-employed individuals, and professionals.</li>
        </ul>
    </li>
    <li>
        <p><strong>2. Auto Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 4.49% annually for new vehicles.</p>
        <p><strong>Benefits:</strong> Affordable interest rates, fast processing, and flexible terms.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts up to 80% of the vehicle's price.</li>
            <li>Loan tenure options from 12 to 60 months.</li>
            <li>Available for new and pre-owned cars from accredited dealers.</li>
        </ul>
    </li>
    <li>
        <p><strong>3. Home Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 6.25% annually for fixed-rate packages.</p>
        <p><strong>Benefits:</strong> Long repayment terms, low down payment, and refinancing options available.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts starting from PHP 500,000.</li>
            <li>Repayment terms up to 20 years.</li>
            <li>Loan for home purchase, construction, or renovation.</li>
        </ul>
    </li>
    <li>
        <p><strong>4. Business Loan (SME Loan):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 6% annually (varies based on loan type and business requirements).</p>
        <p><strong>Benefits:</strong> Tailored for business growth, quick processing, and competitive rates.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan for working capital, asset acquisition, or business expansion.</li>
            <li>Flexible repayment terms based on cash flow.</li>
            <li>Loan amounts tailored to the business size and financial needs.</li>
        </ul>
    </li>
    <li>
        <p><strong>5. BPI Family Savings Loan (For OFWs and their Families):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 1.25% monthly add-on rate.</p>
        <p><strong>Benefits:</strong> Exclusively for OFWs and their families, with no collateral required.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amount up to PHP 1,000,000.</li>
            <li>Repayment terms up to 36 months.</li>
            <li>Available for both land-based and sea-based OFWs.</li>
        </ul>
    </li>
</ul>
<br>
<p><strong>Land Bank of the Philippines (LandBank) Loan Types</strong></p>
<ul>
    <li>
        <p><strong>1. Personal Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 1.12% monthly add-on rate.</p>
        <p><strong>Benefits:</strong> No collateral required, quick approval, and flexible loan terms.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts ranging from PHP 10,000 to PHP 1,000,000.</li>
            <li>Repayment terms of 12 to 36 months.</li>
            <li>Open to salaried employees, self-employed individuals, and professionals.</li>
        </ul>
    </li>
    <li>
        <p><strong>2. Auto Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 5.25% annually for new vehicles.</p>
        <p><strong>Benefits:</strong> Competitive rates, no collateral for pre-owned vehicles, and quick approval.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts up to 80% of the vehicle's price.</li>
            <li>Loan tenure from 12 to 60 months.</li>
            <li>Available for both new and pre-owned cars from accredited dealerships.</li>
        </ul>
    </li>
    <li>
        <p><strong>3. Home Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 6.875% annually for fixed-rate options.</p>
        <p><strong>Benefits:</strong> Low down payment, long-term financing, and refinancing options.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amounts from PHP 500,000 upwards.</li>
            <li>Repayment terms from 10 to 30 years.</li>
            <li>Financing for purchasing, constructing, or renovating homes.</li>
        </ul>
    </li>
    <li>
        <p><strong>4. SME Loan (Small and Medium Enterprises):</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 7% annually (subject to loan amount and business type).</p>
        <p><strong>Benefits:</strong> Tailored for business needs, flexible repayment terms, and competitive rates.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amount for working capital, business expansion, or asset acquisition.</li>
            <li>Flexible loan tenure from 1 to 5 years.</li>
            <li>Collateral may be required based on loan type and amount.</li>
        </ul>
    </li>
    <li>
        <p><strong>5. LandBank OFW Loan:</strong></p>
        <p><strong>Interest Rate:</strong> Starts at 1.25% monthly add-on rate.</p>
        <p><strong>Benefits:</strong> No collateral required, exclusively for Overseas Filipino Workers (OFWs) and their families.</p>
        <p><strong>Key Features:</strong></p>
        <ul>
            <li>Loan amount up to PHP 1,000,000.</li>
            <li>Repayment terms from 12 to 36 months.</li>
            <li>Available for both land-based and sea-based OFWs.</li>
        </ul>
    </li>
</ul>


    `;
} else {
  ContentContainer.innerHTML = `
                    <h1>Global Loan Guide</h1>
                    <p>
                        This guide provides detailed information about loan types, eligibility criteria, and policies across
                        major banks worldwide. Whether you’re looking for a personal loan, a home loan, or financing for
                        your business, understanding the terms and conditions is essential.
                    </p>
    
                    <div class="country">
                        <h2>United States</h2>
    
                        <div class="bank">
                            <h3>Bank of America</h3>
                            <h4>Loan Types:</h4>
                            <ul>
                                <li><strong>Personal Loan:</strong> Offers quick funds for personal needs with competitive
                                    interest rates starting at 6% per annum. Loan amounts range from $1,000 to $50,000.</li>
                                <li><strong>Home Loan:</strong> Financing options for new homes or refinancing existing
                                    mortgages. Loan tenure goes up to 30 years.</li>
                                <li><strong>Auto Loan:</strong> Low-interest loans for new and used vehicles with flexible
                                    repayment terms.</li>
                            </ul>
                            <h4>Policies:</h4>
                            <ul>
                                <li><strong>Eligibility:</strong> Applicants must have a credit score of at least 620 and a
                                    steady source of income.</li>
                                <li><strong>Processing Fee:</strong> A non-refundable fee of $200 or 1% of the loan amount
                                    is applicable.</li>
                                <li><strong>Prepayment:</strong> No penalties for early repayment of loans.</li>
                            </ul>
                        </div>
    
                        <div class="bank">
                            <h3>Chase Bank</h3>
                            <h4>Loan Types:</h4>
                            <ul>
                                <li><strong>Business Loan:</strong> Tailored solutions for small businesses with loan
                                    amounts up to $500,000.</li>
                                <li><strong>Education Loan:</strong> Covers tuition, books, and living expenses for students
                                    studying domestically or internationally.</li>
                            </ul>
                            <h4>Policies:</h4>
                            <ul>
                                <li><strong>Eligibility:</strong> Requires a solid credit history and proof of income for
                                    personal loans or a business plan for business loans.</li>
                                <li><strong>Loan Tenure:</strong> Education loans offer a repayment grace period until
                                    graduation, followed by flexible repayment options for up to 10 years.</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="country">
                        <h2>India</h2>
    
                        <div class="bank">
                            <h3>State Bank of India (SBI)</h3>
                            <h4>Loan Types:</h4>
                            <ul>
                                <li><strong>Personal Loan:</strong> Tailored for salaried and self-employed individuals with
                                    interest rates starting at 10.5% per annum.</li>
                                <li><strong>Gold Loan:</strong> Secured against gold jewelry with quick disbursement.
                                    Interest rates start at 7% per annum.</li>
                                <li><strong>Agricultural Loan:</strong> Supports farmers with low-interest loans for
                                    equipment, seeds, and fertilizers.</li>
                            </ul>
                            <h4>Policies:</h4>
                            <ul>
                                <li><strong>Eligibility:</strong> Indian residents aged 18–65 with valid income proof.</li>
                                <li><strong>Processing Fee:</strong> 1% of the loan amount plus applicable taxes.</li>
                                <li><strong>Repayment:</strong> Flexible repayment terms of up to 7 years for personal loans
                                    and 3 years for gold loans.</li>
                            </ul>
                        </div>
    
                        <div class="bank">
                            <h3>HDFC Bank</h3>
                            <h4>Loan Types:</h4>
                            <ul>
                                <li><strong>Home Loan:</strong> Financing of up to 85% of the property value with flexible
                                    EMI options.</li>
                                <li><strong>Education Loan:</strong> Comprehensive coverage for tuition fees, books, and
                                    travel expenses. Co-applicant required for approval.</li>
                            </ul>
                            <h4>Policies:</h4>
                            <ul>
                                <li><strong>Eligibility:</strong> Indian citizens or NRIs with a strong credit history.</li>
                                <li><strong>Repayment Period:</strong> Up to 15 years for home loans and 10 years for
                                    education loans.</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="country">
                        <h2>United Kingdom</h2>
    
                        <div class="bank">
                            <h3>HSBC UK</h3>
                            <h4>Loan Types:</h4>
                            <ul>
                                <li><strong>Personal Loan:</strong> Unsecured loans of up to £25,000 with fixed monthly
                                    payments over 1–7 years.</li>
                                <li><strong>Business Loan:</strong> Tailored financing for SMEs to support growth and
                                    operational needs.</li>
                            </ul>
                            <h4>Policies:</h4>
                            <ul>
                                <li><strong>Interest Rates:</strong> APR varies from 3%–10%, depending on the borrower’s
                                    credit score.</li>
                                <li><strong>Eligibility:</strong> Applicants must be UK residents aged 18 or older with a
                                    valid bank account.</li>
                                <li><strong>Additional Features:</strong> Options to defer payments for the first three
                                    months.</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class="country">
                        <h2>Australia</h2>
    
                        <div class="bank">
                            <h3>Commonwealth Bank</h3>
                            <h4>Loan Types:</h4>
                            <ul>
                                <li><strong>Home Loan:</strong> Competitive interest rates for purchasing or renovating
                                    homes, with tenure up to 30 years.</li>
                                <li><strong>Car Loan:</strong> Loans for new and used vehicles with a fixed interest rate.
                                </li>
                            </ul>
                            <h4>Policies:</h4>
                            <ul>
                                <li><strong>Eligibility:</strong> Australian residents aged 18 or above with stable income.
                                </li>
                                <li><strong>Repayment:</strong> Flexible weekly, fortnightly, or monthly repayment options.
                                </li>
                            </ul>
                        </div>
                    </div>`;
}
