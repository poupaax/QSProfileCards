/**
 * Created by MiriamPereira on 01-06-2017.
 */
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static junit.framework.TestCase.assertEquals;

public class Stepdefs {
    private WebDriver driver;
    private String baseUrl = "file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/index.html";
    /*@Given("^I am on the Profile Cards page$")
    public void iAmOnTheGoogleSearchPage() throws Throwable {
        driver.get("file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/index.html");
        assertEquals("Profile Cards", driver.getTitle());
    }
    @When("^I search for \"([^\"]*)\"$")
    public void iSearchFor(String searchTerm) throws Throwable {
        WebElement element = driver.findElement(By.name("q"));
        element.sendKeys(searchTerm);
        element.submit();
    }
    @Then("^the page title should start with \"([^\"]*)\"$")
    public void thePageTitleShouldStartWith(String pageTitleStart)
            throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.titleContains(pageTitleStart));
    }*/
    // ----------
    @Before
    public void setUp() {
        driver = new HtmlUnitDriver();
    }
    @After
    public void tearDown() {
        driver.close();
    }

    @Given("^that I'm in the main page$")
    public void thatIMInTheMainPage() throws Throwable {
        driver.get(baseUrl);
        assertEquals("Profile Cards", driver.getTitle());
    }

    @When("^the page is loaded and exists members$")
    public void thePageIsLoadedAndExistsMembers() throws Throwable {
        driver.get(baseUrl);
        assertEquals("Pedro Jorge", driver.findElement(By.xpath("//div[@id='speakers']/div/h3")).getText());
        assertEquals("Miriam Pereira", driver.findElement(By.xpath("//div[@id='speakers']/div[2]/h3")).getText());
        assertEquals("Vítor Dias", driver.findElement(By.xpath("//div[@id='speakers']/div[3]/h3")).getText());
    }


}
