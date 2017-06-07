/**
 * Created by MiriamPereira on 01-06-2017.
 */
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsNot.not;
import static org.junit.Assert.assertFalse;

public class Stepdefs {
    private static WebDriver driver;

    static {
        if(driver == null)
            driver = new HtmlUnitDriver();
    }
    private String baseUrl = "file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/index.html";
    private String testNoUsersUrl = "file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/indexWithOutMembers.html";
    private String otherTestsUrl = "file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/indexMembersWithOutInfo.html";
    private String[] personalPages = {"file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/pedro.html",
            "file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/miriam.html",
            "file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/vitor.html"};
    private String[] testNoInfo = {"file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/pedroWithOutInfo.html",
            "file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/miriamWithOutInfo.html",
            "file:///D:/DOCUMENTOS/QSoftware/QSProfileCards/Site/vitorWithOutInfo.html"};

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

    @And("^doesn't exists \"([^\"]*)\"$")
    public void doesnTExists(String member) throws Throwable {
        driver.get(testNoUsersUrl);
        if(member.equals("Pedro Jorge"))
            assertThat(member, is(not(driver.findElement(By.xpath("//div[@id='speakers']/div")).getText())));
        if(member.equals("Miriam Pereira"))
            assertThat(member, is(not(driver.findElement(By.xpath("//div[@id='speakers']/div")).getText())));
        if(member.equals("Vítor Dias"))
            assertThat(member, is(not(driver.findElement(By.xpath("//div[@id='speakers']/div")).getText())));
    }

    @Then("^the application shows a default message \"([^\"]*)\" to member \"([^\"]*)\"$")
    public void theApplicationShowsADefaultMessageToMember(String msg, String member) throws Throwable {
        driver.get(testNoUsersUrl);
        if(member.equals("Pedro Jorge") || member.equals("Miriam Pereira") || member.equals("Vítor Dias")) {
            assertEquals(msg, driver.findElement(By.xpath("//div[@id='speakers']/div")).getText());
        }
    }

    @When("^the page is loaded$")
    public void thePageIsLoaded() throws Throwable {
        driver.get(baseUrl);
        driver.navigate().refresh();
    }

    @And("^exists \"([^\"]*)\"$")
    public void exists(String member) throws Throwable {
        driver.get(baseUrl);
        if(member.equals("Pedro Jorge"))
            assertTrue(isElementPresent(By.xpath("//div[@id='speakers']/div")));
        if(member.equals("Miriam Pereira"))
            assertTrue(isElementPresent(By.xpath("//div[@id='speakers']/div[2]")));
        if(member.equals("Vítor Dias"))
            assertTrue(isElementPresent(By.xpath("//div[@id='speakers']/div[3]")));
    }

    private boolean isElementPresent(By xpath) {
        try {
            driver.findElement(xpath);
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    @Then("^the application shows member \"([^\"]*)\" name \"([^\"]*)\"$")
    public void theApplicationShowsName(String member, String name) throws Throwable {
        driver.get(baseUrl);
        if(member.equals("Pedro Jorge")) {
            assertEquals(name, driver.findElement(By.xpath("//div[@id='speakers']/div/h3")).getText());
        }
        if(member.equals("Miriam Pereira")) {
            assertEquals(name, driver.findElement(By.xpath("//div[@id='speakers']/div[2]/h3")).getText());
        }
        if(member.equals("Vítor Dias")) {
            assertEquals(name, driver.findElement(By.xpath("//div[@id='speakers']/div[3]/h3")).getText());
        }
    }

    @Then("^the application show \"([^\"]*)\" to the \"([^\"]*)\"$")
    public void theApplicationShowToThe(String defaultName, String memberId) throws Throwable {
        driver.get(otherTestsUrl);
        if(memberId.equals("speakerPedro")) {
            assertEquals(defaultName, driver.findElement(By.xpath("//div[@id='speakers']/div/h3")).getText());
        }
        if(memberId.equals("speakerMiriam")) {
            assertEquals(defaultName, driver.findElement(By.xpath("//div[@id='speakers']/div[2]/h3")).getText());
        }
        if(memberId.equals("speakerVitor")) {
            assertEquals(defaultName, driver.findElement(By.xpath("//div[@id='speakers']/div[3]/h3")).getText());
        }
    }

    @Then("^the application show member \"([^\"]*)\" short bio \"([^\"]*)\"$")
    public void theApplicationShow(String member, String shortBio) throws Throwable {
        driver.get(baseUrl);
        if(member.equals("Pedro Jorge")) {
            assertEquals(shortBio, driver.findElement(By.xpath("//div[@id='speakers']/div/p")).getText());
        }
        if(member.equals("Miriam Pereira")) {
            assertEquals(shortBio, driver.findElement(By.xpath("//div[@id='speakers']/div[2]/p")).getText());
        }
        if(member.equals("Vítor Dias")) {
            assertEquals(shortBio, driver.findElement(By.xpath("//div[@id='speakers']/div[3]/p")).getText());
        }
    }

    @Then("^the application show \"([^\"]*)\" short bio \"([^\"]*)\"$")
    public void theApplicationDonTShowShortBio(String member, String msg) throws Throwable {
        driver.get(otherTestsUrl);
        if(member.equals("Pedro Jorge")) {
            assertEquals(msg, driver.findElement(By.xpath("//div[@id='speakers']/div/p")).getText());
        }
        if(member.equals("Miriam Pereira")) {
            assertEquals(msg, driver.findElement(By.xpath("//div[@id='speakers']/div[2]/p")).getText());
        }
        if(member.equals("Vítor Dias")) {
            assertEquals(msg, driver.findElement(By.xpath("//div[@id='speakers']/div[3]/p")).getText());
        }
    }

    @Then("^the application show facebook icon with member \"([^\"]*)\" link \"([^\"]*)\"$")
    public void theApplicationShowFacebookIconWith(String member, String link) throws Throwable {
        driver.get(baseUrl);
        if(member.equals("Pedro Jorge")) {
            WebElement href = driver.findElement(By.xpath("//div[@id='speakers']/div/ul/li/a[contains(@href,'https://www.facebook.com/pedrombjorge')]"));
            if(href.toString().contains(link)){
                assertEquals(true, true);
            }
        }
        if(member.equals("Miriam Pereira")) {
            WebElement href = driver.findElement(By.xpath("//div[@id='speakers']/div/ul/li/a[contains(@href,'https://www.facebook.com/miriampereira95')]"));
            if(href.toString().contains(link)){
                assertEquals(true, true);
            }
        }
        if(member.equals("Vítor Dias")) {
            WebElement href = driver.findElement(By.xpath("//div[@id='speakers']/div/ul/li/a[contains(@href,'https://www.facebook.com/vitor.dias.3954')]"));
            if(href.toString().contains(link)){
                assertEquals(true, true);
            }
        }
    }

    @Then("^the application show the member \"([^\"]*)\" default link \"([^\"]*)\"$")
    public void theApplicationShowThe(String member, String linkdefault) throws Throwable {
        driver.get(otherTestsUrl);
        if(member.equals("Pedro Jorge") || member.equals("Miriam Pereira") || member.equals("Vítor Dias")) {
            WebElement href = driver.findElement(By.xpath("//div[@id='speakers']/div/ul/li/a[contains(@href,'https://www.facebook.com/')]"));
            if(href.toString().contains(linkdefault)){
                assertEquals(true, true);
            }
        }
    }

    @Then("^the application show \"([^\"]*)\" photo \"([^\"]*)\"$")
    public void theApplicationShowPhoto(String member, String photo) throws Throwable {
        driver.get(baseUrl);
        if(member.equals("Pedro Jorge")) {
            WebElement img = driver.findElement(By.xpath("//div[@id='speakers']/div/img[contains(@src,'img/pedro.jpg')]"));
            if(img.toString().contains(photo)){
                assertEquals(true, true);
            }
        }
        if(member.equals("Miriam Pereira")) {
            WebElement img = driver.findElement(By.xpath("//div[@id='speakers']/div/img[contains(@src,'img/miriam.jpg')]"));
            if(img.toString().contains(photo)){
                assertEquals(true, true);
            }
        }
        if(member.equals("Vítor Dias")) {
            WebElement img = driver.findElement(By.xpath("//div[@id='speakers']/div/img[contains(@src,'img/vitor.jpg')]"));
            if(img.toString().contains(photo)){
                assertEquals(true, true);
            }
        }
    }

    @Then("^the application show a \"([^\"]*)\" default photo \"([^\"]*)\"$")
    public void theApplicationShowADefaultPhoto(String member, String linkdefault) throws Throwable {
        driver.get(otherTestsUrl);
        if(member.equals("Pedro Jorge") || member.equals("Miriam Pereira") || member.equals("Vítor Dias")) {
            WebElement href = driver.findElement(By.xpath("//div[@id='speakers']/div/img[contains(@src,'img/default.jpg')]"));
            if(href.toString().contains(linkdefault)){
                assertEquals(true, true);
            }
        }
    }

    @Then("^the application show linkedin icon with member \"([^\"]*)\" link \"([^\"]*)\"$")
    public void theApplicationShowLinkedinIconWithMemberLink(String member, String link) throws Throwable {
        driver.get(baseUrl);
        if(member.equals("Pedro Jorge")) {
            WebElement href = driver.findElement(By.xpath("//div[@id='speakers']/div/ul/li/a[contains(@href,'https://www.linkedin.com/in/pedrombjorge/')]"));
            if(href.toString().contains(link)){
                assertEquals(true, true);
            }
        }
        if(member.equals("Miriam Pereira")) {
            WebElement href = driver.findElement(By.xpath("//div[@id='speakers']/div/ul/li/a[contains(@href,'https://www.linkedin.com/in/miriammpereira/')]"));
            if(href.toString().contains(link)){
                assertEquals(true, true);
            }
        }
        if(member.equals("Vítor Dias")) {
            WebElement href = driver.findElement(By.xpath("//div[@id='speakers']/div/ul/li/a[contains(@href,'https://www.linkedin.com/in/vitor-dias-6aa9a310b/')]"));
            if(href.toString().contains(link)){
                assertEquals(true, true);
            }
        }
    }

    @Then("^the application show the member \"([^\"]*)\" link \"([^\"]*)\"$")
    public void theApplicationShowTheMemberLink(String member, String linkdefault) throws Throwable {
        driver.get(otherTestsUrl);
        if(member.equals("Pedro Jorge") || member.equals("Miriam Pereira") || member.equals("Vítor Dias")) {
            WebElement href = driver.findElement(By.xpath("//div[@id='speakers']/div/ul/li/a[contains(@href,'https://www.linkedin.com/')]"));
            if(href.toString().contains(linkdefault)){
                assertEquals(true, true);
            }
        }
    }

    @When("^the user click on \"([^\"]*)\" of the team$")
    public void theUserClickOnOfTheTeam(String member) throws Throwable {
        driver.get(baseUrl);
        if(member.equals("Pedro Jorge")) {
            driver.findElement(By.xpath("//div[@id='speakers']/div")).click();
        }
        if(member.equals("Miriam Pereira")) {
            driver.findElement(By.xpath("//div[@id='speakers']/div[2]")).click();
        }
        if(member.equals("Vítor Dias")) {
            driver.findElement(By.xpath("//div[@id='speakers']/div[3]")).click();
        }
    }

    // ------------ implementation tests to US2
    @Then("^the application opens a new page with all information and \"([^\"]*)\" about the \"([^\"]*)\"$")
    public void theApplicationOpensANewPageWithAllInformationAndAboutThe(String name, String member) throws Throwable {
        for(int i = 0; i <= personalPages.length -1; i++){
            driver.get(personalPages[i]);
            if(member.equals("Pedro Jorge") && personalPages[i].contains("pedro")) {
                assertEquals(name, driver.getTitle());
            }
            if(member.equals("Miriam Pereira") && personalPages[i].contains("miriam")) {
                assertEquals(name, driver.getTitle());
            }
            if(member.equals("Vítor Dias") && personalPages[i].contains("vitor")) {
                assertEquals(name, driver.getTitle());
            }
        }
    }

    @Given("^that I'm in the detailed page of \"([^\"]*)\"$")
    public void thatIMInTheDetailedPageOf(String member) throws Throwable {
        for(int i = 0; i <= personalPages.length -1; i++){
            driver.get(personalPages[i]);
            if(member.equals("Pedro Jorge") && personalPages[i].contains("pedro")) {
                assertEquals("Pedro Jorge", driver.getTitle());
            }
            if(member.equals("Miriam Pereira") && personalPages[i].contains("miriam")) {
                assertEquals("Miriam Pereira", driver.getTitle());
            }
            if(member.equals("Vítor Dias") && personalPages[i].contains("vitor")) {
                assertEquals("Vítor Dias", driver.getTitle());
            }
        }
    }

    @And("^exists \"([^\"]*)\" on detailed page$")
    public void existsOnDetailedPage(String member) throws Throwable {
        for(int i = 0; i <= personalPages.length -1; i++) {
            driver.get(personalPages[i]);
            driver.findElement(By.xpath("//section[@id='intro']/div[2]/div/div"));
        }
    }

    @When("^the detailed page is loaded$")
    public void theDetailedPageIsLoaded() throws Throwable {
        for(int i = 0; i <= personalPages.length -1; i++) {
            driver.get(personalPages[i]);
            driver.navigate().refresh();
        }
    }

    @Then("^the application show \"([^\"]*)\" name \"([^\"]*)\"$")
    public void theApplicationShowName(String member, String name) throws Throwable {
        for(int i = 0; i <= personalPages.length -1; i++){
            driver.get(personalPages[i]);
            if(member.equals("Pedro Jorge") && personalPages[i].contains("pedro") ||
                    member.equals("Miriam Pereira") && personalPages[i].contains("miriam") ||
                    member.equals("Vítor Dias") && personalPages[i].contains("vitor")) {
                assertEquals(name, driver.findElement(By.xpath("//section[@id='about']/div[2]/div/ul/li/span")).getText());
            }
        }
    }

    @Then("^the application show \"([^\"]*)\" photos \"([^\"]*)\"$")
    public void theApplicationShowPhotos(String member, String photo) throws Throwable {
        for(int i = 0; i <= personalPages.length -1; i++){
            driver.get(personalPages[i]);
            if(member.equals("Pedro Jorge") && personalPages[i].contains("pedro")) {
                WebElement img = driver.findElement(By.xpath("//section[@id='about']/div/div/div/img[contains(@src,'img/pedro.jpg')]"));
                if(img.toString().contains(photo)){
                    assertEquals(true, true);
                }
            }
            if(member.equals("Miriam Pereira") && personalPages[i].contains("miriam")) {
                WebElement img = driver.findElement(By.xpath("//section[@id='about']/div/div/div/img[contains(@src,'img/miriam.jpg')]"));
                if(img.toString().contains(photo)){
                    assertEquals(true, true);
                }
            }
            if(member.equals("Vítor Dias") && personalPages[i].contains("vitor")) {
                WebElement img = driver.findElement(By.xpath("//section[@id='about']/div/div/div/img[contains(@src,'img/vitor.jpg')]"));
                if(img.toString().contains(photo)){
                    assertEquals(true, true);
                }
            }
        }
    }

    @Then("^the application show members \"([^\"]*)\" short bio \"([^\"]*)\"$")
    public void theApplicationShowMembersShortBio(String member, String shortbio) throws Throwable {
        for(int i = 0; i <= personalPages.length -1; i++){
            driver.get(personalPages[i]);
            if(member.equals("Pedro Jorge") && personalPages[i].contains("pedro") ||
                    member.equals("Miriam Pereira") && personalPages[i].contains("miriam") ||
                    member.equals("Vítor Dias") && personalPages[i].contains("vitor")) {
                assertEquals(shortbio, driver.findElement(By.xpath("//section[@id='intro']/div[2]/div/div/p")).getText());
            }
        }
    }

    @Then("^the application show facebook icon with \"([^\"]*)\" facebook link \"([^\"]*)\"$")
    public void theApplicationShowFacebookIconWithFacebookLink(String member, String facelink) throws Throwable {
        for(int i = 0; i <= personalPages.length -1; i++) {
            driver.get(personalPages[i]);
            if(member.equals("Pedro Jorge") && personalPages[i].contains("pedro")) {
                WebElement href = driver.findElement(By.xpath("//section[@id='intro']/ul/li/a[contains(@href,'https://www.facebook.com/pedrombjorge')]"));
                if(href.toString().contains(facelink)){
                    assertEquals(true, true);
                }
            }
            if(member.equals("Miriam Pereira") && personalPages[i].contains("miriam")) {
                WebElement href = driver.findElement(By.xpath("//section[@id='intro']/ul/li/a[contains(@href,'https://www.facebook.com/miriampereira95')]"));
                if(href.toString().contains(facelink)){
                    assertEquals(true, true);
                }
            }
            if(member.equals("Vítor Dias") && personalPages[i].contains("vitor")) {
                WebElement href = driver.findElement(By.xpath("//section[@id='intro']/ul/li/a[contains(@href,'https://www.facebook.com/vitor.dias.3954')]"));
                if(href.toString().contains(facelink)){
                    assertEquals(true, true);
                }
            }
        }
    }

    @Then("^the application show linkedin icon with \"([^\"]*)\" linkedin link \"([^\"]*)\"$")
    public void theApplicationShowLinkedinIconWithLinkedinLink(String member, String linkedinlink) throws Throwable {
        for(int i = 0; i <= personalPages.length -1; i++) {
            driver.get(personalPages[i]);
            if(member.equals("Pedro Jorge") && personalPages[i].contains("pedro")) {
                WebElement href = driver.findElement(By.xpath("//section[@id='intro']/ul/li[2]/a[contains(@href,'https://www.linkedin.com/in/pedrombjorge/')]"));
                if(href.toString().contains(linkedinlink)){
                    assertEquals(true, true);
                }
            }
            if(member.equals("Miriam Pereira") && personalPages[i].contains("miriam")) {
                WebElement href = driver.findElement(By.xpath("//section[@id='intro']/ul/li[2]/a[contains(@href,'https://www.linkedin.com/in/miriammpereira/')]"));
                if(href.toString().contains(linkedinlink)){
                    assertEquals(true, true);
                }
            }
            if(member.equals("Vítor Dias") && personalPages[i].contains("vitor")) {
                WebElement href = driver.findElement(By.xpath("//section[@id='intro']/ul/li[2]/a[contains(@href,'https://www.linkedin.com/in/vitor-dias-6aa9a310b/')]"));
                if(href.toString().contains(linkedinlink)){
                    assertEquals(true, true);
                }
            }
        }
    }

    @Then("^the application show the \"([^\"]*)\" projects \"([^\"]*)\"$")
    public void theApplicationShowTheProjects(String member, String projects) throws Throwable {
        /*for(int i = 0; i <= personalPages.length-1; i++) {
            driver.get(personalPages[i]);
            if(member.equals("Pedro Jorge") && personalPages[i].contains("pedro")) {
                String[] project = projects.split(",");
                for(int j = 0; j <= project.length-1; j++){
                    assertEquals(project[j], driver.findElement(By.xpath("//div[@id='folio-wrapper']/div/div/a/div/div/h3")).getText());
                    if(project.length > 1){
                        assertEquals(project[j], driver.findElement(By.xpath("//div[@id='folio-wrapper']/div[2]/div/a/div/div/h3")).getText());
                    }
                }
            }
            if(member.equals("Miriam Pereira") && personalPages[i].contains("miriam")) {
                String[] project = projects.split(",");
                for(int j = 0; j <= project.length-1; j++){
                    assertEquals(project[j], driver.findElement(By.xpath("//div[@id='folio-wrapper']/div/div/a/div/div/h3")).getText());
                    if(project.length > 1){
                        assertEquals(project[j], driver.findElement(By.xpath("//div[@id='folio-wrapper']/div[2]/div/a/div/div/h3")).getText());
                    }
                }
            }
            if(member.equals("Vítor Dias") && personalPages[i].contains("vitor")) {
                String[] project = projects.split(",");
                for(int j = 0; j <= project.length-1; j++){
                    assertEquals(project[j], driver.findElement(By.xpath("//div[@id='folio-wrapper']/div/div/a/div/div/h3")).getText());
                    if(project.length > 1){
                        assertEquals(project[j], driver.findElement(By.xpath("//div[@id='folio-wrapper']/div[2]/div/a/div/div/h3")).getText());
                    }
                }
            }
        }*/
    }

    @Then("^the application show the \"([^\"]*)\" tags \"([^\"]*)\"$")
    public void theApplicationShowTheTags(String member, String tags) throws Throwable {
       
    }

    @Then("^the application show \"([^\"]*)\" default name \"([^\"]*)\"$")
    public void theApplicationShowDefaultName(String member, String defaultName) throws Throwable {
        for(int i = 0; i <= testNoInfo.length -1; i++) {
            driver.get(testNoInfo[i]);
            if(member.equals("Pedro Jorge")) {
                assertEquals(defaultName,  driver.getTitle());
            }
            if(member.equals("Miriam Pereira")) {
                assertEquals(defaultName,  driver.getTitle());
            }
            if(member.equals("Vítor Dias")) {
                assertEquals(defaultName,  driver.getTitle());
            }
        }
    }

    @Then("^the application show a \"([^\"]*)\" with default photo \"([^\"]*)\"$")
    public void theApplicationShowAWithDefaultPhoto(String member, String defaultPhoto) throws Throwable {
        for(int i = 0; i <= testNoInfo.length -1; i++) {
            driver.get(testNoInfo[i]);
            if (member.equals("Pedro Jorge") || member.equals("Miriam Pereira") || member.equals("Vítor Dias")) {
                WebElement href = driver.findElement(By.xpath("//section[@id='about']/div/div/div/img[contains(@src,'img/default.jpg')]"));
                if (href.toString().contains(defaultPhoto)) {
                    assertEquals(true, true);
                }
            }
        }
    }

    @Then("^the application show \"([^\"]*)\" short bio message \"([^\"]*)\"$")
    public void theApplicationShowShortBioMessage(String member, String msg) throws Throwable {
        for(int i = 0; i <= testNoInfo.length -1; i++) {
            driver.get(testNoInfo[i]);
            if(member.equals("Pedro Jorge")) {
                assertEquals(msg, driver.findElement(By.xpath("//section[@id='intro']/div[2]/div/div/p/span")).getText());
            }
            if(member.equals("Miriam Pereira")) {
                assertEquals(msg, driver.findElement(By.xpath("//section[@id='intro']/div[2]/div/div/p/span")).getText());
            }
            if(member.equals("Vítor Dias")) {
                assertEquals(msg, driver.findElement(By.xpath("//section[@id='intro']/div[2]/div/div/p/span")).getText());
            }
        }
    }

    @Then("^the application show the \"([^\"]*)\" facebook default \"([^\"]*)\"$")
    public void theApplicationShowTheFacebookDefault(String member, String linkdefault) throws Throwable {
        for(int i = 0; i <= testNoInfo.length -1; i++) {
            driver.get(testNoInfo[i]);
            if (member.equals("Pedro Jorge") || member.equals("Miriam Pereira") || member.equals("Vítor Dias")) {
                WebElement href = driver.findElement(By.xpath("//section[@id='intro']/ul/li/a[contains(@href,'https://www.facebook.com/')]"));
                if (href.toString().contains(linkdefault)) {
                    assertEquals(true, true);
                }
            }
        }
    }

    @Then("^the application show the \"([^\"]*)\" linkedin default \"([^\"]*)\"$")
    public void theApplicationShowTheLinkedinDefault(String member, String linkdefault) throws Throwable {
        for(int i = 0; i <= testNoInfo.length -1; i++) {
            driver.get(testNoInfo[i]);
            if (member.equals("Pedro Jorge") || member.equals("Miriam Pereira") || member.equals("Vítor Dias")) {
                WebElement href = driver.findElement(By.xpath("//section[@id='intro']/ul/li[2]/a[contains(@href,'https://www.linkedin.com/')]"));
                if (href.toString().contains(linkdefault)) {
                    assertEquals(true, true);
                }
            }
        }
    }

    @Then("^the application show the \"([^\"]*)\" projects default \"([^\"]*)\"$")
    public void theApplicationShowTheProjectsDefault(String member, String msg) throws Throwable {
        for(int i = 0; i <= testNoInfo.length -1; i++) {
            driver.get(testNoInfo[i]);
            if (member.equals("Pedro Jorge")) {
                assertEquals(msg, driver.findElement(By.xpath("//section[@id='portfolio']/div[2]/div/p")).getText());
            }
            if (member.equals("Miriam Pereira")) {
                assertEquals(msg, driver.findElement(By.xpath("//section[@id='portfolio']/div[2]/div/p")).getText());
            }
            if (member.equals("Vítor Dias")) {
                assertEquals(msg, driver.findElement(By.xpath("//section[@id='portfolio']/div[2]/div/p")).getText());
            }
        }
    }

    @Then("^the application show the \"([^\"]*)\" tags default \"([^\"]*)\"$")
    public void theApplicationShowTheTagsDefault(String member, String msgTags) throws Throwable {
        for(int i = 0; i <= testNoInfo.length -1; i++) {
            driver.get(testNoInfo[i]);
            if (member.equals("Pedro Jorge")) {
                assertEquals(msgTags, driver.findElement(By.xpath("//section[@id='about']/div[2]/div[2]/ul/p")).getText());
            }
            if (member.equals("Miriam Pereira")) {
                assertEquals(msgTags, driver.findElement(By.xpath("//section[@id='about']/div[2]/div[2]/ul/p")).getText());
            }
            if (member.equals("Vítor Dias")) {
                assertEquals(msgTags, driver.findElement(By.xpath("//section[@id='about']/div[2]/div[2]/ul/p")).getText());
            }
        }
    }
}
